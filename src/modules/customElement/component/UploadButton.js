import React,{ useState } from 'react'
import { BiUpload } from 'react-icons/bi';
import "../style/UploadButton.css";

function UploadButton({label, onChange, name, formError}) {
    const [ value, setValue ] = useState("");
    const handleOnchange = (e) =>{
        const { name } = e.target;
        let file = e.target.files[0];
        setValue(file);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(){
            onChange(name, reader.result);
        }
        reader.onerror = function (error) {
            onChange(name, "");
        };
           
        
        e.preventDefault();
        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = function () {
        //     cb(reader.result)
        // };
        // reader.onerror = function (error) {
        //     console.log('Error: ', error);
        // };
    }

    return (
        <div className={`w-2/4 px-4 py-3`}>
            <div className="upload-btn-border-color w-full">
                <label className="font-normal text-lg">{label}</label> 
                <label htmlFor="upload-btn" className={`rounded-full w-full mt-4 h-14 px-4 border  ${formError ? " border-2 border-red-400": "upload-btn-border-color"} border-2 upload-btn-border ${value && "bg-blue-50"}`}>
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
