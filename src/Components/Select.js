import React from 'react';

function Select({ label, onChange, disabled, options, placeholder, name, type, width, value, formError,valueKey }){

    const handleOnchange = (e) =>{
        const { name, value } = e.target;
        e.preventDefault();
        onChange( name, parseInt(value) );
    }

    return(
        <div className="w-2/4 px-4 py-3">
            <div className="w-full text-color5">
                <label className="font-normal text-lg">{label}</label> 
                <select className={`rounded-full w-full mt-4 h-14 px-4 font-semibold ${formError ? " border border-red-400" :"bg-white border border-color5 "} text-color13 placeholder-color13 pr-4`} name={name} onChange={handleOnchange} >
                <option disabled selected={value === null && true} value="">{label}</option>
                {
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
