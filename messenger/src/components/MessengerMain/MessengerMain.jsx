import "./MessengerMain.scss";
import SearchSvg from "../Svg/SearchSvg";
import ProfileSvg from "../Svg/ProfileSvg";
import MuteSvg from "../Svg/MuteSvg";
import Collapsible from "react-collapsible";
import User from "./User/User";
import ChatBody from "./Char-Body/ChatBody";
import { useState } from "react";
import UserAvatar from "../Avater/UserAvater";
const MessengerMain = () => {
  const [activeUser, setActiveUser] = useState(null);
  return (
    <>
      <div className="chat-container">
        <User setActiveUser={setActiveUser} activeUser={activeUser} />
        <ChatBody activeUser={activeUser?._id} />
        {activeUser && (
          <div className="chat-profile">
            <div className="user-profile">
              {activeUser.photo ? (
                <img src={activeUser.photo} alt="" />
              ) : (
                <UserAvatar username={activeUser?.name} />
              )}
              <div className="user-name"> {activeUser.name} </div>
              <div className="user-status"> Active now</div>
              <div className="notification">
                <span>
                  {" "}
                  <ProfileSvg />{" "}
                </span>
                <span>
                  {" "}
                  <MuteSvg />{" "}
                </span>
                <span>
                  {" "}
                  <SearchSvg />{" "}
                </span>
              </div>
            </div>
            <div className="chat-options">
              <Collapsible trigger="Chat info">
                <p>
                  This is the collapsible content. It can be any element or
                  React component you like.
                </p>
              </Collapsible>
              <Collapsible trigger="Customize chat">
                <p>
                  This is the collapsible content. It can be any element or
                  React component you like.
                </p>
              </Collapsible>
              <Collapsible trigger="Media, files and links">
                <p>
                  This is the collapsible content. It can be any element or
                  React component you like.
                </p>
              </Collapsible>
              <Collapsible trigger="Privacy & support">
                <p>
                  This is the collapsible content. It can be any element or
                  React component you like.
                </p>
              </Collapsible>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessengerMain;
