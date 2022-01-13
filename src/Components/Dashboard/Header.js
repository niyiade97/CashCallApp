import React from 'react'
import pics from "../../Assets/images/adepics.jpeg";
import "./Header.css";
function Header(props) {
    return (
        <div className="header-container border-b-2 border-color6 w-full bg-white h-20 flex items-center">
            <div className="header-inner-container">
                <h1 className="text-2xl">{props.headerText}</h1> 
                <div className="flex items-center">
                    <img src={pics} alt="img" className="rounded-full w-8 h-8 object-cover" />
                    <p className="text-xs pl-2">Obisesan Dolapo</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
