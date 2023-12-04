import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { createToast } from "../../utils/toast";
import PropagateLoader from "react-spinners/PropagateLoader";

const Register = () => {
  // hooks
  const dispatch = useDispatch();
  const { message, error, success, loader } = useSelector(getAuthData);
  const navigate = useNavigate()
  // form field manage
  const { input, handleInputChange, resetForm } = useFormFields({
    name: "",
    auth: "",
    password: "",
  });

  // handle user registewr
  const handelUserRegister = (e) => {
    e.preventDefault();

    dispatch(createUser(input));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate('/activation')
    }
    if (error) {
      createToast(error);
    }
  }, [message, error, dispatch, success, navigate, resetForm]);

  return (
    <>
      <PageHeader title="Create you account" />
      <div className="auth-container">
        <div className="auth-wraper">
          <div className="auth-top">
            <AuthHeader
              title="Create you account"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  "
            />

            <div className="auth-form">
              <form onSubmit={handelUserRegister}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={input.name}
                  name="name"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  value={input.auth}
                  name="auth"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={input.password}
                  name="password"
                  onChange={handleInputChange}
                />
                {loader ? (
                  <>
                    <button className="bg-fb-green registerBotton">
                      <PropagateLoader
                        color={"#7C47FF"}
                        loading={loader}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className="registerloader"
                      />
                    </button>
                  </>
                ) : (
                  <button className="bg-fb-green"> Register </button>
                )}
              </form>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/login">Log In Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
