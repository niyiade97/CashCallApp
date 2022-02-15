import React from 'react'
import Header from './Header'
import SideNav from './SideNav'
import { useSelector } from "react-redux";

function DashboardContainer(props) {
    // const firstName = localStorage.getItem("adminFirstName");
    // const lastName = localStorage.getItem("adminLastName");
    // const image = localStorage.getItem("adminImage");

    const profileList = useSelector((state) => state.profile)
    
    return (
        <div className="w-full h-screen flex relative">
            <SideNav />
            <div className="w-4/5 relative h-screen overflow-auto">
            {
                Object.keys(profileList.profiles).length > 0 &&
                <Header firstName={profileList.profiles.firstname} lastName={profileList.profiles.lastname} image={profileList.profiles.imageRef} />
            }
               {props.children}
            </div>
        </div>
    )
}

export default DashboardContainer;
