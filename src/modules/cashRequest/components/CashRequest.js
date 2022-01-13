import React, {useEffect, useState } from 'react'
import Select from "../../customElement/component/Select";
import UploadButton from "../../customElement/component/UploadButton";
import TextField from "../../customElement/component/TextField";
import axios from 'axios';
import "../style/CashRequest.css";

function CashRequest({ handleLoader, handleAlertModal }) {
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const supervisorAPI = process.env.REACT_APP_GET_SUPERVISOR_API;
    const cashRequestAPI = process.env.REACT_APP_CASH_REQUEST_API;
    const [ departments, setDepartments ] = useState([]);
    const [ supervisors, setSupervisors ] = useState([]);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const [ formErrors, setFormErrors ] = useState({
    })
    const [ cashRequest, setCashRequest ] = useState({
        userID: parseInt(userId),
        departmentID: null,
        supervisorID: null,
        amount: null,
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
            setDepartments(res.data.data.map((data) =>{
                return{
                    departmentID: data.departmentID,
                    department: data.department
                }
            }))
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
        else if(data.amount > 20000){
            errors.amount = "Amount can't be greater than #20,000";
            errors.status = true;
        }
        if(!data.supervisorID){
            errors.supervisor = "Supervisor is required";
            errors.status = true;
        }
        if(!data.base64File){
            errors.imageFile = "Select a file";
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
        axios.post(baseURL + cashRequestAPI, payload,
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
                    departmentID: null,
                    supervisorID: null,
                    amount: null,
                    purpose: "",
                    base64File: ""
                })
            }
            else{
                handleAlertModal(res.data.message, true);
                setCashRequest({
                    userID: parseInt(userId),
                    departmentID: null,
                    supervisorID: null,
                    amount: 0,
                    purpose: "",
                    base64File: ""
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
            formData.append("base64File", cashRequest.ImageFile);
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
                        <TextField type="text" name="name" placeholder="Dolapo Obisesan" label="Name" onChange={handleOnChange} disabled={true} width="2/4"  value={name}/>
                        <Select name="departmentID" label="Department" onChange={handleOnChange} disabled={false} options={departments} width="2/4" formError={formErrors.department} value={cashRequest.departmentID} valueKey="department" />
                        <TextField type="number" name="amount" placeholder="#300,000" label="Amount" onChange={handleOnChange} disabled={false} width="2/4"  formError={formErrors.amount} value={cashRequest.amount} />
                        <Select name="supervisorID" placeholder="Adebayo Salami" label="Supervisor" onChange={handleOnChange} disabled={false} options={supervisors} width="2/4" formError={formErrors.supervisor} value={cashRequest.supervisorID} valueKey="fullName"/>
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

export default CashRequest;
