import React from 'react'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="w-45 h-full flex justify-center items-center">
            <div className="w-2/4">
                <h1 className="font-bold text-2xl">Hello Again!</h1> 
                <p className="font-light text-2xl">Welcome Back</p>
                <div className="text-center">
                <form>
                    <input className="border-2 rounded-full w-full border-color3 text-color4 mt-6 h-14 px-4" type="email" name="email" placeholder="Email" />
                    <input className="border-2 rounded-full w-full border-color3 text-color4 mt-6 h-14 px-4" type="text" name="password" placeholder="Password" />
                    <button type="submit" className="bg-color2 text-white rounded-full w-full mt-6 h-14 mb-6 hover:border-2 hover:border-color2 hover:text-color2 hover:bg-white">Login</button>
                    <Link className="" to="/forgot-password">Forgot Password</Link>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
