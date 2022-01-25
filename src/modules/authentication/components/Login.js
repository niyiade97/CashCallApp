import axios from 'axios';
import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

function Login(props) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const loginAPI = process.env.REACT_APP_LOGIN_API;
    const navigate = useNavigate();
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })
    const [ message, setMessage ] = useState("");
    const [ loginDetails, setLoginDetails ] = useState({
        email:"",
        password:""
    })
    const clearInput = () =>{
        setLoginDetails({
            email:"",
            password:""
        })
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }

    const validate = (data) =>{
        const errors ={
            status: false
        }
        if(!data.email){
            errors.email = "Email is required";
            errors.status = true;
        }
        if(!data.password){
            errors.password = "Password is required";
            errors.status = true;
        }
        return errors;
    }
    const login = (payload) =>{
            props.onLoad(true);
            axios.post(baseURL + loginAPI, payload)
            .then((res) =>{
                props.onLoad(false);
                if(res.data.isSuccess){
                    setMessage("");
                    if(res.data.data.userRole === "User"){
                        localStorage.setItem("userId", res.data.data.id);
                        localStorage.setItem("userEmail", res.data.data.email);
                        localStorage.setItem("userToken", res.data.message);
                        localStorage.setItem("userRole", res.data.data.userRole);
                        localStorage.setItem("departmentID", res.data.data.departmentID);
                        localStorage.setItem("userFirstName", res.data.data.firstname)
                        localStorage.setItem("userLastName", res.data.data.lastname)
                        navigate("/fund-request");
                    }
                    else if( res.data.data.userRole === "Supervisor"){
                        localStorage.setItem("superId", res.data.data.id);
                        localStorage.setItem("superEmail", res.data.data.email);
                        localStorage.setItem("superToken", res.data.message);
                        localStorage.setItem("superRole", res.data.data.userRole);
                        localStorage.setItem("superFirstName", res.data.data.firstname)
                        localStorage.setItem("superLastName", res.data.data.lastname)
                        navigate("/supervisor-requests");
                    }
                    else{
                        localStorage.setItem("adminId", res.data.data.id);
                        localStorage.setItem("adminEmail", res.data.data.email);
                        localStorage.setItem("adminToken", res.data.message);
                        localStorage.setItem("adminRole", res.data.data.userRole);
                        localStorage.setItem("adminFirstName", res.data.data.firstname)
                        localStorage.setItem("adminLastName", res.data.data.lastname)
                        navigate("/dashboard");
                    }
                }
                else{
                    setMessage(res.data.message);
                }
                clearInput();
            })
            .catch((err) =>{
                props.onLoad(false)

            })
        
    }
    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setLoginDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(loginDetails));
        if(!validate(loginDetails).status){
            login(loginDetails);
        }
        
    }

    return (
        <div className="login-container">
        {props.children}
        <div className="login-inner-container">
            <div className="login-wrapper">
                <h1 className="login-wrapper-header-h1">Hello Again!</h1> 
                <p className="login-wrapper-header-p">Welcome Back</p>
                <div className="login-form-container">
                <form onSubmit={handleOnSubmit}>
                    <p className={`${message  !== "" && "text-red-500 bg-red-300 p-4 text-left my-3"}`}>{message}</p>
                    <input className="login-form-email" type="email" name="email" placeholder="Email" onChange={handleOnChange} value={loginDetails.email} autoComplete="off"/>
                    <p className="login-form-p ">{formErrors.email}</p>
                    <input className="login-form-password" type="password" name="password" placeholder="Password" onChange={handleOnChange} value={loginDetails.password} autoComplete="off"/>
                    <p className="login-form-p">{formErrors.password}</p>
                    <button type="submit" className="login-form-btn">Login</button>
                    <Link className="login-form-reset" to="/reset-password">Forgot Password</Link>
                </form>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Login;
