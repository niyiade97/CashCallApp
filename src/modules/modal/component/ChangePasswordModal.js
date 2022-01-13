import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import ProfileInput from '../../profile/components/ProfileInput';
import "../User/ChequeRequest/ChequeRequest.css";

function ChangePasswordModal({handleClick}) {
    const handleOnChange = (value) =>{
        console.log(value);
    }
    const handleOnSubmit = () =>{
        handleClick();
    }

    return (
        <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/5 h-4/5 rounded-xl bg-white z-20">
            <div className="text-color24 pt-7 pr-8 flex justify-end">
                <FaWindowClose />
            </div>
            <div className="m-auto w-2/4 text-center">
            <form onSubmit={handleOnSubmit}>
                <div className="pt-10 pb-7">
                    <h1 className="font-bold text-2xl text-black">Change Password</h1>
                </div>
                <div className="py-3">
                    <ProfileInput name="oldPassword" type="text"  handleChange={handleOnChange} placeholder="Old Password"/>
                </div>
                <div className="py-3">
                    <ProfileInput name="confirmPassword" type="text"  handleChange={handleOnChange} placeholder="Confirm Password"/>
                </div>
                <div className="py-10">
                    <div className="w-full">
                        <button type="submit" className="text-white bg-color24 w-full h-12 rounded-xl">Submit</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default ChangePasswordModal
