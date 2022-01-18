import React,{useEffect, useState} from 'react'
import Select from "../../customElement/component/Select"
import TextField from '../../customElement/component/TextField';
import DepartmentDropDown from '../../customElement/component/DepartmentDropDown';
import axios from 'axios';
import "../style/ApprovalModal.css";

function ApprovalModal({ handleBackDropOnClick, data }) {
    console.log(data);
    // const usersAPI = process.env.REACT_APP_GET_USERS_API;
    // const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    // const token = localStorage.getItem("token");
    // const [ users, setUsers ] = useState([]);
    // const [ departments, setDepartments ] = useState([]);
    //  const baseURL = process.env.REACT_APP_BASE_URL;
    // const addUserAPI = process.env.REACT_APP_ADD_USER_API;
    // const [ message, setMessage ] = useState({
    //     msg: "",
    //     status:""
    // });
    // const [ formErrors, setFormErrors ] = useState({
    //     status: false
    // })
    // // const { departments, getUsers } = useContext(DataContext);
    // const [ userDtails, setUserDetails ] = useState({
    //     email:"",
    //     firstname:"",
    //     lastname:"",
    //     password:"",
    //     userRole:null,
    //     departmentID:null 
    // });
    // const handleOnSubmit = (e) =>{
    //     e.preventDefault();
    //     setFormErrors(validate(userDtails));
    //     if(!validate(userDtails).status){
    //         AddNewUser(userDtails);
    //     }
       
    // }
    
    // const handleOnChange = (name, value) =>{
    //     setUserDetails((prevData) =>{
    //         return{
    //             ...prevData,
    //             [name]: value
    //         }
    //     })
    // }
    // const validate = (data) =>{
    //     const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     const errors ={
    //         status: false
    //     }
    //     if(!data.email){
    //         errors.email = "Email is required";
    //         errors.status = true;
    //     }
    //     else if(emailRegex.test(data.email) === false){
    //         errors.email = "Email is not valid";
    //         errors.status = true;
    //     }
    //     if(!data.lastname){
    //         errors.firstname = "First Name is required";
    //         errors.status = true;
    //     }
    //     if(!data.lastname){
    //         errors.lastname = "Last Name is required";
    //         errors.status = true;
    //     }
    //     if(!data.userRole){
    //         errors.userRole = "Role is required";
    //         errors.status = true;
    //     }
    //     if(!data.departmentID){
    //         errors.departmentID = "Department is required";
    //         errors.status = true;
    //     }
    //     if(!data.password){
    //         errors.password = "Password is required";
    //         errors.status = true;
    //     }
    //     else if(data.password.length <= 8){
    //         errors.password = "Password must be greater than 8";
    //         errors.status = true;
    //     }
    //     return errors;
    // }

    // const getDepartment = () =>{
    //     axios.get(baseURL + departmentAPI,
    //         { 
    //             headers: {"Authorization" : `Bearer ${token}`} 
    //         }
    //     )
    //     .then((res) =>{
    //         setDepartments(res.data.data.map((data) =>{
    //             return{
    //                 departmentID: data.departmentID,
    //                 department: data.department
    //             }
    //         }))
    //     })
    // }
    // const DepartmentDropDown = ({ options, label, formError, name, onChange, value }) =>{
    //     const handleChange = (e) =>{
    //         const { name, value } = e.target;
    //         e.preventDefault();
    //         onChange( name, parseInt(value));
    //     }
    //     return(
    //         <div className="w-2/4 px-4 py-3">
    //         <div className="w-full text-color5">
    //             <label className="font-normal text-lg">{label}</label> 
    //             <select className="rounded-full w-full mt-4 h-14 px-4 font-semibold bg-white border-2 border-color5 text-color13 placeholder-color13 pr-4" name={name} onChange={handleChange} >
    //             <option disabled selected={value === null && true} value="">{label}</option>
    //             {
    //                 options.length !== 0 &&
    //                 options.map((option,id) =>{
    //                     return(
    //                         <option key={id} value={option.departmentID}>
    //                             {option.department}
    //                         </option>
    //                     )
    //                 })
    //             }
    //             </select>
    //             <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
    //         </div>
    //         </div>
    //     )
    // }

    // const ClearInput = () =>{
    //     setUserDetails({
    //         email:"",
    //         firstname:"",
    //         lastname:"",
    //         password:"",
    //         userRole:"",
    //         departmentID:null 
    //     })
    //     setTimeout(() => {
    //         setMessage("");
    //     }, 4000);
    // }
    // const AddNewUser = (payload) =>{
    //     loading(true);
    //     console.log(payload)
    //     axios.post(baseURL + addUserAPI , payload,
    //         { 
    //             headers: {"Authorization" : `Bearer ${token}`} 
    //         })
    //     .then((res)=>{
    //         if(res.data.isSuccess){
    //             handleGetUsers();
    //             loading(false);
    //             ClearInput();
    //             setMessage({
    //                 msg: "User Added Successfully !!",
    //                 status:"1"
    //             });
    //         }
    //         else{
    //             loading(false);
    //             ClearInput();
    //             setMessage({
    //                 msg: res.data.message,
    //                 status:"0"
    //             });
    //         }
    //     })
    // }
    // useEffect(() => {
    //    getDepartment();
    // }, [])
    return (
        <>
            <div className={`fixed top-0 w-full h-full bg-black opacity-50 z-${20}`} onClick={handleBackDropOnClick}>
            </div>
            <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/4 py-10 rounded-xl bg-white z-30">
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color24 font-bold text-2xl">Approve Request</h1>
                </div>
                <form onSubmit={null}>
                
               
                <div className="flex flex-wrap">
                    <TextField type="text" name="firstname" placeholder="Dolapo" label="Purpose"  disabled={true} width="2/4" value={data.purpose}/>
                    <TextField type="text" name="lastname" placeholder="Ademola" label="Amount"  disabled={true} width="2/4" value={data.amount} />
                    <TextField type="text" name="email" placeholder="" label="Status"  disabled={true} width="2/4" value={data.status} />
                    {/* <Select name="userRole" type="dropdown" label="Role" valueKey="value" onChange={handleOnChange} disabled={false} options={[{ userRole:"User", value:"User"}, { userRole:"Supervisor", value:"Supervisor"}, { userRole:"Admin", value:"Admin"}]} width="2/4" value={userDtails.userRole} formError={formErrors.userRole}/>
                    <DepartmentDropDown name="departmentID" label="Department" onChange={handleOnChange} options={departments} value={userDtails.departmentID} width="2/4" formError={formErrors.departmentID}/>
                    <TextField type="password" name="password" placeholder="" label="Password" onChange={handleOnChange} disabled={false} width="2/4" value={userDtails.password} formError={formErrors.password}/> */}
                    <div className='w-full flex'>
                    <div className=" py-3 text-center w-2/4">
                        <button type="submit" className="add-user-btn border w-2/4 bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                            Decline
                        </button>
                    </div>
                    <div className=" py-3 text-center w-2/4">
                        <button type="submit" className="add-user-btn border w-2/4 bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">
                            Approve
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

export default ApprovalModal
