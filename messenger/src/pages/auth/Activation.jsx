import "./Auth.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import Cookies from "js-cookie";
import { useEffect } from "react";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { activateAccountByLink, activateAccountByOTP } from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/toast";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { tokenEncode } from "../../helpers/helpers";

const Activation = () => {
  const token = Cookies.get("verifyToken");
  const {tokenURL} = useParams()
  const { message, error } = useSelector(getAuthData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { input, handleInputChange, resetForm } = useFormFields({
    otp: "",
  });

  // handle account activation
  const handleAccountActivation = (e) => {
    e.preventDefault();
    dispatch(
      activateAccountByOTP({ token: tokenEncode(token), otp: input.otp })
    );
  };

  useEffect(() => {
    if(tokenURL){
      dispatch(activateAccountByLink(tokenURL))
    }
  }, [tokenURL, dispatch])

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/login");
    }
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, navigate, resetForm]);
  return (
    <>
      {" "}
      <>
        <PageHeader title="Activate your account" />
        <div className="auth-container">
          <div className="auth-wraper">
            <div className="auth-top">
              <AuthHeader
                title="Activate your account"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  "
              />

              <div className="auth-form">
                <form onSubmit={handleAccountActivation}>
                  <input
                    type="text"
                    value={input.otp}
                    onChange={handleInputChange}
                    name="otp"
                    placeholder="OTP"
                  />

                  <button type="submit" className="bg-fb-green">
                    Activate
                  </button>
                </form>
                <p className="resentOTP"> Resent OTP </p>
                <p className="resentActivationLink">
                  {" "}
                  Resent activation link to h******@gmail.com{" "}
                </p>
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

export default Activation;
