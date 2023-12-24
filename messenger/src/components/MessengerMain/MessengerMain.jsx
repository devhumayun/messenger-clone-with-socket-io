import "./MessengerMain.scss";
import DotsSvg from "../Svg/DotsSvg";
import EditSvg from "../Svg/EditSvg";
import SearchSvg from "../Svg/SearchSvg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { FcInfo } from "react-icons/fc";
import PluseSvg from "../Svg/PluseSvg";
import GellarySvg from "../Svg/GellarySvg";
import StickerSvg from "../Svg/StickerSvg";
import GiftSvg from "../Svg/GiftSvg";
import EmojiSvg from "../Svg/EmojiSvg";
import ThumbsUpSvg from "../Svg/ThumbsUpSvg";
import EmojiPicker from 'emoji-picker-react';
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import ProfileSvg from "../Svg/ProfileSvg";
import MuteSvg from "../Svg/MuteSvg";
import Collapsible from 'react-collapsible';
const MessengerMain = () => {
  // search left arrow
  const [searchLeftArrow, setSearchLeftArrow] = useState(false);
  // for emoji
  const { isOpen, toggleMenu } = useDropdownPopupControl()
  return (
    <>
      <div className="chat-container">
        <div className="chat-user">
          <div className="chat-user-header">
            <div className="header-top">
              <h2>Chats</h2>
              <div className="icons">
                <span>
                  {" "}
                  <DotsSvg />{" "}
                </span>
                <span>
                  {" "}
                  <EditSvg />{" "}
                </span>
              </div>
            </div>
            <div className="header-middle">
              {searchLeftArrow && (
                <span
                  className={searchLeftArrow ? "left-arrow" : "left-arrow-hide"}
                >
                  {" "}
                  <FaArrowLeftLong
                    onClick={() => setSearchLeftArrow(false)}
                  />{" "}
                </span>
              )}
              <label
                htmlFor=""
                onClick={() => setSearchLeftArrow(true)}
                className={
                  searchLeftArrow ? "labelwithArro" : "labelwithoutArro"
                }
              >
                <input type="text" placeholder="Search Messenger" />
                <span>
                  {" "}
                  <SearchSvg />{" "}
                </span>
              </label>
            </div>
            <div className="header-bottom">
              <button> Inbox </button>
            </div>
          </div>
          <div className="user-list-info">
            <div className="user-list-item active">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
            <div className="user-list-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="chat-info">
                <span className="chat-user-title"> Humayun </span>
                <div className="">
                  <span className="chat-short"> Kmn achen Bhai </span>
                  <span className="chat-time"> 1h </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-body-wrapper">
            <div className="chat-body-header">
              <div className="user">
                <div className="user-photo">
                  <img
                    src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                    alt=""
                  />
                  <span className="active-icon"></span>
                </div>
                <div className="user-info">
                  <span className="user-title"> Humayun </span>
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
                <img
                  src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                  alt=""
                />
                <span className="frnd-title"> Humayun </span>
                <span className="frnd-mess"> You are friends on Facebook </span>
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
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Hic quos ipsum rem nesciunt culpa commodi possimus. Nihil
                      vero unde in ipsa similique? Facere reprehenderit officiis
                      suscipit voluptatum voluptatibus quisquam optio nemo
                      consequatur minima.
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
                <input type="text" placeholder="Aa" />
                <span onClick={toggleMenu}>
                  {" "}
                  <EmojiSvg />{" "}
                </span>
              </label>
              {
                isOpen && 
                <div className="emojipicker">
                   <EmojiPicker />
                </div>
              }
            </div>
              
            <div className="chat-emoji">
              <span>
                {" "}
                <ThumbsUpSvg />{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="chat-profile">
          <div className="user-profile">
            <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
            <div className="user-name"> Humayun Kabir </div>
            <div className="user-status"> Active now</div>
            <div className="notification">
              <span> <ProfileSvg /> </span>
              <span> <MuteSvg /> </span>
              <span> <SearchSvg /> </span>
            </div>
          </div>
          <div className="chat-options">
            <Collapsible trigger="Chat info">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              </Collapsible>
            <Collapsible trigger="Customize chat">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              </Collapsible>
            <Collapsible trigger="Media, files and links">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              </Collapsible>
            <Collapsible trigger="Privacy & support">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              </Collapsible>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessengerMain;
