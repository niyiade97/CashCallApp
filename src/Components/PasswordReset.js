import React from 'react'
import BackButton from './BackButton'

function PasswordReset() {
    return (
        <div className="w-45 h-full flex justify-center items-center relative">
            <BackButton bgColor="white" color="black"/>
            <div className="w-2/4">
                <h1 className="font-bold text-2xl text-center">Reset Password</h1> 
                <div className="text-center">
                <form>
                    <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="text" name="newPassword" placeholder="New Password" />
                    <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="text" name="confirmPassword" placeholder="Confirm Password" />
                    <button type="submit" className="bg-color2 text-white rounded-full w-full mt-6 h-14 mb-6 hover:border-2 hover:border-color2 hover:text-color2 hover:bg-white">Login</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
