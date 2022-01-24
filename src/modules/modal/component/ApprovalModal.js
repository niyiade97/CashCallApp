import React,{useEffect, useState} from 'react'
import axios from 'axios';
import "../style/ApprovalModal.css";

function ApprovalModal({ handleBackDropOnClick, handleOtpModal, data }) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const generateOtpAPI = process.env.REACT_APP_GET_OTP_API;
    const generateUserProfile = process.env.REACT_APP_GET_PROFILE_API;
    const token = localStorage.getItem("adminToken");
    const email = localStorage.getItem("adminEmail");

    const [ name, setName ] = useState("");
    
    const date = new Date(data.dateCreated).toUTCString().split(" ");
    const dateToUTC = `${date[0] } ${date[1]} ${date[2]} ${date[3]}`;
    
    const generateOtp = () =>{
        axios.get(baseURL + generateOtpAPI + email,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
           
        })
        .catch(err =>{
            console.log(err);
        })
    }
   
    const handleApproveRequest = (e) =>{
        e.preventDefault();
        generateOtp();
        handleOtpModal(true);
    }

    const getName = (id) => {
        axios.get(baseURL + generateUserProfile + id,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            if(res.data.isSuccess){
                setName(res.data.data.firstname + " " + res.data.data.lastname);
            }
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const handleRejectRequest = (e) =>{
        e.preventDefault();
        generateOtp();
        handleOtpModal(false);
    }
    useEffect(() =>{
        getName(data.userID)
    }, [])
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-${20}`} onClick={handleBackDropOnClick}>
            </div>
            <div className="fixed transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/5 py-10 rounded-xl bg-white z-30">
            <div className="w-full pl-8 pr-12">
                <div className="flex justify-between items-center pb-5">
                    <div className='flex items-center text-2xl font-bold'>
                        <p>Request type: </p>
                        <p className="ml-5">{data.type + " Request"}</p>
                    </div>
                    <div className="pr-20">
                        <p className="text-sm font-semibold">{dateToUTC}</p>
                        <p className='text-xs text-gray-400 font-normal'>{new Date(data.dateCreated).toLocaleTimeString()}</p>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='font-normal'>
                        <div className='flex justify-between items-center py-5 pr-20'>
                            <div className='flex items-center'>
                                <p className="text-2xl text-gray-600">Name: </p>
                                <p className="ml-5 text-3xl">{name}</p>
                            </div>
                            <img className="h-20 w-20 rounded-full object-cover" src={data.imageRef} alt="img" />
                        </div>
                        <div className='py-5'>
                            <div className='flex items-center'>
                                <p className="text-2xl text-gray-600">Amount: </p>
                                <p className="ml-5 text-3xl">{data.amount}</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className='flex items-center'>
                                <p className="text-2xl text-gray-600">Purpose: </p>
                                <p className="ml-5 text-3xl">{data.purpose}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end py-5">
                        <div className='w-2/4 flex'>
                            <div className="py-3 px-4 text-center w-full">
                                <button type="button" onClick={handleRejectRequest} className="add-user-btn border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                                    Decline
                                </button>
                            </div>
                            <div className="py-3 px-4 text-center w-full">
                                <button type="button" onClick={handleApproveRequest} className="add-user-btn border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                                    Approve
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
        
    )
}

export default ApprovalModal
