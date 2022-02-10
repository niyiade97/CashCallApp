import React,{useState} from 'react'
import { FaWindowClose } from 'react-icons/fa';
import ProfileInput from "../../profile/components/ProfileInput";
import "../style/ChequeRequestModal.css";
import TextField from '../../customElement/component/TextField';
import TextArea from '../../customElement/component/TextArea';
import UploadButton from '../../customElement/component/UploadButton';
import logo from "../../../Assets/images/cashCallLogo.png"

function ChequeRequestModal({handleCloseBackDrop, data, handleDownload}) {
    const year = new Date().getFullYear();
    const departmentName = localStorage.getItem("departmentName");
    const date = new Date().toUTCString().split(" ");
    const dateToUTC = `${date[0] } ${date[1]} ${date[2]} ${date[3]}`;
    
    const downloadPDF = (id) =>{
        handleDownload(id);
    }

    const addCommaToAmount = (value) => {
        let tempValue = ""
            let tempArr = value.toString().split(",");
            
            if(tempArr.length > 1){
                for(let i=0; i<tempArr.length; i++){
                    tempValue += tempArr[i];
                }
            }
            else{
                tempValue = tempArr[0];
            }
        return parseInt(tempValue).toLocaleString('en-US');
    }
    
    
    return (
        <>
        {
            Object.keys(data).length !== 0 &&
            <>
                <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10`} >
                </div>
                <div className="absolute transform top-10 mb-24 -translate-x-2/4 left-2/4 w-2/4 py-8 rounded-xl overflow-auto bg-white z-20">
                    <div className="px-10 flex justify-between items-center pb-3">
                        <h1 className="text-color13 font-bold text-2xl">Cheque Request</h1>
                        <img src={logo} className='object-contain w-32 h-32' alt="logo" />
                    </div>
                    <div className="px-10">
                        <form>
                            <div className="flex flex-wrap">
                                <div className='w-full flex justify-end'>
                                    <TextField type="text" name="date" placeholder="" label="Date"  disabled={true} width="2/4" value={dateToUTC} />
                                    <TextField type="text" name="voucherNum" placeholder="" label="Voucher Num"  disabled={true} width="2/4" value={"Memo-" + year + "-0000" + data.voucherNo}/>
                                </div>
                                <TextField type="text" name="department" placeholder="" label="Department"  disabled={true} width="2/4" value={departmentName}/>
                                <TextField type="text" name="to" placeholder="" label="To" disabled={true} width="2/4" value={"Finance"}/>
                                <div className='w-full my-7'>
                                    <hr className='border-t-2' />
                                </div>
                                <TextArea width="full" name="reason" label="Purpose" row="2" disabled={true} value={data.purpose} />
                                <div className='w-full my-7'>
                                    <hr className='border-t-2'/>
                                </div>
                                <TextArea width="full" name="purpose" label="Sir / Madam," row="5" disabled={true} value={data.note} />
                                <div className='w-full my-7'>
                                    <hr className='border-t-2'/>
                                </div>
                                <div className='w-full font-normal text-lg pl-4'>
                                    <p style={{color:"#8E8EA1"}} className='underline '>Payment Details:</p>
                                </div>
                                <TextField type="text" name="beneficiaryName" placeholder="" label="Beneficiary's Name"  disabled={true} width="2/4"  value={data.beneficiaryName}/>
                                <TextField type="text" name="beneficiaryBank" placeholder="" label="Beneficiary's Bank" disabled={true} width="2/4" value={data.beneficiaryBank}/>
                                <TextField type="text" name="accountNo" placeholder="" label="Account Number" disabled={true} width="2/4"  value={data.accountNo}/>
                                <TextField type="text" name="amount" placeholder="#3000" label="Amount in Figure" disabled={true} width="2/4" value={`₦${addCommaToAmount(data.amount)}`}/>
                                <div className='w-full my-7'>
                                    <hr className='border-t-2'/>
                                </div>
                                <TextField type="text" name="preparedBy" placeholder="" label="Prepared by:" disabled={true} width="2/4" value={data.name}/>
                                <TextField type="text" name="approvedBy" placeholder="" label="Approved by:" disabled={true} width="2/4" value={""}/>
                                <div className='flex justify-evenly items-center w-full'>
                                    <div className="m-auto py-3 w-3/12">
                                        <button type="submit" onClick={handleCloseBackDrop} className="cheque-request-btn border w-full text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Close</button>
                                    </div> 
                                    <div className="m-auto py-3 w-3/12">
                                        <button type="button" onClick={downloadPDF.bind(null, data.requestID)} className="cheque-request-btn border w-full text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Download</button>
                                    </div> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        }
             
        </>
        
    )
}
export default ChequeRequestModal;
