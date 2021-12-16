import React, { useState } from 'react'
import BackButton from './BackButton'
import axios from 'axios';
import {Link} from "react-router-dom";

function PasswordReset(props) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const passwordResetAPI = process.env.REACT_APP_PASSWORD_RESET_API;
    const [ passwordResetDetails, setPasswordResetDetails ] = useState({
        newPassword:"",
        confirmPassword:"",
        emailAddress:""
    });
    const [ message, setMessage ] = useState({
        status:0,
        text:""
    });
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
            errors.newPassword = "Password is required";
            errors.status = true;
        }
        else if(data.newPassword.length <= 8){
            errors.newPassword = "Password must be greater than 8";
            errors.status = true;
        }
        if(!data.confirmPassword){
            errors.confirmPassword = "Comfirm Password is required";
            errors.status = true;
        }
        else if(data.newPassword !== data.confirmPassword){
            errors.confirmPassword = "Password mismatch";
            errors.status = true;
        }
        return errors;
    }

    const ClearInput = () =>{
        setPasswordResetDetails({
            newPassword:"",
            confirmPassword:"",
            emailAddress:""
        })
        setTimeout(() => {
            setMessage({
                status:0,
                text:""
            });
        }, 4000);
    }
    const ResetPassword = (payload) =>{
        var data = {
            emailAddress: payload.emailAddress,
            newPassword: payload.newPassword
        }
        props.onLoad(true);
        axios.post(baseURL + passwordResetAPI, data)
        .then((res)=>{
            props.onLoad(false);
            console.log(res)
            if(res.data.isSuccess){
                // loading(true,false);
                ClearInput();
                setMessage({
                    status:1,
                    text:"Reset Successfull!!! please login"
                });
            }
            else{
                setMessage({
                    status:2,
                    text:"Email does not exist !!!"
                });
                ClearInput();
            }
           
            console.log(res);
        })
        .catch(err =>{
            props.onLoad(false);
            setMessage({
                status:2,
                text:"Error has occured"
            });
            ClearInput();
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
        <div className="w-45 h-full relative">
            <BackButton bgColor="white" color="black"/>
            {props.children}
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-2/4">
                    <h1 className="font-bold text-2xl text-center">Reset Password</h1> 
                    <div className="text-center">
                    <form onSubmit={handleOnSubmit}>   
                    {
                        message.text &&
                        <p className={`${message.status === 2 && "text-red-500 bg-red-300"} ${message.status === 1 &&  "text-green-600 bg-green-100"} p-4 text-left my-3`}>{message.text}</p>
                    }
                        <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="text" name="emailAddress" placeholder="Email" onChange={handleOnChange} value={passwordResetDetails.emailAddress}/>
                        {
                            formErrors.email &&
                            <p className="text-left text-red-500 pt-3 pl-3">{formErrors.email}</p>
                        }
                        <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="password" name="newPassword" placeholder="New Password" onChange={handleOnChange} value={passwordResetDetails.newPassword}/>
                        {
                            formErrors.newPassword &&
                            <p className="text-left text-red-500 pt-3 pl-3">{formErrors.newPassword}</p>
                        }
                        <input className="border-2 rounded-full border-color3 text-color4 w-full mt-6 h-14 px-4" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleOnChange} value={passwordResetDetails.confirmPassword}/>
                        {
                            formErrors.confirmPassword &&
                            <p className="text-left text-red-500 pt-3 pl-3">{formErrors.confirmPassword}</p>
                        }
                        <button type="submit" className="bg-color2 text-white rounded-full w-full mt-6 h-14 mb-6 border border-color2 hover:border-2 hover:border-color2 hover:text-color2 hover:bg-white">Reset</button>
                        <Link className="" to="/login">Login</Link>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
