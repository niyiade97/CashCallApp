import React from 'react';

function ProfileInput ({type, name, handleChange, placeholder, color, bgColor, value}){
    return(
        <div className="w-full">
            <input type={type} name={name} value={value} onChange={handleChange} className={`w-full h-12 rounded-xl border border-color22 placeholder-color23 pl-3 text-${color} bg-${bgColor}`} placeholder={placeholder} />
        </div>
    )
}

export default ProfileInput;
