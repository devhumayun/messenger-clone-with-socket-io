import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from 'react-redux'
import { resetPasswordUiAction } from "../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { createToast } from "../../utils/toast";
import Cookies from "js-cookie";

const Reset = () => {

  const dispatch = useDispatch()
  const { message, error } = useSelector(getAuthData);
  const navigate = useNavigate()
  const { input, handleInputChange }  = useFormFields({
    newPassword: "",
    confPassword: "",
    otp: "",
  })

  // get cookie
  const token = Cookies.get("verifyToken")

  const handleResetAction = (e) => {
    e.preventDefault()
    dispatch(resetPasswordUiAction({token,input}))
  }

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      navigate("/login")
    }
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, navigate]);

  return (
    <>
      {" "}
      <>
        <PageHeader title="Reset your password" />
        <div className="auth-container">
          <div className="auth-wraper">
            <div className="auth-top">
              <AuthHeader
                title="Reset your password"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  "
              />

              <div className="auth-form">
                <form onSubmit={handleResetAction}>
                  <input type="text" placeholder="New Password" name="newPassword" value={input.newPassword} onChange={handleInputChange} />
                  <input type="text" placeholder="Confirm Password" name="confPassword" value={input.confPassword} onChange={handleInputChange} />
                  <input type="text" placeholder="OTP" name="otp" value={input.otp} onChange={handleInputChange} />

                  <button type="submit" className="bg-fb-green">Reset your password</button>
                </form>
              </div>
            </div>
            <div className="auth-bottom">
              <Link to="/login">Log In Now</Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Reset;
