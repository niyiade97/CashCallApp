import React, {useContext, useState } from 'react'
import Select from '../Select';
import UploadButton from '../UploadButton';
import TextField from '../TextField';
import {Link} from "react-router-dom"
import { DataContext } from "../../Utils/DataContext";
import axios from 'axios';

function CashRequest({ onLoad }) {
    const { supervisors,departments } = useContext(DataContext);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const [ loading, setLoading ] = useState(false);
    const Services = ["Web Development", "IT", "Boat Cruise"]
    const [ formErrors, setFormErrors ] = useState({
        
    })
    const [ cashRequest, setCashRequest ] = useState({
        userID: userId,
        departmentID: null,
        supervisorID: null,
        amount: null,
        purpose: "",
        name:"",
        ImageFile:""
    })
    
    const handleOnChange = (name, value) =>{
        setCashRequest((prevState) =>{
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
        if(!data.name){
            errors.name = "Name is required";
            errors.status = true;
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
        if(!data.ImageFile){
            errors.imageFile = "Select a file";
            errors.status = true;
        }
        if(!data.purpose){
            errors.purpose = "Request purpose is required";
            errors.status = true;
        }
       
        return errors;
    }
    const submitCashRequest = (payload) =>{
        onLoad(true);
        axios.post("https://uat.bts.com.ng/cashcallapi/api/cash/cashrequest", payload,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        })
        .then((res) =>{
            onLoad(false);
            console.log(res);
        })
        .catch((err) =>{
            onLoad(false);
            console.log(err);
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        
        setFormErrors(validate(cashRequest));
        const formState = validate(cashRequest).status;
        console.log(formState);
        if(!formState){
            const formData = new FormData();
            formData.append("userID", cashRequest.userID);
            formData.append("departmentID", cashRequest.departmentID);
            formData.append("supervisorID", cashRequest.supervisorID);
            formData.append("amount", cashRequest.amount);
            formData.append("purpose", cashRequest.purpose);
            formData.append("ImageFile", cashRequest.ImageFile);

            submitCashRequest(formData);
        }
    }

    return (
        <>
       
        <div className="w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color13 font-bold text-2xl">Submit Cash Request</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap">
                        <TextField type="text" name="name" placeholder="Dolapo Obisesan" label="Name" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={cashRequest.name}/>
                        <Select name="departmentID" label="Department" onChange={handleOnChange} disabled={false} options={departments} width="2/4" formError={formErrors.department} value={cashRequest.departmentID} valueKey="department" />
                        <TextField type="number" name="amount" placeholder="#300,000" label="Amount" onChange={handleOnChange} disabled={false} width="2/4"  formError={formErrors.amount} value={cashRequest.amount} />
                        <Select name="supervisorID" placeholder="Adebayo Salami" label="Supervisor" onChange={handleOnChange} disabled={false} options={supervisors} width="2/4" formError={formErrors.supervisor} value={cashRequest.supervisorID} valueKey="fullName"/>
                        <UploadButton label="Upload" onChange={handleOnChange} name="ImageFile"  formError={formErrors.imageFile} value={cashRequest.ImageFile}/>
                        <TextField type="text" name="purpose" placeholder="Vehicle Repair" label="Purpose" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.purpose} value={cashRequest.purpose} />
                        <div className="w-45 m-auto py-3">
                            <button type="submit" className=" border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Submit</button>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    </>
    )
}

export default CashRequest;
