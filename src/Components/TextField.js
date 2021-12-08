import React from 'react'

function TextField({label, onChange, disabled, placeholder, name, type, width, value, formError}) {

    const handleOnchange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        onChange(name, value);
    }
    return (
        <div className={`w-${width} px-4 py-3`}>
            <div className="w-full text-color5">
                <label className="font-normal text-lg">{label}</label> 
                <input className={`rounded-full w-full mt-4 h-14 px-4 font-semibold ${disabled ? "bg-color12" : "bg-white border border-color5 text-color13 placeholder-color4"}`} type={type} name={name} value={value} placeholder={placeholder} onChange={handleOnchange} disabled={disabled ? true : false} />
                <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
            </div>
        </div>
        
    )
}

export default TextField
