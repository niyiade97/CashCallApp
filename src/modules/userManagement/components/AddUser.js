import React,{useEffect, useState} from 'react'
import Select from "../../customElement/component/Select"
import TextField from '../../customElement/component/TextField';
import DepartmentDropDown from '../../customElement/component/DepartmentDropDown';
import axios from 'axios';
import "../style/AddUser.css";
import { createUser } from '../../../services/users';
import { FaWindowClose } from 'react-icons/fa';

function AddUser({ loading, handleBackDropOnClick, handleGetUsers, getUsers }) {
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const token = localStorage.getItem("token");
    const [ departments, setDepartments ] = useState([]);
     const baseURL = process.env.REACT_APP_BASE_URL;
    const [ message, setMessage ] = useState({
        msg: "",
        status:""
    });
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })
    const [ userDtails, setUserDetails ] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:"",
        userRole:null,
        departmentID:null 
    });
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(userDtails));
        if(!validate(userDtails).status){
            AddNewUser(userDtails);
        }
       
    }
    const handleOnChange = (name, value) =>{
        setUserDetails((prevData) =>{
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
        if(!data.email){
            errors.email = "Email is required";
            errors.status = true;
        }
        else if(emailRegex.test(data.email) === false){
            errors.email = "Email is not valid";
            errors.status = true;
        }
        if(!data.lastname){
            errors.firstname = "First Name is required";
            errors.status = true;
        }
        if(!data.lastname){
            errors.lastname = "Last Name is required";
            errors.status = true;
        }
        if(!data.userRole){
            errors.userRole = "Role is required";
            errors.status = true;
        }
        if(!data.departmentID){
            errors.departmentID = "Department is required";
            errors.status = true;
        }
        if(!data.password){
            errors.password = "Password is required";
            errors.status = true;
        }
        else if(data.password.length <= 8){
            errors.password = "Password must be greater than 8";
            errors.status = true;
        }
        return errors;
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
   
    const ClearInput = () =>{
        setUserDetails({
            email:"",
            firstname:"",
            lastname:"",
            password:"",
            userRole:"",
            departmentID:null 
        })
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }
    const AddNewUser = (payload) =>{
        loading(true);
        createUser(payload)
            .then((res)=>{
                if(res.data.isSuccess){
                    getUsers();
                    loading(false);
                    ClearInput();
                    setMessage({
                        msg: "User Added Successfully !!",
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
       getDepartment();
    }, [])
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-${20}`} onClick={handleBackDropOnClick}>
            </div>
            <div className="fixed transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/5 py-10 rounded-xl bg-white z-30">
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3 flex justify-between">
                    <h1 className="text-color24 font-bold text-2xl">Add New User</h1>
                    <i onClick={handleBackDropOnClick} className="text-blue-800 hover:text-blue-500">
                        <FaWindowClose />
                    </i>
                </div>
                <form onSubmit={handleOnSubmit}>
                {
                    message  !== "" &&
                    <p className={`${message.status === "0" && "text-red-500 bg-red-300"} ${message.status === "1" && "text-green-700 bg-green-200"} p-4 text-left my-3`}>{message.msg}</p>
                }
               
                <div className="flex flex-wrap">
                    <TextField type="text" name="firstname" placeholder="Dolapo" label="First Name" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.firstname} formError={formErrors.firstname}/>
                    <TextField type="text" name="lastname" placeholder="Ademola" label="Last Name" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.lastname} formError={formErrors.lastname} />
                    <TextField type="text" name="email" placeholder="niyiade97@gmail.com" label="Email" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.email} formError={formErrors.email}/>
                    <Select name="userRole" type="dropdown" label="Role" valueKey="value" onChange={handleOnChange} disabled={false} options={[{ userRole:"User", value:"User"}, { userRole:"Supervisor", value:"Supervisor"}, { userRole:"Admin", value:"Admin"}]} width="2/4" value={userDtails.userRole} formError={formErrors.userRole}/>
                    <DepartmentDropDown name="departmentID" label="Department" onChange={handleOnChange} options={departments} value={userDtails.departmentID} width="2/4" formError={formErrors.departmentID}/>
                    <TextField type="password" name="password" placeholder="" label="Password" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.password} formError={formErrors.password}/>
                    <div className="m-auto py-3 w-5/12">
                        <button type="submit" className="add-user-btn border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
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

export default AddUser
