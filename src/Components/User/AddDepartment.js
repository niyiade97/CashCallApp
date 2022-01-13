import React,{useEffect, useState} from 'react'
import Select from '../Select';
import UploadButton from '../UploadButton';
import TextField from '../TextField';
import {Link} from "react-router-dom"
import { DataContext } from "../../Utils/DataContext";
import axios from 'axios';
import Loader from '../Loader';
import "./AddUser.css";
import Spinner from 'react-bootstrap/Spinner';

function AddDepartment({ loading }) {
    const usersAPI = process.env.REACT_APP_GET_USERS_API;
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const token = localStorage.getItem("token");
    const [ users, setUsers ] = useState([]);
    const [ departments, setDepartments ] = useState([]);
     const baseURL = process.env.REACT_APP_BASE_URL;
    const addUserAPI = process.env.REACT_APP_ADD_USER_API;
    const [ message, setMessage ] = useState("");
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })
    // const { departments, getUsers } = useContext(DataContext);
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
            console.log(userDtails);
        }
        console.log(userDtails);
       
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
                <select className="rounded-full w-full mt-4 h-14 px-4 font-semibold bg-white border-2 border-color5 text-color13 placeholder-color13 pr-4" name={name} onChange={handleChange} >
                <option disabled selected={value === null && true} value="">{label}</option>
                {
                    options.length !== 0 &&
                    options.map((option,id) =>{
                        return(
                            <option key={id} value={option.departmentID}>
                                {option.department}
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

    const getUsers = () =>{
        axios.get(baseURL + usersAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setUsers(res.data.data.map((data) =>{
                return{
                    data
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
        loading(null,true);
        console.log(payload)
        axios.post(baseURL + addUserAPI , payload,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            })
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
    useEffect(() => {
       getDepartment();
    }, [])
    return (
        <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/4 py-10 rounded-xl bg-white z-20">
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color24 font-bold text-2xl">Add Departmet</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                <p className={`${message  !== "" && "text-red-500 bg-red-300 p-4 text-left my-3"}`}>{message}</p>
                <div className="flex flex-wrap">
                    <TextField type="text" name="departmentName" placeholder="Dolapo" label="Departmet Name" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.firstname} formError={formErrors.firstname}/>
                    <TextField type="text" name="lineManager" placeholder="Ademola" label="Line Manager" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.lastname} formError={formErrors.lastname} />
                    <TextField type="text" name="email" placeholder="niyiade97@gmail.com" label="Line Manager's Email" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.email} formError={formErrors.email}/>
                    
                    <div className="m-auto py-3 w-5/12">
                        <button type="submit" className="add-user-btn border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                        Submit
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default AddDepartment;
