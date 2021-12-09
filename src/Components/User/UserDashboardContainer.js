import React,{useState} from 'react'
import Header from '../Dashboard/Header';
import SideBar from './SideBar';

function UserDashboardContainer(props) {
    // const [ activeBackDrop, setActiveBackDrop ] = useState(false);
    return (
        <div className="w-full h-screen flex">
            <SideBar />
            <div className="w-4/5 h-screen overflow-auto">
                <Header headerText={props.headerText} />
               {props.children}
            </div>
        </div>
    )
}

export default UserDashboardContainer
