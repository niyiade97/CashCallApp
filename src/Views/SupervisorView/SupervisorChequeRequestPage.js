import React, { useState } from 'react';
import ChequeRequest from "../../modules/chequerequest/components/ChequeRequest"
import AlertModal from '../../modules/modal/component/AlertModal';
import Loader from '../../modules/customElement/component/Loader';
import ChequeRequestModal from '../../modules/modal/component/ChequeRequestModal';
import axios from "axios";
import ReactDOM from "react-dom";
import { saveAs } from 'file-saver';
import { useNavigate } from "react-router-dom";
import SupervisorDashboardContainer from '../../modules/dashboard/components/SupervisorDashboardContainer';

function ChequeRequestPage() {
    const navigate = useNavigate();
    const userId = localStorage.getItem("superId");
    const token = localStorage.getItem("superToken");
    const departmentID = localStorage.getItem("superDepartmentID");
    const firstName = localStorage.getItem("superFirstName");
    const lastName = localStorage.getItem("superLastName");
    const [loading, setLoading] = useState(false);
    const baseURL = process.env.REACT_APP_BASE_URL;
    const pdfDownloadAPI = process.env.REACT_APP_PDF_DOWNLOAD;
    const [alertModalIsActive, setAlertModalIsActive] = useState(false);
    const [message, setMessage] = useState({
        msg: "",
        status: false
    })
    const [modalData, setModalData] = useState({});
    const [chequeModal, setChequeModal] = useState(false);

    const handlePreviewPage = (state, data) => {
        setModalData(data);
    }

    const handleLoader = (state) => {
        setLoading(state);
    }
    const handleAlertModal = (text, status) => {
        setAlertModalIsActive(true);
        setMessage({
            msg: text,
            status: status
        })
    }
    const downloadPDF = (id) =>{
        axios({
            method: 'post',
            responseType: 'blob', //Force to receive data in a Blob Format
            url:  baseURL + pdfDownloadAPI +id,
            headers: {"Authorization" : `Bearer ${token}`} 
        })
            .then(res => {
                let tempFileName ="chquerequest"
                let extension = 'pdf';
                let fileName = `${tempFileName}.${extension}`;
    
                const blob = new Blob([res.data], {
                    type: 'application/pdf'
                })
    
                saveAs(blob, fileName);
                navigate("/supervisor-fund-request");
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const handleCloseAlertModal = (text, status) => {
        setAlertModalIsActive(false);
        navigate("/supervisor-fund-request");
    }
    const handleClosePreview = () =>{
        setChequeModal(false);
        navigate("/supervisor-fund-request");
    }
    const handlePreview = () => {
        setChequeModal(true);
        setAlertModalIsActive(false);
    }
    return (
        <>
            {
                loading &&
                <Loader color="#FFFFFF" />
            }
            <SupervisorDashboardContainer>

                {
                    alertModalIsActive &&
                    <AlertModal
                        messageHeader={message.msg}
                        messageText1=""
                        messageText2=""
                        status={message.status}
                        handleClick={handleCloseAlertModal}
                        btnStatus={true}
                        handlePreview={handlePreview}
                    />
                }
                {
                    chequeModal &&
                    ReactDOM.createPortal(
                        <ChequeRequestModal data={modalData} handleCloseBackDrop={handleClosePreview} handleDownload={downloadPDF} />,
                        document.getElementById("chequeRequestModal")
                    )

                }
                <div className="w-full flex">
                    <ChequeRequest 
                        handleLoader={handleLoader} 
                        handleAlertModal={handleAlertModal} 
                        handlePreviewPage={handlePreviewPage} 
                        userId={userId}
                        token={token}
                        departmentID={departmentID}
                        fullName={firstName + " " + lastName}
                    />
                </div>
            </SupervisorDashboardContainer>
        </>
    )
}

export default ChequeRequestPage;
