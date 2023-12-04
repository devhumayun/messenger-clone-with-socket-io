import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
  createOTP,
  isEmail,
  isMobile,
  tokenDecode,
  tokenEncode,
} from "../helpers/helpers.js";
import { sendSMS } from "../utils/sendSMS.js";
import { AccountActivationEmail } from "../mails/AccountActivationMail.js";

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password)
    return res.status(404).json({ message: "All fields are required" });

  // find login user by email
  const loginUser = await User.findOne({ email }).populate("role");

  // user not found
  if (!loginUser) return res.status(404).json({ message: "User not found" });

  // password check
  const passwordCheck = await bcrypt.compare(password, loginUser.password);

  // password check
  if (!passwordCheck)
    return res.status(404).json({ message: "Wrong password" });

  // create access token
  const token = jwt.sign(
    { email: loginUser.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
    }
  );

  // create Refresh token
  const refreshToken = jwt.sign(
    { email: loginUser.email },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN,
    }
  );

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    token,
    user: loginUser,
    message: "User Login Successful",
  });
});

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logout successful" });
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const register = asyncHandler(async (req, res) => {

  const { name, auth, password } = req.body;

  if (!name || !auth || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // auth value manage
  let authEmail = null;
  let authPhone = null;

  // create a access token for account activation
  const activationCode = createOTP();

  if (isMobile(auth)) {
    authPhone = auth;

    // check mobile exists or not
    const isMobileExists = await User.findOne({ phone: auth });

    if (isMobileExists) {
      return res.status(400).json({
        message: "Phone Number already exists",
      });
    }

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    res.cookie("verifyToken", verifyToken);

    // send OTP to user mobile
    await sendSMS(
      auth,
      `Hello ${name}, Your account activation code is : ${activationCode}`
    );
  } else if (isEmail(auth)) {
    authEmail = auth;

    // check mobile exists or not
    const isEmailExists = await User.findOne({ email: auth });

    if (isEmailExists) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    res.cookie("verifyToken", verifyToken);

    // activation link
    const activationLink = `http://localhost:3000/activation/${tokenEncode(
      verifyToken
    )}`;
    // send ativation link to email
    await AccountActivationEmail(auth, {
      name,
      code: activationCode,
      link: activationLink,
    });
  } else {
    return res.status(400).json({
      message: "Your must use mobile Number or Email address",
    });
  }

  // password hash
  const hashPass = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email: authEmail,
    phone: authPhone,
    password: hashPass,
    accessToken: activationCode,
  });

  res.status(200).json({
    user,
    message: "User Created successful",
  });

});

/**
 * Account Activation By OTP
 */
export const accountActivationByOTP = asyncHandler(async(req, res) => {
  const {otp} = req.body
  const {token} = req.params
  if(!token){
    return res.status(400).json({ message: "Token not found" });
  }
  if(!otp){
    return res.status(400).json({ message: "OTP is requried" });
  }
  const tokenDecoded = tokenDecode(token)
  const tokenVerify = jwt.verify(tokenDecoded, process.env.ACCESS_TOKEN_SECRET )
  if(!tokenVerify){
    return res.status(400).json({ message: "Invalid account activation request!" });
  }

  let activatedUser = null;
  if(isMobile(tokenVerify.auth)){
    activatedUser = await User.findOne({phone: tokenVerify.auth})
    if(!activatedUser){
      return res.status(404).json({ message: "User not found" });
    }
  }else if(isEmail(tokenVerify.auth)){
    activatedUser = await User.findOne({email: tokenVerify.auth})
    if(!activatedUser){
      return res.status(404).json({ message: "User not found" });
    }
  }

  if(otp !== activatedUser.accessToken){
    return res.status(400).json({ message: "Invalid OTP" });
  }

  activatedUser.accessToken = null
  activatedUser.save()
  res.clearCookie("verifyToken")

  return res.status(200).json({ message: "Account activation successfull" });
})

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const loggedInUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.me);
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const makeHashPass = asyncHandler(async (req, res) => {
  const { password } = req.body;
  // password hash
  const hashPass = await bcrypt.hash(password, 10);
  res.status(200).json({ hashPass });
});

