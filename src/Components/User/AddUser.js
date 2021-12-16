import React,{useContext, useState} from 'react'
import Select from '../Select';
import UploadButton from '../UploadButton';
import TextField from '../TextField';
import {Link} from "react-router-dom"
import { DataContext } from "../../Utils/DataContext";
import axios from 'axios';
import Loader from '../Loader';
import Spinner from 'react-bootstrap/Spinner';

function AddUser({ loading }) {
     const baseURL = process.env.REACT_APP_BASE_URL;
    const addUserAPI = process.env.REACT_APP_ADD_USER_API;
    const [ message, setMessage ] = useState("");
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })
    const { departments, getUsers } = useContext(DataContext);
    const [ userDtails, setUserDetails ] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:"",
        userRole:"",
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
    const DepartmentDropDown = ({ options, label, formError, name, onChange, value }) =>{
        const handleChange = (e) =>{
            const { name, value } = e.target;
            e.preventDefault();
            onChange( name, parseInt(value));
        }
        return(
            <div className="w-2/4 px-4 py-3">
            <div className="w-full text-color5">
                <label className="font-normal text-lg">{label}</label> 
                <select className="rounded-full w-full mt-4 h-14 px-4 font-semibold bg-white border border-color5 text-color13 placeholder-color13 pr-4" name={name} onChange={handleChange} >
                <option disabled selected={value === null && true} value="">{label}</option>
                {
                    options.map((option,id) =>{
                        return(
                            <option key={id} value={option.data.departmentID}>
                                {option.data.department}
                            </option>
                        )
                    })
                }
                </select>
                <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
            </div>
            </div>
        )
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
        loading(null,true);
        axios.post(baseURL + addUserAPI , payload)
        .then((res)=>{
            if(res.data.isSuccess){
                getUsers();
                loading(true,false);
                ClearInput();
               
            }
            else{
                loading(false,false);
                ClearInput();
                setMessage(res.data.message);
            }
           
            console.log(res);
        })
    }
    return (
        <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/4 py-10 rounded-xl bg-white z-20">
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color24 font-bold text-2xl">Add New User</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                <p className={`${message  !== "" && "text-red-500 bg-red-300 p-4 text-left my-3"}`}>{message}</p>
                <div className="flex flex-wrap">
                    <TextField type="text" name="firstname" placeholder="Dolapo" label="First Name" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.firstname} formError={formErrors.firstname}/>
                    <TextField type="text" name="lastname" placeholder="Ademola" label="Last Name" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.lastname} formError={formErrors.lastname} />
                    <TextField type="text" name="email" placeholder="niyiade97@gmail.com" label="Email" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.email} formError={formErrors.email}/>
                    <Select name="userRole" label="Role" onChange={handleOnChange} disabled={false} options={["User","Admin","Supervisor"]} width="2/4" value={userDtails.userRole} formError={formErrors.userRole}/>
                    <DepartmentDropDown name="departmentID" label="Department" onChange={handleOnChange} options={departments} value={userDtails.departmentID} width="2/4" formError={formErrors.departmentID}/>
                    <TextField type="password" name="password" placeholder="" label="Password" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.password} formError={formErrors.password}/>
                    <div className="w-45 m-auto py-3">
                        <button type="submit" className=" border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                        Submit
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
