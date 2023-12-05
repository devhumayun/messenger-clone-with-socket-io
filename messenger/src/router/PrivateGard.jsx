import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateGard = () => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    if (user.accessToken) {
      return <Navigate to="/activation-after-login" />;
    }else{

      return <Outlet />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateGard;
