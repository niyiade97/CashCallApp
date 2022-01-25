import React,{useState} from 'react'
import logo from "../../../Assets/images/cashCallLogo.png";
import Nav from "./Nav";
import { BiDollarCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg"
import { MdOutlineLogout } from 'react-icons/md';
import "../style/SideBar.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { IoMdArrowDropdown } from 'react-icons/io';

function SuperNav() {
    const navigate = useNavigate();
    const [ dropDownStatus, setDropDownStatus ] = useState(false);
    const handleDropDown = () =>{
        setDropDownStatus(!dropDownStatus);
    }

    const handleLogout = () =>{
        localStorage.removeItem("superRole");
        localStorage.removeItem("superToken");
        localStorage.removeItem("superId");
        localStorage.removeItem("superEmail");
        navigate("/login");
    }
    return (
        <div className="side-bar-container w-1/5 h-screen sticky top-0 bg-white shadow-sideNavShadow">
            <div className="ml-20">
                <div className="pt-2">
                    <img src={logo} alt="logo" className="w-36 h-16 object-cover" />
                </div>
                <div className="side-bar-nav-container pt-20">
                    <p className="nav-container flex justify-start items-center text-color5 my-8 hover:text-color2 group focus:text-color2 cursor-pointer" onClick={handleDropDown}>
                        <i className="text-2xl group-focus:text-color2">{<BiDollarCircle />}</i>
                        <p className="font-bold text-sm pl-5">Fund Requests</p>
                            <i className="pl-3"><IoMdArrowDropdown /></i>
                    </p>
                    <ul className={`${dropDownStatus ? "block" : "hidden" } font-bold text-sm pl-10 duration-1000 transition-all ease-in-out`}>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/supervisor-requests">All requests</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/supervisor-approved-requests">Approved Request</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/supervisor-disbursed-requests">Approved and Disbursed</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/supervisor-pending-requests">Pending Request</Link>
                        </li>
                        <li className="relative py-2 hover:text-color24">
                            <Link to="/supervisor-rejected-requests">Rejected Request</Link>
                        </li>
                    </ul>
                    <Nav path="/supervisor-profile" text="Profile" icon={<CgProfile />} dropDownIsActive={false}/>
                    <p className="nav-container flex justify-start items-center text-color5 my-8 hover:text-color2 group focus:text-color2 cursor-pointer" onClick={handleLogout}>
                        <i className="text-2xl group-focus:text-color2"><MdOutlineLogout /></i>
                        <p className="font-bold text-sm pl-5">Logout</p>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SuperNav;
