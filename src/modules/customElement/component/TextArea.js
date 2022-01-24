import React from 'react'

function TextArea({ onChange, width, label, formError, type, name, value, placeholder, row, disabled}) {

    const handleChange = (e) =>{
        const {name, value} = e.target;
        onChange(name, value);
    }
    return (
        <div className={`w-${width} px-4 py-3`}>
            <div style={{color:"#8E8EA1"}} className="w-full">
                <label className="font-normal text-lg">{label}</label> 
                <textarea className={`w-full mt-4 p-4 font-semibold rounded-3xl ${formError ? " border border-red-400" :"bg-white border-2 border-color5 text-color13 placeholder-color4"} ${disabled ? "bg-blue-50" : "bg-white"}`} type={type} name={name} value={value} rows={row} placeholder={placeholder} onChange={handleChange} />
                {
                    formError &&
                    <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
                }
            </div>
        </div>
    )
}

export default TextArea
