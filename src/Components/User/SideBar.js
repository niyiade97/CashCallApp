import React,{useState} from 'react'
import logo from "../../Assets/images/cashCallLogo.png";
import Nav from '../Dashboard/Nav';
import { BiHomeAlt,BiDollarCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg"
import { RiOrganizationChart } from "react-icons/ri";
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';
import "./SideBar.css";
import {Link} from "react-router-dom"

function SideBar() {
    const [ dropDownStatus, setDropDownStatus ] = useState(false);
    const handleDropDown = () =>{
        setDropDownStatus(!dropDownStatus);
    }
    return (
        <div className="side-bar-container w-1/5 h-screen sticky top-0 bg-white shadow-sideNavShadow">
            <div className="ml-20">
                <div className="pt-2">
                    <img src={logo} alt="logo" className="w-36 h-16 object-cover" />
                </div>
                <div className="side-bar-nav-container pt-20">
                    <Nav path="/dashboard" text="Dashboard" icon={<BiDollarCircle />} dropDownIsActive={false}/>
                    <Nav path="/fund-request" text="Fund Requests" icon={<BiDollarCircle />} dropDownIsActive={true} handleClick={handleDropDown}/>
                    <ul className={`${dropDownStatus ? "block" : "hidden" } font-bold text-sm pl-10 duration-1000 transition-all ease-in-out`}>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/requests">All requests</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/approved-requests">Approved Request</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/disbursed-requests">Approved and Disbursed</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/pending-requests">Pending Request</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/rejected-requests">Rejected Request</Link>
                        </li>
                    </ul>
                    <Nav path="/profile" text="Profile" icon={<CgProfile />} dropDownIsActive={false}/>
                    <Nav path="/settings" text="Settings" icon={<FiSettings />} dropDownIsActive={false}/>
                    <Nav path="/login" text="Logout" icon={<MdOutlineLogout />} dropDownIsActive={false}/>
                </div>
            </div>
        </div>
    )
}
export default SideBar
