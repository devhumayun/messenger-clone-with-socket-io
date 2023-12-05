import './Topbar.scss'
import { CiSearch } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineOndemandVideo, MdDarkMode } from "react-icons/md";
import { CiShop, CiLogin  } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
            <div className="topbar-logo">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Messenger' />
                    <CiSearch />
                </div>
            </div>
            <div className="topbar-menu">
                <ul>
                    <li><Link to="#"> <GrHomeRounded /> </Link></li>
                    <li><Link to="#"> <MdOutlineOndemandVideo /> </Link></li>
                    <li><Link to="#"> <CiShop /> </Link></li>
                </ul>
            </div>
            <div className="topbar-user">
                <button>
                  <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" />
                </button>
                <div className="user-menu">
                    <ul>
                        <li>
                            <Link to="#"> <MdDarkMode /> <span> Moon </span> </Link>
                            <Link to="#"> <FaUserEdit /> <span> Edit Profile </span> </Link>
                            <Link to="#"> <RiLockPasswordFill /> <span> Change Pass </span> </Link>
                            <Link to="#"> <CiLogin  /> <span> Log Out </span> </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
