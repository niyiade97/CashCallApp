import React, { useState } from 'react'
import BackButton from './BackButton'
import axios from 'axios';

function PasswordReset({loading}) {
    const [ passwordResetDetails, setPasswordResetDetails ] = useState({
        newPassword:"",
        emailAddress:""
    });
    const [ message, setMessage ] = useState("");
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })

    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setPasswordResetDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    const validate = (data) =>{
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const errors ={
            status: false
        }
        if(!data.emailAddress){
            errors.email = "Email is required";
            errors.status = true;
        }
        else if(emailRegex.test(data.emailAddress) === false){
            errors.email = "Email is not valid";
            errors.status = true;
        }
        
        if(!data.newPassword){
            errors.password = "Password is required";
            errors.status = true;
        }
        else if(data.newPassword.length <= 8){
            errors.password = "Password must be greater than 8";
            errors.status = true;
        }
        return errors;
    }
    const ClearInput = () =>{
        setPasswordResetDetails({
            newPassword:"",
            emailAddress:""
        })
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }
    const ResetPassword = (payload) =>{
        // loading(null,true);
        axios.post("https://uat.bts.com.ng/cashcallapi/api/users/resetpassword",payload)
        .then((res)=>{
            console.log(res)
            if(res.data.isSuccess){
                // loading(true,false);
                ClearInput();
               
            }
            else{
                // loading(false,false);
                ClearInput();
                setMessage(res.data.message);
            }
           
            console.log(res);
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(passwordResetDetails))
        if(!validate(passwordResetDetails).status){
            ResetPassword(passwordResetDetails);
        }

    }
    return (
        <div className="w-45 h-full flex justify-center items-center relative">
            <BackButton bgColor="white" color="black"/>
            <div className="w-2/4">
                <h1 className="font-bold text-2xl text-center">Reset Password</h1> 
                <div className="text-center">
                <form onSubmit={handleOnSubmit}>
                    <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="text" name="emailAddress" placeholder="Email" onChange={handleOnChange}/>
                    <p className="text-left text-red-500 pt-3 pl-3">{formErrors.email}</p>
                    <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="text" name="newPassword" placeholder="New Password" onChange={handleOnChange}/>
                    <p className="text-left text-red-500 pt-3 pl-3">{formErrors.password}</p>
                    <button type="submit" className="bg-color2 text-white rounded-full w-full mt-6 h-14 mb-6 border border-color2 hover:border-2 hover:border-color2 hover:text-color2 hover:bg-white">Login</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
