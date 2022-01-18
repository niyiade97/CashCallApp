import React from 'react'
import Header from "../../dashboard/components/Header"
import SideBar from '../../dashboard/components/SideBar';
import "../style/UserDashboardContainer.css";
function UserDashboardContainer(props) {
    return (
        <div className="w-full h-screen flex">
            <SideBar />
            <div className="w-4/5 h-screen overflow-auto">
                <Header headerText={props.headerText} />
                <div className='relative main-container '>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default UserDashboardContainer;