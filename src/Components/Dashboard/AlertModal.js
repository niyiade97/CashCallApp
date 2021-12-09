import React from 'react'
import { useNavigate } from "react-router-dom"

function AlertModal({ icon, btnText, btnText2, btnActive, messageText1, messageText2, messageHeader, handleClick }) {
    const navigate = useNavigate();
    const handleOnClick = () =>{
        navigate(-1);
     }

     const btnClick = () =>{
         if(btnText === "DashBoard"){
            handleClick(false, true);
         }
         else{
            handleClick(true, false);
         }
     }
    
    return (
        <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-480 h-330 rounded-xl bg-white z-20 text-color26">
            <div className="w-36 h-36 bg-color24 rounded-full mx-auto mt-72">
                {icon}
            </div>
            <div className="text-center w-50 font-bold m-auto">
                <p className="text-2xl py-6">{messageHeader}</p>
                <p className="text-sm">{messageText1}</p>
                <p className="text-xs">{messageText2}</p>
            </div>
            <div className="flex absolute justify-center items-center bottom-0 w-full bg-color27 py-2 rounded-b-xl">
                <div className="w-2/4 py-4 pl-4 pr-2">
                    <button className="bg-color28 text-color26 w-full py-3 rounded-md" onClick={handleOnClick}>{btnText2}</button>
                </div>
                {
                    btnActive &&
                    <div className="w-2/4 py-4 pl-2 pr-4">
                        <button className="bg-color24 text-white w-full py-3 rounded-md" onClick={btnClick}>{btnText}</button>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default AlertModal
