import React from 'react'
import profileImage from "../../Assets/images/adepics.jpeg";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-router-dom";
import ProfileInput from './ProfileInput';
import "./Profile.css";

function Profile(props) {
    const Services = ["Web Development", "IT", "Boat Cruise"]
    const handleOnChange = (value) =>{
        console.log(value);
    }
    
        

    return (
        <div className="profile-container w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow relative"> 
            {props.children}
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color21 font-normal text-base pb-4 pt-2">Personal Information</h1>
                    <hr className="" />
                </div>
                <div className="w-full pl-6">
                    <div className="flex items-center py-4">
                        <div className="w-1/4">
                            <p className="text-black font-normal text-xl">Profile picture</p>
                        </div>
                        <div className="profile-image-wrapper w-45 text-center">
                            <img src={profileImage} alt="profileImage" className="w-20 h-20 rounded-full m-auto object-cover"  /> 
                        </div>
                    </div>
                    <div className="flex items-center">
                       <div className="w-1/4">
                           <p className="text-black font-normal text-xl">Full Name</p>
                       </div>
                       <div className="w-45 flex flex-wrap">
                            <div className="w-2/4 p-4">
                                <ProfileInput name="firstName" type="text"  handleChange={handleOnChange} placeholder="First Name"/>
                            </div>
                            <div className="w-2/4 p-4">
                                <ProfileInput name="lastName" type="text"  handleChange={handleOnChange} placeholder="LastName"/>
                            </div>
                       </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/4">
                            <p className="text-black font-normal text-xl">Phone number</p>
                        </div>
                        <div className="w-45 p-4">
                            <ProfileInput name="phone" type="text"  handleChange={handleOnChange} placeholder="090123456788"/>
                        </div>
                    </div>
                    <div className="flex items-center">
                            <div className="w-1/4">
                                <p className="text-black font-normal text-xl">Date of birth</p>
                            </div>
                            <div className="w-45 p-4">
                                <ProfileInput name="dateOfBirth" type="date"  handleChange={handleOnChange} placeholder="10/8/1998"/>
                            </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/4">
                            <p className="text-black font-normal text-xl">Phone number</p>
                        </div>
                        <div className="w-45 p-4">
                            <ProfileInput name="address" type="text"  handleChange={handleOnChange} placeholder="8 Asiawu Adebola, Ajanakum Kwara state ..."/>
                        </div>
                    </div>
                   
                </div>
                <div className="pl-4 text-color23">
                    <p className="py-3">Security</p>
                    <hr />
                    <div className="pl-6 text-black font-normal text-xl flex items-center py-6">
                        <p className="hover:text-blue-900 w-1/4 cursor-pointer" onClick={props.handlePasswordModal}>Change Password</p>
                        <MdKeyboardArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
