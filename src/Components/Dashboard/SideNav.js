import React from 'react'
import logo from "../../Assets/images/cashCallLogo.png";
import Nav from './Nav';
import { BiHomeAlt,BiDollarCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg"
function SideNav() {
    return (
        <div className="w-1/5 h-screen sticky top-0 bg-white shadow-sideNavShadow">
            <div className="ml-20">
                <div className="pt-2">
                    <img src={logo} alt="logo" className="w-36 h-16" />
                </div>
                <div className="pt-20">
                    <Nav path="/dashboard" text="Dashboard" icon={<BiHomeAlt />}/>
                    <Nav path="/fund-request" text="Fund Request" icon={<BiDollarCircle />}/>
                    <Nav path="/profile" text="Profile" icon={<CgProfile />}/>
                    <Nav path="/settings" text="Settings" icon={<FiSettings />}/>
                </div>
            </div>
        </div>
    )
}

export default SideNav
