import React from 'react'
import pics from "../../Assets/images/adepics.jpeg";

function Header(props) {
    return (
        <div className="border-b-2 border-color6 w-full bg-white h-20 flex items-center">
            <div className="m-auto w-11/12 flex justify-between items-center text-color4 font-normal">
                <h1 className="text-2xl">{props.headerText}</h1> 
                <div className="flex items-center">
                    <img src={pics} alt="img" className="rounded-full w-8 h-8" />
                    <p className="text-xs pl-2">Obisesan Dolapo</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
