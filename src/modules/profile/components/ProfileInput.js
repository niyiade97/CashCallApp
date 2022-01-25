import React from 'react';

function ProfileInput ({type, name, handleOnChange, placeholder, color, formError, value, disabled}){

    const handleChange = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        handleOnChange(name, value);
    }
    
    return(
        <div className="w-full">
            <input type={type} name={name} value={value} onChange={handleChange} className={`w-full h-12 rounded-xl border border-color22 placeholder-color23 pl-3 text-${color} ${disabled && "bg-blue-50"}`} placeholder={placeholder} disabled={disabled} />
            {
                formError &&
                <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
            }
        </div>
    )
}

export default ProfileInput;
