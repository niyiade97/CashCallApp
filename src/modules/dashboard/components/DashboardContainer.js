import React from 'react'
import Header from './Header'
import SideNav from './SideNav'

function DashboardContainer(props) {
    const firstName = localStorage.getItem("adminFirstName");
    const lastName = localStorage.getItem("adminLastName");
    return (
        <div className="w-full h-screen flex relative">
            <SideNav />
            <div className="w-4/5 relative h-screen overflow-auto">
                <Header firstName={firstName} lastName={lastName} />
               {props.children}
            </div>
        </div>
    )
}

export default DashboardContainer;
