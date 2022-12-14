import React, {useEffect, useState } from 'react'
import UploadButton from "../../customElement/component/UploadButton";
import TextField from "../../customElement/component/TextField";
import axios from 'axios';
import "../style/CashRequest.css";
import SupervisorSelect from '../../customElement/component/SupervisorSelect';

function SupervisorCashRequest({ handleLoader, handleAlertModal, userId, token, departmentID, fullName}) {
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const supervisorAPI = process.env.REACT_APP_GET_SUPERVISOR_API;
    const createCashRequestAPI = process.env.REACT_APP_CREATE_CASH_REQUEST_API;
    const [ department, setDepartment ] = useState("");
    const [ supervisors, setSupervisors ] = useState([]);
    const [ formErrors, setFormErrors ] = useState({
    })
    const [ cashRequest, setCashRequest ] = useState({
        userID: parseInt(userId),
        departmentID: parseInt(departmentID),
        supervisorID: parseInt(userId),
        amount: "",
        reason: "",
        base64File:""
    })
    
    const handleOnChange = (name, value) =>{
        setCashRequest((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
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
            }
            else{
                setDepartment("");
            }
            
        })
    }
    
    const getSuperVisor = () =>{
        axios.get(baseURL + supervisorAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setSupervisors(res.data.data.map((data) =>{
                return{
                    
                    supervisorID: data.id,
                    fullName: data.lastname + " " + data.firstname
                }
            }))
        })
    }
    const validate = (data) =>{
       const errors ={
        status: false
       }
        if(!data.departmentID){
            errors.department = "Department is required";
            errors.status = true;
        }
        if(!data.amount){
            errors.amount = "Amount is required";
            errors.status = true;
        }
        else{
            let tempValue = ""
            let tempAmount = data.amount.toString().split(",");
            if(tempAmount.length > 1){
                for(let i=0; i<tempAmount.length; i++){
                    tempValue += tempAmount[i];
                }
                if(parseInt(tempValue) > 20000){
                    errors.amount = "Amount can't be greater than #20,000";
                    errors.status = true;
                }
            }
        }
        if(!data.supervisorID){
            errors.supervisor = "Supervisor is required";
            errors.status = true;
        }
        if(!data.reason){
            errors.purpose = "Request purpose is required";
            errors.status = true;
        }
        return errors;
    }
    const submitCashRequest = (payload) =>{
        handleLoader(true);
        axios.post(baseURL + createCashRequestAPI, payload,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        })
        .then((res) =>{
            handleLoader(false);
            console.log(res);
            if(res.data.isSuccess === true){
                handleAlertModal(res.data.data, true);
                setCashRequest({
                    userID: parseInt(userId),
                    departmentID: parseInt(departmentID),
                    supervisorID: null,
                    amount: "",
                    base64File: "",
                    reason: "",
                })
            }
            else{
                handleAlertModal(res.data.message, true);
                setCashRequest({
                    userID: parseInt(userId),
                    departmentID: parseInt(departmentID),
                    supervisorID: null,
                    amount: "",
                    base64File: "",
                    reason: "",
                })
            }
            
            
        })
        .catch((err) =>{
            handleLoader(false);
            handleAlertModal("Error has occured", false);
            console.log(err.response.data);
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(cashRequest));
        const formState = validate(cashRequest).status;
        if(!formState){
            const formData = new FormData();
            formData.append("userID", cashRequest.userID);
            formData.append("departmentID", cashRequest.departmentID);
            formData.append("supervisorID", cashRequest.supervisorID);
            formData.append("amount", cashRequest.amount);
            formData.append("reason", cashRequest.reason);
            formData.append("base64File", cashRequest.base64File);
            submitCashRequest(formData);
        }
    }
    useEffect(() => {
        getDepartment();
        getSuperVisor();
        
    }, [])

    return (
        <>
        <div className="cash-request-container w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color13 font-bold text-2xl">Submit Cash Request</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap">
                        <TextField type="text" name="name" placeholder="Dolapo Obisesan" label="Name" onChange={handleOnChange} disabled={true} width="2/4"  value={fullName}/>
                        <TextField name="departmentID" label="Department" onChange={handleOnChange} disabled={true} width="2/4" formError={""} value={department} />
                        <TextField name="amount" type="text" placeholder="#300,000" label="Amount" onChange={handleOnChange} disabled={false} width="2/4"  formError={formErrors.amount} value={cashRequest.amount} />
                        <SupervisorSelect name="supervisorID" userID={userId} placeholder="Adebayo Salami" label="Supervisor" onChange={handleOnChange} disabled={true} options={supervisors} width="2/4" formError={formErrors.supervisor} value={cashRequest.supervisorID} valueKey="fullName"/>
                        <UploadButton label="Upload" onChange={handleOnChange} name="base64File"  formError={formErrors.imageFile} value={cashRequest.base64File}/>
                        <TextField type="text" name="reason" placeholder="Vehicle Repair" label="Purpose" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.purpose} value={cashRequest.reason} />
                        <div className="cash-request-btn-wrapper w-45 m-auto py-3">
                            <button type="submit" className=" border w-full h-14 rounded-full mx-2 text-lg font-semibold">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default SupervisorCashRequest;
