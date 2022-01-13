import React from 'react'
import logo from "../../../Assets/images/cashCallLogo.png";
import "./SidePage.css";
function SidePage() {
    return (
        <div className="side-page-container w-full h-screen bg-gradient-to-b from-color1 to-color2 relative">
            <div className="side-page-logo-wrapper">
                <img src={logo} className="side-page-logo absolute top-2/4 left-2/4 -ml-44 -mt-48" alt="logo"/>
            </div>
            <div className="side-page-line1 h-45 w-1/3 border-t border-r border-white rounded-tr-full absolute left-0 bottom-0"></div>
            <div className="side-page-line2 h-2/5 w-2/5 border-t border-r border-white rounded-tr-full absolute left-0 bottom-0"></div>
        </div>
    )
}

export default SidePage;
