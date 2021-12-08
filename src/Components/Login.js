import axios from 'axios';
import React,{useState} from 'react'
import { MdWifiProtectedSetup } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })
    const [ message, setMessage ] = useState("");
    const [ loginDetails, setLoginDetails ] = useState({
        email:"",
        password:""
    })

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
            axios.post("https://uat.bts.com.ng/cashcallapi/api/users/login", payload)
            .then((res) =>{
                console.log(res);
                props.onLoad(false)
               
                if(res.data.isSuccess){
                    setMessage("");
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
            console.log(loginDetails);
            login(loginDetails);
        }
        
    }

    return (
        <div className="w-45 h-full relative">
        {props.children}
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-2/4">
                <h1 className="font-bold text-2xl">Hello Again!</h1> 
                <p className="font-light text-2xl">Welcome Back</p>
                <div className="text-center">
                <form onSubmit={handleOnSubmit}>
                    <p className={`${message  !== "" && "text-red-500 bg-red-300 p-4 text-left my-3"}`}>{message}</p>
                    <input className="border-2 rounded-full w-full border-color3 text-color4 mt-6 h-14 px-4" type="email" name="email" placeholder="Email" onChange={handleOnChange}/>
                    <p className="text-left text-red-500 pt-3 pl-3">{formErrors.email}</p>
                    <input className="border-2 rounded-full w-full border-color3 text-color4 mt-6 h-14 px-4" type="text" name="password" placeholder="Password" onChange={handleOnChange} />
                    <p className="text-left text-red-500 pt-3 pl-3">{formErrors.password}</p>
                    <button type="submit" className="bg-color2 text-white rounded-full w-full mt-6 h-14 mb-6 border border-color2 hover:border-2 hover:border-color2 hover:text-color2 hover:bg-white">Login</button>
                    <Link className="" to="/forgot-password">Forgot Password</Link>
                </form>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Login;
