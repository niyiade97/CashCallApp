import React from 'react'
import Header from '../Dashboard/Header';
import SideBar from './Nav/SideBar';
import "./UserDashboardContainer.css";
function UserDashboardContainer(props) {
    // const [ activeBackDrop, setActiveBackDrop ] = useState(false);
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
