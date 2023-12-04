import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useEffect } from "react";
import { createToast } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import useFormFields from "../../hooks/useFormFields";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { loginUser } from "../../features/auth/authApiSlice";

const Login = () => {
  const { message, error, user } = useSelector(getAuthData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { input, handleInputChange, resetForm } = useFormFields({
    auth: "",
    password: "",
  });

  const handleUserLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser(input))
  }

  useEffect(() => {
    if(user){
      navigate('/')
    }
  },[user, navigate])

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
      <PageHeader title="Sign In Here" />
      <div className="auth-container">
        <div className="auth-wraper">
          <div className="auth-top">
            <AuthHeader
              title="Sign In Here"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  "
            />

            <div className="auth-form">
              <form onSubmit={handleUserLogin}>
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  name="auth"
                  value={input.auth}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                />
                <button type="submit" className="bg-fb">Log In</button>
              </form>
              <Link to={"/forgot"}>Forgot your password</Link>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/register">Create new account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
