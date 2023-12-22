import Activate from "../../components/ActivateAfterLogin/Activate.jsx";
import MessengerMain from "../../components/MessengerMain/MessengerMain.jsx";
import TopBar from "../../components/Topbar/TopBar.jsx";
import useAuthUser from "../../hooks/useAuthUser.jsx";

const Messenger = () => {
  const { user } = useAuthUser()
  return <>
      <TopBar />
      {user.accessToken ? <Activate /> : <MessengerMain />}
  </>;
};

export default Messenger;
