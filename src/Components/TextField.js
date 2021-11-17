import React from 'react'

function TextField(props) {

    const handleOnchange = (e) =>{
        e.preventDefault();
        props.onChange(e.target.value);
    }
    return (
        <div className="w-2/4 px-4 py-3">
            <div className="w-full text-color5">
                <label className="font-normal text-lg">{props.label}</label> 
                <input className={`rounded-full w-full mt-4 h-14 px-4 font-semibold ${props.disabled ? "bg-color12" : "bg-white border border-color5 text-color13 placeholder-color13"}`} type={props.type} name={props.name} placeholder={props.placeholder} onChange={handleOnchange} disabled={props.disabled ? true : false} />
            </div>
        </div>
        
    )
}

export default TextField
