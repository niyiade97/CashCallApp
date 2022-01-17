import React,{useState, useEffect} from 'react';
import Profile from "../../modules/profile/components/Profile";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";
import axios from "axios";
import BackDrop from "../../modules/customElement/component/BackDrop"
import Loader from "../../modules/customElement/component/Loader"


function ProfilePage() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const profileAPI = process.env.REACT_APP_GET_PROFILE_API;
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const [ profile, setProfile ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const handlePasswordModal = () =>{
        
    }
    const handleOnLoad = (state) =>{
        setLoading(state)
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
            console.log(res);
            // setProfile(res.data.data.map((data) =>{
            //     return{
            //         data
            //     }
            // }))
        })
        .catch(err =>{
            handleOnLoad(false);
        })
    }

    useEffect(() => {
        getProfile();
    }, [])

    return (
        <UserDashboardContainer>
            <div className="w-full relative">
                <Profile handlePasswordModal={handlePasswordModal} profile={profile}> 
                {
                    loading &&
                    <>
                        <BackDrop indexValue={"40"}/>
                        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 transform">
                            <Loader color="#FFFFFF"/>
                        </div>
                    </>
                }
                </Profile>
            </div>
        </UserDashboardContainer>
    )
}

export default ProfilePage;
