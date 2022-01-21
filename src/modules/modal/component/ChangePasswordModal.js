import React,{useState} from 'react'
import { FaWindowClose } from 'react-icons/fa';
import ProfileInput from "../../profile/components/ProfileInput";
import "../style/ChangePasswordModal.css";

function ChangePasswordModal({handleCloseBackDrop, passwordOnChange, handleChangePassword, passwordDetails}) {
   
    const [ formErrors, setFormErrors ] = useState({
    })

    const validate = (data) =>{
        const errors ={
         status: false
        }
        if(!data.oldPassword){
             errors.oldPassword = "Old Password is required";
             errors.status = true;
        }
        if(!data.newPassword){
            errors.newPassword = "New Password is required";
            errors.status = true;
       }
        return errors;
     }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(passwordDetails));
        const formState = validate(passwordDetails).status;
        if(!formState){
            handleChangePassword();
        }
        
    }
    return (
        <>
             <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10`} onClick={handleCloseBackDrop}>
            </div>
            <div className="fixed transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-2/5 py-8 rounded-xl bg-white z-20">
            <div className="icon-wrapper pt-7 pr-8 flex justify-end">
                <i onClick={handleCloseBackDrop}>
                    <FaWindowClose />
                </i>
            </div>
            <div className="m-auto w-2/4 text-center">
                <form onSubmit={handleOnSubmit}>
                    <div className="pt-10 pb-7">
                        <h1 className="font-bold text-2xl text-black">Change Password</h1>
                    </div>
                    <div className="py-3">
                        <ProfileInput name="oldPassword" type="password" value={passwordDetails.oldPassword} formError={formErrors.oldPassword} handleOnChange={passwordOnChange} placeholder="Old Password"/>
                    </div>
                    <div className="py-3">
                        <ProfileInput name="newPassword" type="password" value={passwordDetails.newPassword} formError={formErrors.newPassword} handleOnChange={passwordOnChange} placeholder="New Password"/>
                    </div>
                    <div className="py-10">
                        <div className="w-full">
                            <button type="submit" className="submit-btn w-full h-12 rounded-xl">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </>
        
    )
}

export default ChangePasswordModal
