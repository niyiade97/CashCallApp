import React from 'react'
import Header from './Header'
import SuperNav from './SuperNav'

function SupervisorDashboardContainer(props) {
    const firstName = localStorage.getItem("superFirstName");
    const lastName = localStorage.getItem("superLastName");
    const image = localStorage.getItem("superImage");
    return (
        <div className="w-full h-screen flex relative">
            <SuperNav />
            <div className="w-4/5 relative h-screen overflow-auto">
                <Header firstName={firstName} lastName={lastName} image={image} />
               {props.children}
            </div>
        </div>
    )
}

export default SupervisorDashboardContainer;
