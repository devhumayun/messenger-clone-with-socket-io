import { useEffect, useState } from "react";
import "../MessengerMain.scss";
import DotsSvg from "../../Svg/DotsSvg";
import EditSvg from "../../Svg/EditSvg";
import { FaArrowLeftLong } from "react-icons/fa6";
import SearchSvg from "../../Svg/SearchSvg";
import { useDispatch, useSelector } from 'react-redux'
import { getUsersData } from "../../../features/user/userSlice";
import { getUsers } from "../../../features/user/userApiSlice";
import RandomAvatar from "../../Avater/RandomAvatar";
import UserAvatar from "../../Avater/UserAvater";

const User = () => {
  // search left arrow
  const [searchLeftArrow, setSearchLeftArrow] = useState(false);
  const dispatch = useDispatch()
  const { user } = useSelector( state => state.user)
    console.log(user);
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
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
            {
                user?.map((item, index) => {
                    return(
                        <div className="user-list-item" key={index}>
                          {
                            item.photo ?                         <img
                            src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                            alt=""
                          /> :  <UserAvatar username={item.name} />
                          }
                        <div className="chat-info">
                          <span className="chat-user-title"> {item.name} </span>
                          <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                          </div>
                        </div>
                      </div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default User;
