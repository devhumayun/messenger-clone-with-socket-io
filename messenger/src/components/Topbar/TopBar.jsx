import "./Topbar.scss";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import {  MdDarkMode } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import useAuthUser from "../../hooks/useAuthUser";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authApiSlice";
import Activate from "../ActivateAfterLogin/Activate";
import HomeSvg from "../Svg/HomeSvg";
import VideoSvg from "../Svg/VideoSvg";
import MarketPlaceSvg from "../Svg/MarketPlaceSvg";
import GroupSvg from "../Svg/GroupSvg";
import UserAvatar from "../Avater/UserAvater";

const TopBar = () => {
  const { user } = useAuthUser();
  const { isOpen, toggleMenu } = useDropdownPopupControl();
  const dispatch = useDispatch();

  // user logout
  const handleUserLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-logo">
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                alt=""
              />
            </div>
            <div className="search">
              <input type="text" placeholder="Search Messenger" />
              <CiSearch />
            </div>
          </div>
          <div className="topbar-menu">
            <ul>
              <li>
                <Link to="/">
                  <HomeSvg />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <VideoSvg />
                </Link>
              </li>
              <li>
                <Link to="#">
                 <MarketPlaceSvg />
                </Link>
              </li>
              <li>
                <Link to="#">
                 <GroupSvg />
                </Link>
              </li>
            </ul>
          </div>
          <div className="topbar-user">
            <button onClick={toggleMenu}>
              {
                user.photo ?                 
                <img
                src={user.photo}
                alt=""
              /> : <UserAvatar username={user.name} />
              }
            </button>
            {isOpen && (
              <div className="user-menu">
                <ul>
                  <li>
                    <Link to="/profile-edit"> { user.name } </Link>
                    <Link to="#">
                      {" "}
                      <MdDarkMode /> <span> Moon </span>{" "}
                    </Link>
                    <Link to="/profile-edit">
                      {" "}
                      <FaUserEdit /> <span> Edit Profile </span>{" "}
                    </Link>
                    <Link to="#">
                      {" "}
                      <RiLockPasswordFill /> <span> Change Pass </span>{" "}
                    </Link>
                    <Link to="#" onClick={handleUserLogOut}>
                      {" "}
                      <CiLogin /> <span> Log Out </span>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      { user.accessToken && <Activate />}
    </>
  );
};

export default TopBar;
