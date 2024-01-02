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
import { useEffect } from "react";
import useFormFields from "../../../hooks/useFormFields";
import { activeChatUser } from "../../../features/Chat/chatApiSlice";
import UserAvatar from "../../Avater/UserAvater";

const ChatBody = ({ activeUser }) => {
  // for emoji
  const { isOpen, toggleMenu } = useDropdownPopupControl();
  const dispatch = useDispatch();

  const { chatUser } = useSelector((state) => state.chat);

  const { input, handleInputChange } = useFormFields({
    name: "",
  });

  const handleChatMessage = (e) => {};

  useEffect(() => {
    dispatch(activeChatUser(activeUser));
  }, [dispatch, activeUser]);

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
                <div className="chat-msg-list">
                  <div className="my-msg">
                    <div className="msg-txt">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque qui illo hic, earum pariatur quaerat! Enim iste
                      doloremque libero. Similique iste laboriosam aliquam,
                      tempore beatae repellat praesentium nemo! Qui, accusamus?
                    </div>
                    <div className="msg-photo">
                      <img
                        src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="msg-time">
                    <span> 11:42 PM </span>
                  </div>
                  <div className="friend-msg">
                    <img
                      src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                      alt=""
                    />

                    <div className="friends-msg-details">
                      <div className="friend-msg-txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Hic quos ipsum rem nesciunt culpa commodi
                        possimus. Nihil vero unde in ipsa similique? Facere
                        reprehenderit officiis suscipit voluptatum voluptatibus
                        quisquam optio nemo consequatur minima.
                      </div>
                    </div>
                  </div>
                </div>
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
                    value={input.name}
                    onChange={handleInputChange}
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
            <div>
              hello
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatBody;
