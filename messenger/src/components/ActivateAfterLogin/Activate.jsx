import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { createToast } from "../../utils/toast";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import useAuthUser from "../../hooks/useAuthUser";
import "./Activate.scss";

const Activate = () => {
  const { message, error } = useSelector(getAuthData);
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { input, handleInputChange, resetForm } = useFormFields({
    otp: "",
  });

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
                <form>
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
                {user.phone && <p className="resentOTP"> Resent OTP </p>}
                {user.email && (
                  <p className="resentActivationLink">
                    Resent activation link to h******@gmail.com{" "}
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
