import ChatBody from "../components/MessengerMain/Char-Body/ChatBody";
import Profile from "../pages/auth/Profile";
import Messenger from "../pages/messenger/Messenger";
import PrivateGard from "./PrivateGard";

// create Private router
const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        path: "/",
        element: <Messenger />,
      },
      {
        path: "/profile-edit",
        element: <Profile />,
      },
      {
        path: "/t/:id",
        element: <ChatBody />,
        
      },
    ],
  },
];

// export router
export default privateRouter;
