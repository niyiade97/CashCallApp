import React,{useState} from 'react'
import UploadButton from '../../customElement/component/UploadButton';
import TextField from "../../customElement/component/TextField";
import "../style/ChequeRequest.css";

function ChequeRequest() {
    const userId = localStorage.getItem("userId");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const [ chequeRequest, setChequeRequest ] = useState({
        userID: parseInt(userId),
        departmentID: "",
        date: "",
        voucherNo: "",
        to: "Finance",
        from: "",
        purpose: "",
        reason: "",
        beneficiaryName: "",
        beneficiaryBank: "",
        amount: 0,
        preparedBy: "",
        approvedBy: "",
        base64File:""
    })
    const handleOnChange = (name, value) =>{
        setChequeRequest((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const validate = (data) =>{
        const errors ={
         status: false
        }
         if(!data.departmentID){
             errors.department = "Department is required";
             errors.status = true;
         }
         if(!data.amount){
             errors.amount = "Amount is required";
             errors.status = true;
         }
         else if(data.amount > 20000){
             errors.amount = "Amount can't be greater than #20,000";
             errors.status = true;
         }
         if(!data.supervisorID){
             errors.supervisor = "Supervisor is required";
             errors.status = true;
         }
         if(!data.ImageFile){
             errors.imageFile = "Select a file";
             errors.status = true;
         }
         if(!data.purpose){
             errors.purpose = "Request purpose is required";
             errors.status = true;
         }
        
         return errors;
     }


    const [ formErrors, setFormErrors ] = useState({
        
    })
    const handleOnSubmit = () =>{

    }
    const TextArea = ({ width, formError, label, type, name, value, placeholder,handleOnchange, row  }) =>{
        return( 
        <div className={`w-${width} px-4 py-3`}>
            <div style={{color:"#8E8EA1"}} className="w-full">
                <label className="font-normal text-lg">{label}</label> 
                <textarea className={`w-full mt-4 p-4 font-semibold rounded-3xl ${formError ? " border border-red-400" :"bg-white border-2 border-color5 text-color13 placeholder-color4" }`} type={type} name={name} value={value} rows={row} placeholder={placeholder} onChange={handleOnchange} />
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
                    <TextField type="text" name="voucherNo" placeholder="" label="Voucher No" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={chequeRequest.voucherNo}/>
                    <TextField type="text" name="to" placeholder="" label="To" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={chequeRequest.to}/>
                    <TextField type="text" name="from" placeholder="" label="From" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={chequeRequest.from}/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2' />
                    </div>
                    <TextArea width="full" name="purpose" label="Purpose" row="2"/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2'/>
                    </div>
                    <TextArea width="full" name="reason" label="Sir / Madam," row="5"/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2'/>
                    </div>
                    <div className='w-full font-normal text-lg pl-4'>
                        <p style={{color:"#8E8EA1"}} className='underline '>Payment Details:</p>
                    </div>
                    <TextField type="text" name="beneficiaryName" placeholder="" label="Beneficiary's Name" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={""}/>
                    <TextField type="text" name="beneficiaryBank" placeholder="" label="Beneficiary's Bank" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={""}/>
                    <TextField type="number" name="amount" placeholder="" label="Amount in Figure" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={""}/>
                    <UploadButton label="Upload" onChange={handleOnChange} name="base64File"  formError={formErrors.base64File} value={""}/>
                    <div className='w-full my-7'>
                        <hr className='border-t-2'/>
                    </div>
                    <TextField type="text" name="preparedBy" placeholder="" label="Prepared by:" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={firstName + " " + lastName}/>
                    <TextField type="text" name="valueDate" placeholder="" label="Approved by:" onChange={handleOnChange} disabled={true} width="2/4" formError={formErrors.name} value={""}/>
                    <div className="m-auto py-3 w-3/12">
                    <button type="submit" className="cheque-request-btn border w-full text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Download</button>
               
                    </div> 
                </div>
                </form>
                
            </div>
        </div>
    )
}

export default ChequeRequest;
