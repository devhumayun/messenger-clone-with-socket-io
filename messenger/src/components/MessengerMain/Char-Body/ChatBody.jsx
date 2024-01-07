import "../MessengerMain.scss";
import { FcInfo } from "react-icons/fc";
import PluseSvg from "../../Svg/PluseSvg";
import GellarySvg from "../../Svg/GellarySvg";
import StickerSvg from "../../Svg/StickerSvg";
import GiftSvg from "../../Svg/GiftSvg";
import EmojiSvg from "../../Svg/EmojiSvg";
import ThumbsUpSvg from "../../Svg/ThumbsUpSvg";
import EmojiPicker from "emoji-picker-react";
import useDropdownPopupControl from "../../../hooks/useDropdownPopupControl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  activeChatUser,
  createChatMsg,
  getUserToUserChatMessage,
} from "../../../features/Chat/chatApiSlice";
import UserAvatar from "../../Avater/UserAvater";
import useAuthUser from "../../../hooks/useAuthUser";

const ChatBody = ({ activeUser }) => {
  // for emoji
  const { isOpen, toggleMenu } = useDropdownPopupControl();
  const dispatch = useDispatch();
  // get loggedin user
  const { user } = useAuthUser()
  // from chatSlice
  const { chatUser, chat, loader } = useSelector((state) => state.chat);
  // create chat message
  const [input, setInput] = useState("");
  const handleChatMessage = (e) => {
    if (e.key === "Enter") {
      dispatch(
        createChatMsg({
          chat: input,
          receiverId: activeUser,
        })
      );
      setInput("");
    }
  };
  // defined active chating user
  useEffect(() => {
    dispatch(activeChatUser(activeUser));
  }, [dispatch, activeUser]);

 
  // load user to user chat message
  useEffect(() => {
    dispatch(getUserToUserChatMessage(activeUser));
  }, [dispatch, chat]);

  
  return (
    <>
      <div className="chat-body">
        {chatUser ? (
          <>
            <div className="chat-body-wrapper">
              <div className="chat-body-header">
                <div className="user">
                  <div className="user-photo">
                    {chatUser.photo ? (
                      <img src={chatUser.photo} alt="" />
                    ) : (
                      <UserAvatar username={chatUser.name} />
                    )}
                    <span className="active-icon"></span>
                  </div>
                  <div className="user-info">
                    <span className="user-title"> {chatUser.name} </span>
                    <span className="user-status"> Active </span>
                  </div>
                </div>
                <div className="full-screen">
                  <span>
                    {" "}
                    <FcInfo />{" "}
                  </span>
                </div>
              </div>
              <div className="chat-message-wrapper">
                <div className="chat-body-profile">
                  {chatUser.photo ? (
                    <img src={chatUser.photo} alt="" />
                  ) : (
                    <UserAvatar username={chatUser?.name} />
                  )}
                  <span className="frnd-title"> {chatUser?.name} </span>
                  <span className="frnd-mess">
                    {" "}
                    You are friends on Facebook{" "}
                  </span>
                </div>
                
                  {chat?.map((item, index) => {
                    return (
                      <>
                      <div className="chat-msg-list" key={index}>
                        {
                          item.senderId === user._id ? 
                          <div className="my-msg">
                          <div className="msg-txt">
                            {item.message.text}
                          </div>
                          {/* <div className="msg-photo">
                            <img
                              src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                              alt=""
                            />
                          </div> */}
                        </div>
                        :
                        <div className="friend-msg">
                        <img
                          src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                          alt=""
                        />

                        <div className="friends-msg-details">
                          <div className="friend-msg-txt">
                           {item.message.text}
                          </div>
                        </div>
                      </div>
                        }
                        {/* <div className="msg-time">
                          <span> 11:42 PM </span>
                        </div> */}
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className="chat-body-form">
              <div className="chat-icons">
                <PluseSvg />
                <GellarySvg />
                <StickerSvg />
                <GiftSvg />
              </div>
              <div className="chat-form">
                <label htmlFor="">
                  <input
                    type="text"
                    placeholder="Aa"
                    name="name"
                    onKeyDown={handleChatMessage}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <span onClick={toggleMenu}>
                    {" "}
                    <EmojiSvg />{" "}
                  </span>
                </label>
                {isOpen && (
                  <div className="emojipicker">
                    <EmojiPicker />
                  </div>
                )}
              </div>

              <div className="chat-emoji">
                <span>
                  {" "}
                  <ThumbsUpSvg />{" "}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="unchecked-chat-icon">
              <div className="icon">
                <img
                  src="https://i.pinimg.com/564x/5e/cc/d9/5eccd9cc5c69b17370f773fdbbe8c5b9.jpg"
                  alt=""
                />
              </div>
              <div className="text">No chats selected</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatBody;
