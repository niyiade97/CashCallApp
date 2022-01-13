import React from 'react'
import { useNavigate } from "react-router-dom"
import "../Components/Dashboard/AlertModal.css";

function DeleteModal({ icon, btnText, btnText2, btnActive, messageText1, messageText2, messageHeader, handleDeleteModal, handleDelete}) {
   
    return (
        <>
            <div className={`fixed top-0 w-full h-full bg-black opacity-50 z-10`} onClick={handleDeleteModal}>
            </div>
            <div className="alert-modal-container absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-480 h-330 rounded-xl bg-white z-20">
                <div className="alert-modal-text-container text-center w-50 font-bold m-auto">
                    <p className="text-xl py-6">{messageHeader}</p>
                    <p className="text-sm">{messageText1}</p>
                    <p className="text-xs">{messageText2}</p>
                </div>
            <div className="alert-modal-btn-container flex absolute justify-center items-center bottom-0 w-full py-2 rounded-b-xl">
                <div className="w-2/4 py-4 pl-4 pr-2">
                    <button  className="alert-btn1 w-full py-3 rounded-md" onClick={handleDeleteModal}>No</button>
                </div>
                <div className="w-2/4 py-4 pl-2 pr-4">
                    <button  className="alert-btn2 text-white w-full py-3 rounded-md" onClick={handleDelete}>YES</button>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default DeleteModal
