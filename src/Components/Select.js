import React from 'react';

function Select(props) {
    const handleOnchange = (e) =>{
        e.preventDefault();
        props.onChange(e.target.value);
    }
    return (
        <div className="w-2/4 px-4 py-3">
            <div className="w-full text-color5">
                <label className="font-normal text-lg">{props.label}</label> 
                <select className="rounded-full w-full mt-4 h-14 px-4 font-semibold bg-white border border-color5 text-color13 placeholder-color13 pr-4" name={props.name} placeholder={props.placeholder} onChange={handleOnchange}>
                {
                    props.options.map((option,id) =>{
                        return(
                            <option key={id}>
                                {option}
                            </option>
                        )
                    })
                }
                </select>
            </div>
        </div>
        
    )
}

export default Select;
