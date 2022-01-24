import React from 'react'
import "../style/AlertModal.css";
function AlertModal({ icon, btnText, handlePreview, btnStatus, messageText1, messageText2, messageHeader, handleClick, indexValue, status }) {
      
    
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10`} onClick={handleClick}>
            </div>
            <div className="alert-modal-container fixed transform top-2/4 left-2/4 w-480 h-330 rounded-xl bg-white z-20">
            <div  className="alert-modal-inner-container w-36 h-36 rounded-full mx-auto mt-72">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={ status ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12" } />
                </svg>
            </div>
            <div className="alert-modal-text-container text-center w-50 font-bold m-auto">
                <p className="text-xl py-6">{messageHeader}</p>
                <p className="text-sm">{messageText1}</p>
                <p className="text-xs">{messageText2}</p>
            </div>
            <div className="alert-modal-btn-container flex absolute justify-center items-center bottom-0 w-full py-2 rounded-b-xl">
                <div className="w-2/4 py-4 pl-2 pr-4">
                    <button  className="alert-btn2 text-green-50 w-full py-4 rounded-md border-2 hover:bg-white hover:text-blue-900 hover:border-blue-900" onClick={handleClick}>OK</button>
                </div>
                {
                    btnStatus &&
                    <div className="w-2/4 py-4 pl-4 pr-2">
                        <button  className="alert-btn1 w-full py-3 rounded-md" onClick={handlePreview}>Preview</button>
                    </div>
                }
                
            </div>
        </div>
        </>
        
    )
}

export default AlertModal
