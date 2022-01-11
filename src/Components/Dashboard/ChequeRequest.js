import React,{useState} from 'react'
import Select from '../Select';
import UploadButton from '../UploadButton';
import TextField from '../TextField';
import {Link} from "react-router-dom"

function ChequeRequest() {
    const Services = ["Web Development", "IT", "Boat Cruise"]
    const handleOnChange = (value) =>{
        console.log(value);
    }
    const [ formErrors, setFormErrors ] = useState({
        
    })
    const handleOnSubmit = () =>{

    }
    const TextArea = ({ width, formError, label, type, name, value, placeholder,handleOnchange  }) =>{
        return( 
        <div className={`w-${width} px-4 py-3`}>
            <div style={{color:"#8E8EA1"}} className="w-full">
                <label className="font-normal text-lg">{label}</label> 
                <textarea className={`w-full mt-4 p-4 font-semibold rounded-3xl ${formError ? " border border-red-400" :"bg-white border border-color5 text-color13 placeholder-color4" }`} type={type} name={name} value={value} rows="4" cols="50" placeholder={placeholder} onChange={handleOnchange} />
                {
                    formError &&
                    <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
                }
            </div>
        </div>)
    }

    return (
        <div className="w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color13 font-bold text-2xl">Submit Cheque Request</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                <div className="flex flex-wrap">
                    
                    <TextField type="date" name="valueDate" placeholder="" label="Value Date" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={""}/>
                    <TextField type="text" name="voucherNum" placeholder="" label="Voucher No" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={""}/>
                    <TextField type="text" name="to" placeholder="" label="To" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={""}/>
                    <TextField type="text" name="from" placeholder="" label="From" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={""}/>
                    <div className='w-full my-7'>
                        <hr />
                    </div>
                    <TextArea width="full" label="Re"/>
                    <div className='w-full my-7'>
                        <hr />
                    </div>
                    <TextArea width="full" label="Sir / Madam,"/>

                    {/* <TextField type="text" name="purpose" placeholder="Vehicle Repair" label="Purpose" onChange={handleOnChange} disabled={false} width="full" />
                    */}
                    <div className="m-auto py-3 w-3/12">
                    <Link to="/requests">
                        <button type="submit" className=" border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Download</button>
                    </Link>
                    </div> 
                </div>
                </form>
                
            </div>
        </div>
    )
}

export default ChequeRequest;
