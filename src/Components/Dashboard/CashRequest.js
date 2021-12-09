import React from 'react'
import Select from '../Select';
import UploadButton from '../UploadButton';
import TextField from '../TextField';
import {Link} from "react-router-dom"

function CashRequest() {
    const Services = ["Web Development", "IT", "Boat Cruise"]
    const handleOnChange = (value) =>{
        console.log(value);
    }
    const handleOnSubmit = () =>{

    }

    return (
        <div className="w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color13 font-bold text-2xl">Submit Cash Request</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                <div className="flex flex-wrap">
                    
                    <TextField type="text" name="name" placeholder="Dolapo Obisesan" label="Name" onChange={handleOnChange} disabled={false} width="2/4" />
                    <Select name="department" placeholder="Marketing" label="Department" onChange={handleOnChange} disabled={false} options={Services} width="2/4" />
                    <TextField type="text" name="amount" placeholder="#300,000" label="Amount" onChange={handleOnChange} disabled={false} width="2/4"  />
                    <Select name="supervisor" placeholder="Adebayo Salami" label="Supervisor" onChange={handleOnChange} disabled={false} options={["Adelana Yemi", "Shola Kola"]} width="2/4" />
                    
                    <TextField type="date" name="dueDate" placeholder="Mar 21, 2021" label="Due Date" onChange={handleOnChange} disabled={false} width="2/4" />
                    <UploadButton label="Upload" onChange={handleOnChange} name="upload-btn" />
                    <TextField type="text" name="purpose" placeholder="Vehicle Repair" label="Purpose" onChange={handleOnChange} disabled={false} width="full" />
                    <div className="w-45 m-auto py-3">
                    <Link to="/requests">
                        <button type="submit" className=" border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Submit</button>
                    </Link>
                    </div>
                </div>
                </form>
                
            </div>
        </div>
    )
}

export default CashRequest;
