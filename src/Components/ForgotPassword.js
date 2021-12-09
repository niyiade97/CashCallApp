import React from 'react'
import { useNavigate } from "react-router-dom";
import BackButton from './BackButton';

function ForgotPassword() {
    const navigate = useNavigate();
    const handleOnSubmit = (e) =>{
        navigate("/reset-password");
        e.preventDefault();
    }

    return (
        <div className="w-45 h-full flex justify-center items-center relative">
            <BackButton bgColor="white" color="black"/>
            <div className="w-2/4 text-center">
               <p className="font-bold text-2xl">Forgot Password?</p>
               <p className="font-light text-lg">Enter your email address below to receive an e-mail with your password reset instruction</p>
               <div className="text-center">
               <form onSubmit={handleOnSubmit}>
                    <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="email" name="email" placeholder="Email" />
                    <button type="submit" className="bg-color2 text-white rounded-full w-full mt-6 h-14 mb-6 border border-color2 hover:border-2 hover:text-color2 hover:bg-white">Continue</button>
               </form>
               </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
