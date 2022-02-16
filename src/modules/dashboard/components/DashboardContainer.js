import React, { useEffect } from 'react'
import Header from './Header'
import SideNav from './SideNav'
import { getProfile } from "../../../services/profile";
import { useSelector, useDispatch } from "react-redux";
import { createProfile } from "../../../redux/slice/profileSlice"
function DashboardContainer(props) {
    // const firstName = localStorage.getItem("adminFirstName");
    // const lastName = localStorage.getItem("adminLastName");
    // const image = localStorage.getItem("adminImage");
    const userId = localStorage.getItem("adminId");
    const profileList = useSelector((state) => state.profile.profiles)
    const dispatch = useDispatch();

    const loadProfile = () =>{
        
        getProfile(userId)
        .then((res) =>{
            dispatch(createProfile(res.data.data));
            // setProfile((prevState) =>{
            //     return{
            //         ...prevState,
            //         firstname: res.data.data.firstname,
            //         lastname: res.data.data.lastname,
            //         email: res.data.data.email,
            //         imageRef: res.data.data.imageRef
            //     }
            // })
        })
        .catch(err =>{
            // handleOnLoad(false);
        })
    }

    useEffect(() =>{
        loadProfile();
    }, [])
    return (
        <div className="w-full h-screen flex relative">
            <SideNav />
            <div className="w-4/5 relative h-screen overflow-auto">
            {
                Object.keys(profileList).length > 0 &&
                <Header firstName={profileList.firstname} lastName={profileList.lastname} image={profileList.imageRef} />
            }
               {props.children}
            </div>
        </div>
    )
}

export default DashboardContainer;
