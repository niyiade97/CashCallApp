import React from 'react'
import { useNavigate } from "react-router-dom";

function BackButton(props) {
    const navigate = useNavigate();
    const handleBackButton = (e) =>{
        e.preventDefault();
        navigate(-1);
    }
    return (
        <button className={`absolute left-10 top-10 flex rounded-xl py-2 px-3 bg-${props.bgColor} text-${props.color}`} onClick={handleBackButton}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
        </button>
    )
}

export default BackButton
