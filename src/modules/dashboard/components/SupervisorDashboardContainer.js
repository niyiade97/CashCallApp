import React from 'react'
import Header from './Header'
import SuperNav from './SuperNav'

function SupervisorDashboardContainer(props) {
    
    return (
        <div className="w-full h-screen flex relative">
            <SuperNav />
            <div className="w-4/5 relative h-screen overflow-auto">
                <Header headerText={""} />
               {props.children}
            </div>
        </div>
    )
}

export default SupervisorDashboardContainer;
