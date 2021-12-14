import React from 'react'
import { BiUpload } from 'react-icons/bi';

function UploadButton({label, onChange, name, formError}) {
    
    const handleOnchange = (e) =>{
        const { name } = e.target;
        console.log(e.target.files[0]) 
        e.preventDefault();
        onChange(name, e.target.files[0]);
    }

    return (
        <div className={`w-2/4 px-4 py-3`}>
        <div className="w-full text-color5">
            <label className="font-normal text-lg">{label}</label> 
            <label htmlFor="upload-btn" className={`rounded-full w-full mt-4 h-14 px-4 border  ${formError ? " border-2 border-red-400": "border-color5"}  text-color13 font-semibold flex justify-center items-center hover:bg-color2 hover:text-white`}>
                <i className=" text-3xl pr-1"><BiUpload /></i>
                <p className="pl-1">Upload</p>
            </label> 
            <input id="upload-btn"className="hidden" type="file" accept="images/*" name={name} onChange={handleOnchange}/>
            {
                formError &&
                <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
            }
        </div>
    </div>
    )
}

export default UploadButton
