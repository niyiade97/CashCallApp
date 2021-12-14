import React,{useState} from 'react'
import Header from './Header'
import SideNav from './SideNav'

function DashboardContainer(props) {
    const [ activeBackDrop, setActiveBackDrop ] = useState(false);
    return (
        <div className="w-full h-screen flex relative">
            <SideNav />
            <div className="w-4/5 h-screen overflow-auto relative">
                <Header headerText={""} />
               {props.children}
            </div>
        </div>
    )
}

export default DashboardContainer;
