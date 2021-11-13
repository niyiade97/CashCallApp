import React from 'react'
import logo from "../Assets/images/cashCallLogo.png";
function SidePage() {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-color1 to-color2 relative">
            <div className="h-full relative">
                <img src={logo} className="absolute top-2/4 left-2/4 -ml-44 -mt-48" alt="logo"/>
            </div>
            <div className="h-45 w-1/3 border-t border-r border-white rounded-tr-full absolute left-0 bottom-0"></div>
            <div className="h-2/5 w-2/5 border-t border-r border-white rounded-tr-full absolute left-0 bottom-0"></div>
        </div>
    )
}

export default SidePage
