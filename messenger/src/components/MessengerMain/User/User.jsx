import { useEffect, useState } from "react";
import "../MessengerMain.scss";
import DotsSvg from "../../Svg/DotsSvg";
import EditSvg from "../../Svg/EditSvg";
import { FaArrowLeftLong } from "react-icons/fa6";
import SearchSvg from "../../Svg/SearchSvg";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../features/user/userApiSlice";
import UserAvatar from "../../Avater/UserAvater";

const User = ({ setActiveUser, activeUser }) => {
  // search left arrow
  const [searchLeftArrow, setSearchLeftArrow] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
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
              className={searchLeftArrow ? "labelwithArro" : "labelwithoutArro"}
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
          {user?.map((item, index) => {
            return (
              <div
                className={`user-list-item ${item._id === activeUser?._id ? "active" : ""}`}
                key={index}
                onClick={() => setActiveUser(item)}
              >
                {item.photo ? (
                  <img src={item.photo} alt="" />
                ) : (
                  <UserAvatar username={item.name} />
                )}
                <div className="chat-info">
                  <span className="chat-user-title"> {item.name} </span>
                  <div className="">
                    <span className="chat-short"> Kmn achen Bhai </span>
                    <span className="chat-time"> 1h </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default User;
