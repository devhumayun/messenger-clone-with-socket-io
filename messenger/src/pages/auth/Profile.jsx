import { Link } from "react-router-dom";
import TopBar from "../../components/Topbar/TopBar";
import "./Auth.scss"
import useAuthUser from "../../hooks/useAuthUser";
import UserAvatar from "../../components/Avater/UserAvater";
import { FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { userProfilePhoto } from "../../features/auth/authApiSlice";
import { getAuthData } from "../../features/auth/authSlice";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useEffect } from "react";

const Profile = () => {

  // get loggedin user
  const { user } = useAuthUser()
  // auth user
  const { loader } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const handleProfilePhotoUpload = (e) => {
    const profilePhoto = e.target.files[0]

    const form_data = new FormData()
    form_data.append('profile-photo', profilePhoto)
    dispatch(userProfilePhoto({data: form_data, id: user._id}))
  }

  

  return <>
    <TopBar />
    <div className="auth-container">
        <div className="auth-wraper">
          <div className="auth-top">
            <div className="profile-edit-wraper">
              <div className="profile-photo">
                  {
                    loader ? <>
                      <span className="loader-style">
                          <PropagateLoader
                            color={"#7C47FF"}
                            loading={loader}
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            className="registerloader"
                          />
                      </span>
                    </> 
                    : 
                    <>
                      {
                       user.photo ? <img className="user-profile-photo" src={user.photo} alt="user-profile-photo" /> : <UserAvatar className="profile-avater" username={user.name} />
                      }
                    </>
                  }
                <label htmlFor="uploadfile" className="upload-file">
                  <input disabled={loader} type="file" id="uploadfile" hidden onChange={handleProfilePhotoUpload}/>
                  <span> <FaCamera /> </span>
                </label>
              </div>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/">Go to messenger </Link>
          </div>
        </div>
      </div>
  </>;
};

export default Profile;
