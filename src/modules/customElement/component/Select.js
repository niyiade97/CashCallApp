import React from 'react';
import "../style/Select.css";

function Select({ label, onChange, disabled, options, placeholder, name, type, width, value, formError,valueKey }){

    const handleOnchange = (e) =>{
        const { name, value } = e.target;
        e.preventDefault();
        if(type === "dropdown"){
            onChange( name, value);
        }
        else{
            onChange( name, parseInt(value) );
        }
        
    }

    return(
        <div className="w-2/4 px-4 py-3">
            <div className=" w-full">
                <label className="font-normal text-lg label-color">{label}</label> 
                <select className={`rounded-full w-full mt-4 h-14 px-4 font-semibold ${formError ? " border border-red-400" : "select-inner-wrapper-select"} select-inner-wrapper-select`} name={name} onChange={handleOnchange} >
                <option disabled selected={value === null && true} value="">{label}</option>
                {
                    options.length !== 0 &&
                    options.map((option,id) =>{
                        return(
                            
                            <option key={id} value={option[name]}>
                                {option[valueKey]}
                            </option>
                        )
                    })
                }
                </select>
                {
                    formError &&
                    <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
                }
                
            </div>
        </div>
        
    )
}

export default Select;
