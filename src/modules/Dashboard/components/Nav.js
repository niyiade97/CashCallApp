import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io';
import "../style/Nav.css";
function Nav({path, text, icon, dropDownIsActive, handleClick}) {

    const handleOnClick = () =>{
        handleClick();
    }
    return (
        path !== "" ?
        <Link to={path} className="nav-container flex justify-start items-center text-color5 my-8 hover:text-color2 group focus:text-color2 cursor-pointer" onClick={dropDownIsActive ? handleOnClick : ""}>
            <i className="text-2xl group-focus:text-color2">{icon}</i>
            <p className="font-bold text-sm pl-5">{text}</p>
            {
                dropDownIsActive &&
                <i className="pl-3"><IoMdArrowDropdown /></i>
            }
            
        </Link>:
        <p className="nav-container flex justify-start items-center text-color5 my-8 hover:text-color2 group focus:text-color2 cursor-pointer" onClick={dropDownIsActive ? handleOnClick : ""}>
            <i className="text-2xl group-focus:text-color2">{icon}</i>
            <p className="font-bold text-sm pl-5">{text}</p>
            {
                dropDownIsActive &&
                <i className="pl-3"><IoMdArrowDropdown /></i>
            }
        
        </p>
    )
}

export default Nav
