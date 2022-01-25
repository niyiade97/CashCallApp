import React from 'react'
import image from "../../../Assets/images/profileImage.png"
import "../style/Header.css";
function Header({firstName, lastName}) {
    return (
        <div className="header-container border-b-2 border-color6 w-full bg-white h-20 flex items-center">
            <div className="header-inner-container">
                <div className="flex items-center">
                    <img src={image} alt="img" className="rounded-full w-8 h-8 object-cover" />
                    <p className="text-xs pl-2">{firstName + " " + lastName}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
