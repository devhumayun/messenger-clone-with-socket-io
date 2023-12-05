import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { createToast } from "../../utils/toast";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import useAuthUser from "../../hooks/useAuthUser";
import "./Activate.scss";
import { hideEmailMiddlePart, hideMobileMiddlePart, tokenEncode } from "../../helpers/helpers";
import { activateAccountByOTP, resentActivationCode } from "../../features/auth/authApiSlice";
import Cookies from "js-cookie";

const Activate = () => {
  const { message, error } = useSelector(getAuthData);
  const token = Cookies.get("verifyToken");
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { input, handleInputChange, resetForm } = useFormFields({
    otp: "",
  });

    //   handle resent code
    const handleResentActivationCode = (e, auth) => {
        e.preventDefault()
        dispatch(resentActivationCode(auth))
    }

  // handle account activation
  const handleAccountActivation = (e) => {
    e.preventDefault();
    dispatch(
      activateAccountByOTP({ token: tokenEncode(token), otp: input.otp })
    );
  };

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
        <div className="auth-container">
          <div className="auth-wraper activate">
            <div className="auth-top">
              <h3>
                {" "}
                Hi, {user.name}, Activate your account to access the resources{" "}
              </h3>
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
                {user.phone && <p onClick={(e) => handleResentActivationCode(e, user.phone)} className="resentOTP"> Resent OTP to {hideMobileMiddlePart(user.phone)} </p>}
                {user.email && (
                  <p onClick={(e) => handleResentActivationCode(e, user.email)} className="resentActivationLink">
                    Resent activation link to {hideEmailMiddlePart(user.email)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Activate;
