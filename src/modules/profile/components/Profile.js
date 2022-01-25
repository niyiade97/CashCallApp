import React from 'react'
import noImage from "../../../Assets/images/profileImage.png";
import { MdKeyboardArrowRight } from 'react-icons/md';
import ProfileInput from './ProfileInput';
import "../style/Profile.css";

function Profile(props) {
    console.log(props.profile);
    const handleOnChange = (name, value) =>{
        props.handleChange(name, value);
    }
    return (
        <div className="profile-container w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
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
                            <img src={noImage} alt="profileImage" className="w-20 h-20 rounded-full m-auto object-cover"  /> 
                        </div>
                    </div>
                    <div className="flex items-center">
                       <div className="w-1/4">
                           <p className="text-black font-normal text-xl">Full Name</p>
                       </div>
                       <div className="w-45 flex flex-wrap">
                            <div className="w-2/4 p-4">
                                <ProfileInput name="firstname" type="text" value={props.profile.firstname}  handleOnChange={handleOnChange} placeholder="First Name" disabled={props.inputIsDisabled}/>
                            </div>
                            <div className="w-2/4 p-4">
                                <ProfileInput name="lastname" type="text" value={props.profile.lastname} handleOnChange={handleOnChange} placeholder="LastName" disabled={props.inputIsDisabled}/>
                            </div>
                       </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/4">
                            <p className="text-black font-normal text-xl">Email</p>
                        </div>
                        <div className="w-45 p-4">
                            <ProfileInput name="email" type="email" value={props.profile.email} handleOnChange={handleOnChange} disabled={props.inputIsDisabled} placeholder="Email"/>
                        </div>
                    </div>
                </div>
                <div className="pl-4 text-color23">
                    <div className='flex justify-between items-center py-3'>
                        <p className="py-3">Security</p>
                        {
                            props.inputIsDisabled ?
                            <button onClick={props.handleEditProfile} className="bg-blue-900 text-green-50 border-2 border-blue-900 rounded-3xl py-2 w-32 hover:bg-white hover:text-blue-900">Edit Profile</button>:
                            <div >
                                <button onClick={props.handleEditProfile} className="bg-blue-900 text-green-50 border-2 border-blue-900 rounded-3xl py-2 hove w-32 hover:bg-white hover:text-blue-900">Cancel</button>
                                <button onClick={props.editProfile} className="bg-blue-900 text-green-50 border-2 border-blue-900 rounded-3xl py-2 ml-4 w-32 hover:bg-white hover:text-blue-900">Done</button>
                            </div>
                        }
                    </div>
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
