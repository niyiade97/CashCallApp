import React,{useState} from 'react'
import logo from "../../../Assets/images/cashCallLogo.png";
import Nav from './Nav';
import { BiHomeAlt,BiDollarCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg"
import { RiOrganizationChart } from "react-icons/ri";
import { MdOutlineLogout } from 'react-icons/md';
import {Link} from "react-router-dom"
import "../style/Nav.css"
import "../style/SideBar.css"
import { useNavigate } from "react-router-dom";

function SideNav() {
    const navigate = useNavigate();
    const [ dropDownStatus, setDropDownStatus ] = useState(false);
    const handleDropDown = () =>{
        setDropDownStatus(!dropDownStatus);
    }
    const handleLogout = () =>{
        localStorage.removeItem("adminRole");
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminEmail");
        localStorage.removeItem("adminId");
        navigate("/login");
    }
    return (
        <div className="side-bar-container w-1/5 h-screen sticky top-0 bg-white shadow-sideNavShadow">
            <div className="ml-20">
                <div className="pt-2">
                    <img src={logo} alt="logo" className="w-36 h-16" />
                </div>
                <div className="side-bar-nav-container pt-20"> 
                    <Nav path="/dashboard" text="Dashboard" icon={<BiHomeAlt />} dropDownIsActive={false}/>
                    <Nav path="/admin-fund-request" text="Fund Requests" icon={<BiDollarCircle />} dropDownIsActive={true} handleClick={handleDropDown}/>
                    <ul className={`${dropDownStatus ? "block" : "hidden" } font-bold text-sm pl-10 text-color5 duration-1000 transition-all ease-in-out`}>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-requests">All requests</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-approved-requests">Approved Request</Link>
                        </li>
                        {/* <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-disbursed-requests">Approved and Disbursed</Link>
                        </li> */}
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-pending-requests">Pending Request</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-rejected-requests">Rejected Request</Link>
                        </li>
                    </ul>
                    <Nav path="/admin-profile" text="Profile" icon={<CgProfile />} dropDownIsActive={false}/>
                    <Nav path="/users" text="User Management" icon={<RiOrganizationChart />} dropDownIsActive={false}/>
                    <Nav path="/departments" text="Department " icon={<RiOrganizationChart />} dropDownIsActive={false}/>
                    <p className="nav-container flex justify-start items-center text-color5 my-8 hover:text-color2 group focus:text-color2 cursor-pointer" onClick={handleLogout}>
                        <i className="text-2xl group-focus:text-color2"><MdOutlineLogout /></i>
                        <p className="font-bold text-sm pl-5">Logout</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SideNav
