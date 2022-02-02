import React,{useState, useEffect} from 'react'
import UploadButton from '../../customElement/component/UploadButton';
import TextField from "../../customElement/component/TextField";
import "../style/ChequeRequest.css";
import TextArea from '../../customElement/component/TextArea';
import axios from 'axios';

function ChequeRequest({ handleLoader, handleAlertModal,handlePreviewPage, userId, token, departmentID, fullName}) {
    
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const createChequeRequestAPI = process.env.REACT_APP_CREATE_CHEQUE_REQUEST_API;
   
    const [ department, setDepartment ] = useState("");
    const [ formErrors, setFormErrors ] = useState({});
    const [ chequeRequest, setChequeRequest ] = useState({
        userID: parseInt(userId),
        departmentID: parseInt(departmentID),
        purpose: "",
        reason: "",
        beneficiaryName: "",
        beneficiaryBank: "",
        amount: 0,
        base64File:"",
        acctNum : ""
    })

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
            errors.base64File = "Select a file";
            errors.status = true;
        }
        if(!data.acctNum){
            errors.base64File = "Account Number is required";
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
            if(res.data.isSuccess){
                handleAlertModal("Cheque Request is successful !!!", true);
                setChequeRequest({
                    userID: parseInt(userId),
                    departmentID: parseInt(departmentID),
                    purpose: "",
                    reason: "",
                    beneficiaryName: "",
                    beneficiaryBank: "",
                    amount: 0,
                    base64File:"",
                    acctNum: ""
                })
                handlePreviewPage(true, res.data.data);
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
                    amount: 0,
                    base64File:"",
                    acctNum: ""

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
                amount: 0,
                base64File:"",
                acctNum: ""

            })
        })
    }
    const getDepartment = () =>{
        axios.get(baseURL + departmentAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            const filteredDept = res.data.data.filter(data => data.departmentID === parseInt(departmentID))
            if(filteredDept.length !== 0){
                setDepartment(filteredDept[0].department);
                localStorage.setItem("departmentName",filteredDept[0].department )
            }
            else{
                setDepartment("");
            }
            
        })
    }

    useEffect(() =>{
        getDepartment();
    },[])

    return (
        <div className="w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color13 font-bold text-2xl">Submit Cheque Request</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                <div className="flex flex-wrap">
                    <TextField type="text" name="department" placeholder="" label="Department" onChange={handleOnChange} disabled={true} width="2/4" formError={""} value={department}/>
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
                    <TextField type="text" name="acctNum" placeholder="" label="Account Number" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.acctNum} value={chequeRequest.acctNum}/>
                    <TextField type="text" name="amount" placeholder="#3000" label="Amount in Figure" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.amount} value={chequeRequest.amount}/>
                    <UploadButton label="Upload" onChange={handleOnChange} formError={formErrors.base64File} name="base64File" value={chequeRequest.base64File}/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2'/>
                    </div>
                    <TextField type="text" name="preparedBy" placeholder="" label="Prepared by:" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={fullName}/>
                    <TextField type="text" name="approvedBy" placeholder="" label="Approved by:" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={""}/>
                    <div className="m-auto py-3 w-3/12">
                        <button type="submit" className="cheque-request-btn border w-full text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Submit</button>
                    </div> 
                </div>
                </form>
                
            </div>
        </div>
    )
}

export default ChequeRequest;
