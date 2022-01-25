import React from 'react'

function DepartmentDropDown({ options, label, formError, name, onChange, value }) {
    const handleChange = (e) =>{
        const { name, value } = e.target;
        e.preventDefault();
        onChange( name, parseInt(value));
    }
    return (
        <div className="w-2/4 px-4 py-3">
            <div className="w-full text-color5">
                <label className="font-normal text-lg">{label}</label> 
                <select className="rounded-full w-full mt-4 h-14 px-4 font-semibold bg-white border-2 border-color5 text-color13 placeholder-color13 pr-4" name={name} onChange={handleChange} >
                <option disabled selected={value === null && true} value="">{label}</option>
                {
                    options.length !== 0 &&
                    options.map((option,id) =>{
                        return(
                            <option key={id} value={option.departmentID}>
                                {option.department}
                            </option>
                        )
                    })
                }
                </select>
                <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
            </div>
            </div>
    )
}

export default DepartmentDropDown
