import React,{useEffect, useState} from 'react'
import TextField from '../../customElement/component/TextField';
import axios from 'axios';
// import "../style/AddUser.css";

function AddDepartment({ loading, handleBackDropOnClick, handleGetDepartment }) {
    const createDepartmentAPI = process.env.REACT_APP_CREATE_DEPARTMENT_API;
    const token = localStorage.getItem("adminToken");
     const baseURL = process.env.REACT_APP_BASE_URL;
    const [ message, setMessage ] = useState({
        msg: "",
        status:""
    });
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })
    const [ departmentDetails, setDepartmentDetails ] = useState({
        departmentName: "",
        lineManagerName:"",
        lineManagerEmail:""
    });
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(departmentDetails));
        if(!validate(departmentDetails).status){
            const payload = {
                departmentName: departmentDetails.departmentName
            }
            AddNewDepartment(payload);
        }
        // console.log(userDtails);
       
    }
    
    const handleOnChange = (name, value) =>{
        setDepartmentDetails((prevData) =>{
            return{
                ...prevData,
                [name]: value
            }
        })
    }
    const validate = (data) =>{
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const errors ={
            status: false
        }
        if(!data.lineManagerEmail){
            errors.lineManagerEmail = "LineManager's Email is required";
            errors.status = true;
        }
        else if(emailRegex.test(data.lineManagerEmail) === false){
            errors.lineManagerEmail = "LineManager's Email is not valid";
            errors.status = true;
        }
        if(!data.lineManagerName){
            errors.lineManagerName = "LineManager's Name is required";
            errors.status = true;
        }
        if(!data.departmentName){
            errors.departmentName = "Department Name is required";
            errors.status = true;
        }
        
        return errors;
    }

    const ClearInput = () =>{
        setDepartmentDetails({
            departmentName: "",
            lineManagerName:"",
            lineManagerEmail:""
        })
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }
    const AddNewDepartment = (payload) =>{
        loading(true);
        axios.post(baseURL + createDepartmentAPI , payload,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            })
        .then((res)=>{
            if(res.data.isSuccess){
                handleGetDepartment();
                loading(false);
                ClearInput();
                setMessage({
                    msg: "Department Added Successfully !!",
                    status:"1"
                });
                
               
            }
            else{
                loading(false);
                ClearInput();
                setMessage({
                    msg: res.data.message,
                    status:"0"
                });
            }
        })
    }
    useEffect(() => {
    }, [])
    return (
        <>
             <div className={`fixed top-0 w-full h-full bg-black opacity-50 z-${20}`} onClick={handleBackDropOnClick}>
            </div>
            <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/4 py-14 rounded-xl bg-white z-20">
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color24 font-bold text-2xl">Add Departmet</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                {
                    message  !== "" &&
                    <p className={`${message.status === "0" && "text-red-500 bg-red-300"} ${message.status === "1" && "text-green-700 bg-green-200"} p-4 text-left my-3`}>{message.msg}</p>
                }
                <div className="flex flex-wrap">
                    <TextField type="text" name="departmentName" placeholder="Department" label="Departmet Name" onChange={handleOnChange} disabled={false} width="2/4" value={departmentDetails.departmentName} formError={formErrors.departmentName}/>
                    <TextField type="text" name="lineManagerName" placeholder="Ademola" label="Line Manager" onChange={handleOnChange} disabled={false} width="2/4" value={departmentDetails.lineManagerName} formError={formErrors.lineManagerName} />
                    <TextField type="text" name="lineManagerEmail" placeholder="niyiade97@gmail.com" label="Line Manager's Email" onChange={handleOnChange} disabled={false} width="2/4" value={departmentDetails.lineManagerEmail} formError={formErrors.lineManagerEmail}/>
                    
                    <div className="w-full py-3 text-center">
                        <button type="submit" className="add-user-btn border w-5/12 bg-color2 text-white h-14 rounded-full text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                        Submit
                        </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </>
        
    )
}

export default AddDepartment;
