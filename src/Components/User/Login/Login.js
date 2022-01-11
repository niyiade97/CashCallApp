import axios from 'axios';
import React,{useState} from 'react'
import { MdWifiProtectedSetup } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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
        // else if(data.password.length <= 8){
        //     errors.password = "Password must greater than 8";
        //     errors.status = true;
        // }
        return errors;
    }
    const login = (payload) =>{
            props.onLoad(true);
            axios.post(baseURL + loginAPI, payload)
            .then((res) =>{
                props.onLoad(false);
                if(res.data.isSuccess){
                    setMessage("");
                    localStorage.setItem("userId", res.data.data.id);
                    localStorage.setItem("token", res.data.message);
                    localStorage.setItem("role", res.data.data.userRole);
                    
                    if(res.data.data.userRole === "User"){
                        navigate("/home");console.log(res);
                    }
                    else{
                        navigate("/dashboard");console.log(res);
                    }
                }
                else{
                    console.log(res.data.message)
                    setMessage(res.data.message);
                }
                clearInput();
            })
            .catch((err) =>{
                console.log(err.message)
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
                    <input className="login-form-password" type="text" name="password" placeholder="Password" onChange={handleOnChange} value={loginDetails.password} autoComplete="off"/>
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
