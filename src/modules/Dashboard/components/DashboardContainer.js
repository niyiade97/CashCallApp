import React,{useState} from 'react'
import Header from './Header'
import SideNav from './SideNav'

function DashboardContainer(props) {
    
    return (
        <div className="w-full h-screen flex relative">
            <SideNav />
            <div className="w-4/5 relative h-screen overflow-auto">
                <Header headerText={""} />
               {props.children}
            </div>
        </div>
    )
}

export default DashboardContainer;
