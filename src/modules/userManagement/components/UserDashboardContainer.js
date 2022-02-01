import React from 'react'
import Header from "../../dashboard/components/Header"
import SideBar from '../../dashboard/components/SideBar';
import "../style/UserDashboardContainer.css";

function UserDashboardContainer(props) {
    const firstName = localStorage.getItem("userFirstName");
    const lastName = localStorage.getItem("userLastName");
    const image = localStorage.getItem("userImage");

    return (
        <div className="w-full h-screen flex">
            <SideBar />
            <div className="w-4/5 h-screen overflow-auto">
                <Header firstName={firstName} lastName={lastName} image={image} />
                <div className='relative main-container '>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default UserDashboardContainer;
