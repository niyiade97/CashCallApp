import React from 'react'
import { BiUpload } from 'react-icons/bi';

function UploadButton({label, onChange, name}) {
    
    const handleOnchange = (e) =>{
        e.preventDefault();
        onChange(e.target.value);
    }

    return (
        <div className={`w-2/4 px-4 py-3`}>
        <div className="w-full text-color5">
            <label className="font-normal text-lg">{label}</label> 
            <label htmlFor="upload-btn" className="rounded-full w-full mt-4 h-14 px-4 border border-color5 text-color13 font-semibold flex justify-center items-center">
                <i className="text-color2 text-3xl pr-1"><BiUpload /></i>
                <p className="pl-1">Upload</p>
            </label> 
            <input id="upload-btn"className="hidden" type="file" name={name} onChange={handleOnchange}/>
        </div>
    </div>
    )
}

export default UploadButton
