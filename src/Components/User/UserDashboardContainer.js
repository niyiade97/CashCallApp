import React,{useState} from 'react'
import Header from '../Dashboard/Header';
import SideNav from '../Dashboard/SideNav';

function UserDashboardContainer(props) {
    // const [ activeBackDrop, setActiveBackDrop ] = useState(false);
    return (
        <div className="w-full h-screen flex">
            <SideNav />
            <div className="w-4/5 h-screen overflow-auto">
                <Header headerText={props.headerText} />
                <div className='relative'>
                    {props.children}
                </div>
               
            </div>
        </div>
    )
}

export default UserDashboardContainer;
