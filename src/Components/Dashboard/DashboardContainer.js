import React,{useState} from 'react'
import Header from './Header'
import SideNav from './SideNav'

function DashboardContainer(props) {
    const [ activeBackDrop, setActiveBackDrop ] = useState(false);
    return (
        <div className="w-full h-screen flex">
            <SideNav />
            <div className="w-4/5 h-screen overflow-auto">
                <Header headerText={props.headerText} />
               {props.children}
            </div>
        </div>
    )
}

export default DashboardContainer;
