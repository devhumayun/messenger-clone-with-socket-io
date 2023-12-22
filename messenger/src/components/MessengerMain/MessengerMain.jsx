import './MessengerMain.scss'
import DotsSvg from '../Svg/DotsSvg';
import EditSvg from '../Svg/EditSvg';
import SearchSvg from '../Svg/SearchSvg';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';

const MessengerMain = () => {

    // search left arrow
    const [ searchLeftArrow, setSearchLeftArrow ] = useState(false)
  return (
    <>
      <div className="chat-container">
        <div className="chat-user">
            <div className="chat-user-header">
                <div className="header-top">
                    <h2>Chats</h2>
                    <div className='icons'>
                        <span> <DotsSvg /> </span>
                        <span> <EditSvg /> </span>
                    </div>
                </div>
                <div className="header-middle">
                    {
                        searchLeftArrow && <span className={searchLeftArrow ? "left-arrow" : "left-arrow-hide"}> <FaArrowLeftLong onClick={() => setSearchLeftArrow(false)} /> </span>
                    }
                    <label htmlFor="" onClick={() => setSearchLeftArrow(true)} className={searchLeftArrow ? "labelwithArro" : "labelwithoutArro"}>
                        <input type="text" placeholder='Search Messenger'/>
                        <span> <SearchSvg /> </span>
                    </label>
                </div>
                <div className="header-bottom">
                    <button> Inbox </button>
                </div>
            </div>
            <div className="user-list-info">
                <div className="user-list-item active">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
                <div className="user-list-item">
                    <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                    <div className="chat-info">
                        <span className='chat-user-title'> Humayun </span>
                        <div className="">
                            <span className="chat-short"> Kmn achen Bhai </span>
                            <span className="chat-time"> 1h </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="chat-body">
        </div>
        <div className="chat-profile">
            proile
        </div>
      </div>
    </>
  )
}

export default MessengerMain
