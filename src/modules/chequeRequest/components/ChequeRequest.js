import React,{useState} from 'react'
import UploadButton from '../../customElement/component/UploadButton';
import TextField from "../../customElement/component/TextField";
import "../style/ChequeRequest.css";
import TextArea from '../../customElement/component/TextArea';
import axios from 'axios';

function ChequeRequest({ handleLoader, handleAlertModal }) {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const baseURL = process.env.REACT_APP_BASE_URL;
    const createChequeRequestAPI = process.env.REACT_APP_CREATE_CHEQUE_REQUEST_API;
    const departmentID = localStorage.getItem("departmentID");
    const departmentName = localStorage.getItem("departmentName");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    
    const [ formErrors, setFormErrors ] = useState({});
    const [ chequeRequest, setChequeRequest ] = useState({
        userID: parseInt(userId),
        departmentID: parseInt(departmentID),
        purpose: "",
        reason: "",
        beneficiaryName: "",
        beneficiaryBank: "",
        amount: null,
        base64File:""
    })

    // const handleOnSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(cashRequest)
    //     setFormErrors(validate(cashRequest));
    //     const formState = validate(cashRequest).status;
    //     if(!formState){
    //         const formData = new FormData();
    //         formData.append("userID", cashRequest.userID);
    //         formData.append("departmentID", cashRequest.departmentID);
    //         formData.append("supervisorID", cashRequest.supervisorID);
    //         formData.append("amount", cashRequest.amount);
    //         formData.append("reason", cashRequest.reason);
    //         formData.append("base64File", cashRequest.base64File);
    //         submitCashRequest(formData);
    //     }
    // }
    const handleOnChange = (name, value) =>{
        setChequeRequest((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const validate = (data) =>{
        const errors ={
         status: false
        }
         if(!data.departmentID){
             errors.departmentID = "Department is required";
             errors.status = true;
         }
         if(!data.amount){
             errors.amount = "Amount is required";
             errors.status = true;
         }
         else if(data.amount > 20000){
             errors.amount = "Amount can't be greater than #20,000";
             errors.status = true;
         }
         if(!data.purpose){
             errors.purpose = "Purpose is required";
             errors.status = true;
         }
         if(!data.reason){
             errors.reason = "Reason is required";
             errors.status = true;
         }
         if(!data.beneficiaryName){
             errors.beneficiaryName = "Beneficiary Name is required";
             errors.status = true;
         }
         if(!data.beneficiaryBank){
            errors.beneficiaryBank = "Beneficiary Bank is required";
            errors.status = true;
        }
        if(!data.base64File){
            errors.base64File = "Image upload is required";
            errors.status = true;
        }
         return errors;
     }


    
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log(chequeRequest)
        setFormErrors(validate(chequeRequest));
        const formState = validate(chequeRequest).status;
        if(!formState){
            const formData = new FormData();
            formData.append("userID", chequeRequest.userID);
            formData.append("departmentID", chequeRequest.departmentID);
            formData.append("purpose", chequeRequest.purpose);
            formData.append("amount", chequeRequest.amount);
            formData.append("reason", chequeRequest.reason);
            formData.append("beneficiaryName", chequeRequest.beneficiaryName);
            formData.append("beneficiaryBank", chequeRequest.beneficiaryBank);
            formData.append("base64File", chequeRequest.base64File);
            // formData.append("voucherNo", "");
            // formData.append("pictureRefs", "");
            submitChequeRequest(formData);
        }
    }

    const submitChequeRequest = (payload) =>{
        handleLoader(true);
        axios.post(baseURL + createChequeRequestAPI, payload,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        })
        .then((res) =>{
            handleLoader(false);
            console.log(res);
            if(res.data.isSuccess === true){
                handleAlertModal(res.data.data, true);
                setChequeRequest({
                    userID: parseInt(userId),
                    departmentID: parseInt(departmentID),
                    purpose: "",
                    reason: "",
                    beneficiaryName: "",
                    beneficiaryBank: "",
                    amount: null,
                    base64File:""
                })
            }
            else{
                handleAlertModal(res.data.message, true);
                setChequeRequest({
                    userID: parseInt(userId),
                    departmentID: parseInt(departmentID),
                    purpose: "",
                    reason: "",
                    beneficiaryName: "",
                    beneficiaryBank: "",
                    amount: null,
                    base64File:""
                })
            }
        })
        .catch((err) =>{
            handleLoader(false);
            handleAlertModal("Error has occured", false);
            setChequeRequest({
                userID: parseInt(userId),
                departmentID: parseInt(departmentID),
                purpose: "",
                reason: "",
                beneficiaryName: "",
                beneficiaryBank: "",
                amount: null,
                base64File:""
            })
        })
    }
    // const TextArea = ({ width, formError, label, type, name, value, onChange, placeholder, row  }) =>{

    //     const handleChange = (e) =>{
    //         const {name, value} = e.target;
    //         onChange(name, value);
    //     }
    //     return( 
    //     <div className={`w-${width} px-4 py-3`}>
    //         <div style={{color:"#8E8EA1"}} className="w-full">
    //             <label className="font-normal text-lg">{label}</label> 
    //             <textarea className={`w-full mt-4 p-4 font-semibold rounded-3xl ${formError ? " border border-red-400" :"bg-white border-2 border-color5 text-color13 placeholder-color4" }`} type={type} name={name} value={value} rows={row} placeholder={placeholder} onChange={handleChange} />
    //             {
    //                 formError &&
    //                 <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
    //             }
    //         </div>
    //     </div>
    //         )
    //     }

    return (
        <div className="w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color13 font-bold text-2xl">Submit Cheque Request</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                <div className="flex flex-wrap">
                    <TextField type="text" name="department" placeholder="" label="Department" onChange={handleOnChange} disabled={true} width="2/4" formError={""} value={departmentName}/>
                    <TextField type="text" name="to" placeholder="" label="To" onChange={handleOnChange} disabled={true} width="2/4" formError={""} value={"Finance"}/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2' />
                    </div>
                    <TextArea width="full" name="reason" label="Purpose" row="2" value={chequeRequest.reason} formError={formErrors.reason} onChange={handleOnChange}/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2'/>
                    </div>
                    <TextArea width="full" name="purpose" label="Sir / Madam," row="5" value={chequeRequest.purpose} formError={formErrors.purpose} onChange={handleOnChange}/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2'/>
                    </div>
                    <div className='w-full font-normal text-lg pl-4'>
                        <p style={{color:"#8E8EA1"}} className='underline '>Payment Details:</p>
                    </div>
                    <TextField type="text" name="beneficiaryName" placeholder="" label="Beneficiary's Name" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.beneficiaryName} value={chequeRequest.beneficiaryName}/>
                    <TextField type="text" name="beneficiaryBank" placeholder="" label="Beneficiary's Bank" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.beneficiaryBank} value={chequeRequest.beneficiaryBank}/>
                    <TextField type="number" name="amount" placeholder="#3000" label="Amount in Figure" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.amount} value={chequeRequest.amount}/>
                    <UploadButton label="Upload" onChange={handleOnChange} name="base64File"  formError={formErrors.base64File} value={chequeRequest.base64File}/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2'/>
                    </div>
                    <TextField type="text" name="preparedBy" placeholder="" label="Prepared by:" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={firstName + " " + lastName}/>
                    <TextField type="text" name="approvedBy" placeholder="" label="Approved by:" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={""}/>
                    <div className="m-auto py-3 w-3/12">
                    <button type="submit" className="cheque-request-btn border w-full text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Download</button>
               
                    </div> 
                </div>
                </form>
                
            </div>
        </div>
    )
}

export default ChequeRequest;
