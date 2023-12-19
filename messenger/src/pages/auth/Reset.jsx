import "./Auth.scss";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";

const Reset = () => {

  const { input, handleInputChange }  = useFormFields({
    auth: ""
  })

  const handleResetForm = (e) => {
    e.preventDefault()

    console.log(input);
  }

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
                <form onSubmit={handleResetForm}>
                  <input type="text" placeholder="Email or Phone number" name="auth" value={input.auth} onChange={handleInputChange} />

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
