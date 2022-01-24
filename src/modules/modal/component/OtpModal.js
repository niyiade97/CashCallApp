import React,{ useState } from 'react'
import TextField from '../../customElement/component/TextField';
import axios from 'axios';
import "../style/ApprovalModal.css";

function OtpModal({ handleCloseOtpModal, requestID, handleLoader, handleAlertModal, approvalStatus }) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const approveRequestAPI = process.env.REACT_APP_ADMIN_REQUEST_APPROVAL_API;
    const token = localStorage.getItem("adminToken");
    const userId = localStorage.getItem("adminId");
    const [ formErrors, setFormErrors ] = useState({
    })
    const [ requestDetails, setRequestDetails ] = useState({
        otp: "",
        isApproved: approvalStatus,
        userId: parseInt(userId),
        Id: parseInt(requestID)
    });
    
    const handleOnChange = (name, value) =>{
        setRequestDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    const approveRequest = (payload) =>{
        handleLoader(true);
        axios.post(baseURL + approveRequestAPI + requestDetails.otp, payload,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleLoader(false);
            if(res.data.isSuccess){
                handleAlertModal(res.data.data, true);
            }
            else{
                handleAlertModal(res.data.message, false);
            }
            
            
        })
        .catch(err =>{
            handleLoader(false);
            console.log(err);
            handleAlertModal("Error has occured", false);
        })
    }
    const validate = (data) =>{
        const errors ={
         status: false
        }
         if(!data.otp){
             errors.otp = "Otp is required";
             errors.status = true;
         }
         return errors;
     }
    
    const handleOnsubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(requestDetails));
        const formState = validate(requestDetails).status;
        if(!formState){
            const payload = {
                isApproved: requestDetails.isApproved,
                userId: requestDetails.userId,
                Id: requestDetails.Id
            }
            approveRequest(payload);
        }
    }
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-${20}`} onClick={handleCloseOtpModal}>
            </div>
            <div className="fixed transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-2/4 py-6 rounded-xl bg-white z-30">
            <div className="w-full px-8">
            <form onSubmit={handleOnsubmit}>
                <div className="pt-5 pb-7">
                    <h1 className="font-bold text-2xl text-black">OTP</h1>
                </div>
                <p className="text-green-700 bg-green-200 p-4 text-left my-3">Otp has been sent to your mail</p>
                <div className="py-3">
                    <TextField name="otp" type="text" label="Enter OTP" onChange={handleOnChange} formError={formErrors.otp} placeholder="OTP" width="2/4"/>
                </div>
                <div className='w-full justify-end flex'>
                    <div className='flex items-center w-2/4'>
                        <div className="py-3 text-center w-full px-4">
                            <button type="button" onClick={handleCloseOtpModal} className="add-user-btn border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                                Cancel
                            </button>
                        </div>
                        <div className=" py-3 text-center w-full px-4">
                            <button type="submit" className="add-user-btn border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>

               
            </div>
            </div>
        </>
        
    )
}

export default OtpModal;
