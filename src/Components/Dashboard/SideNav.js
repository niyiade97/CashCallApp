import React,{useState} from 'react'
import logo from "../../Assets/images/cashCallLogo.png";
import Nav from './Nav';
import { BiHomeAlt,BiDollarCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg"
import { RiOrganizationChart } from "react-icons/ri";
import { MdOutlineLogout } from 'react-icons/md';
import {Link} from "react-router-dom"

function SideNav() {
    const [ dropDownStatus, setDropDownStatus ] = useState(false);
    const handleDropDown = () =>{
        setDropDownStatus(!dropDownStatus);
    }
    return (
        <div className="w-1/5 h-screen sticky top-0 bg-white shadow-sideNavShadow">
            <div className="ml-20">
                <div className="pt-2">
                    <img src={logo} alt="logo" className="w-36 h-16" />
                </div>
                <div className="pt-20">
                    <Nav path="/dashboard" text="Dashboard" icon={<BiHomeAlt />} dropDownIsActive={false}/>
                    <Nav path="" text="Fund Fequests" icon={<BiDollarCircle />} dropDownIsActive={true} handleClick={handleDropDown}/>
                    <ul className={`${dropDownStatus ? "block" : "hidden" } font-bold text-sm pl-10 text-color5 duration-1000 transition-all ease-in-out`}>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-requests">All requests</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-approved-requests">Approved Request</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-disbursed-requests">Approved and Disbursed</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-pending-requests">Pending Request</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/admin-rejected-requests">Rejected Request</Link>
                        </li>
                    </ul>
                    {/* <div className=>
                        <Nav path="/requests" text="All requests" icon={""} dropDownIsActive={false}/>
                        <Nav path="/approved-requests" text="Approved Request" icon={""} dropDownIsActive={false}/>
                        <Nav path="/disbursed-requests" text="Approved and Disbursed" icon={""} dropDownIsActive={false}/>
                        <Nav path="/pending-requests" text="Pending Request" icon={""} dropDownIsActive={false}/>
                        <Nav path="/rejected-requests" text="Rejected Request" icon={""} dropDownIsActive={false}/>
                    </div> */}
                    <Nav path="/admin-profile" text="Profile" icon={<CgProfile />} dropDownIsActive={false}/>
                    <Nav path="/users" text="User Managament" icon={<RiOrganizationChart />} dropDownIsActive={false}/>
                    <Nav path="/settings" text="Settings" icon={<FiSettings />} dropDownIsActive={false}/>
                    <Nav path="/login" text="Logout" icon={<MdOutlineLogout />} dropDownIsActive={false}/>
                </div>
            </div>
        </div>
    )
}

export default SideNav
