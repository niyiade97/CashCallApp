import React,{useState, useEffect} from 'react';
import Profile from "../../modules/profile/components/Profile";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";
import axios from "axios";
import BackDrop from "../../modules/customElement/component/BackDrop"
import Loader from "../../modules/customElement/component/Loader"
import ChangePasswordModal from '../../modules/modal/component/ChangePasswordModal';
import AlertModal from '../../modules/modal/component/AlertModal';

function ProfilePage() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const profileAPI = process.env.REACT_APP_GET_PROFILE_API;
    const updateProfileAPI = process.env.REACT_APP_UPDATE_PROFILE_API;
    const changePasswordAPI = process.env.REACT_APP_CHANGE_PASSWORD_API;
    const token = localStorage.getItem("userToken");
    const userId = localStorage.getItem("userId");
    const [ passwordModal ,setPasswordModal ] = useState(false);
    const [ inputIsDisabled, setInputIsDisabled ] = useState(true);
    const [ changePassword, setChangePassword ] = useState({
        id: parseInt(userId),
        oldPassword: "",
        newPassword: ""
    })
    const [ message, setMessage ] = useState({
        msg: "",
        status: false
    })
   
    const [ alertModalIsActive, setAlertModalIsActive ] = useState(false);

   
    const [ profile, setProfile ] = useState({
        id: parseInt(userId),
        firstname: "",
        lastname: "",
        email: "",
        base64File: "",
        imageRef: ""
    });
    const [ loading, setLoading ] = useState(false);
    const passwordOnChange = (name, value) =>{
        setChangePassword((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    const handleChange = (name, value) =>{
        setProfile((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    const handleOnLoad = (state) =>{
        setLoading(state)
    }

    const editProfile = () =>{
        handleOnLoad(true)
        const payload = {
            id: profile.id,
            email: profile.email,
            firstname: profile.firstname,
            lastname: profile.lastname,
            base64File: profile.base64File
        }
        axios.post(baseURL + updateProfileAPI, payload,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleOnLoad(false)
            setInputIsDisabled(true);
            getProfile();
        })
        .catch(err =>{
            handleOnLoad(false);
        })
    }

    const getProfile = () =>{
        handleOnLoad(true)
        axios.get(baseURL + profileAPI + userId,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleOnLoad(false)
            localStorage.setItem("userImage", res.data.data.imageRef);
            localStorage.setItem("userEmail", res.data.data.email);
            localStorage.setItem("userFirstName", res.data.data.firstname);
            localStorage.setItem("userLastName", res.data.data.lastname);
            setProfile((prevState) =>{
                return{
                    ...prevState,
                    firstname: res.data.data.firstname,
                    lastname: res.data.data.lastname,
                    email: res.data.data.email,
                    imageRef: res.data.data.imageRef,
                    base64File:res.data.data.base64File
                }
                
            })
        })
        .catch(err =>{
            handleOnLoad(false);
        })
    }

    const handleChangePassword = () =>{
        setPasswordModal(false);
        change_Password();
    }
    
    const change_Password = () =>{
        handleOnLoad(true);
        axios.post(baseURL + changePasswordAPI, changePassword,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleOnLoad(false);
            setMessage({
                msg:"Password Changed Successfully !!",
                status: true
            })
            handleAlertModal();
        })
        .catch(err =>{
            setMessage({
                msg:"Error has occured!!",
                status: false
            })
            handleOnLoad(false);
            handleAlertModal();
        })
    }

    const handleEditProfile = () =>{
        setInputIsDisabled(!inputIsDisabled);
    }

    const handlePasswordModal = () =>{
        setPasswordModal(!passwordModal);
    }

    const handleAlertModal = () =>{
        setAlertModalIsActive(!alertModalIsActive);
    }

    useEffect(() => {
        getProfile();
    }, [])

    return (
        <UserDashboardContainer>
            <div className="w-full relative">
                <Profile handlePasswordModal={handlePasswordModal} profile={profile} inputIsDisabled={inputIsDisabled} handleEditProfile={handleEditProfile} handleChange={handleChange} editProfile={editProfile}> 
                {
                    loading &&
                    <>
                        <BackDrop indexValue={"40"}/>
                        <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 transform">
                            <Loader color="#FFFFFF"/>
                        </div>
                    </>
                }
                {
                    passwordModal &&
                    <ChangePasswordModal handleCloseBackDrop={handlePasswordModal} passwordOnChange={passwordOnChange} handleChangePassword={handleChangePassword} passwordDetails={changePassword}/>
                }
                {
                    alertModalIsActive &&
                    <AlertModal
                        messageHeader={message.msg}
                        messageText1=""
                        messageText2=""
                        status={message.status}
                        handleClick={handleAlertModal}
                    
                    />
                }

                </Profile>
            </div>
        </UserDashboardContainer>
    )
}

export default ProfilePage;
