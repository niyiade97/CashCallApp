import React, { useState } from 'react';
import ChequeRequest from "../../modules/chequerequest/components/ChequeRequest"
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"
import AlertModal from '../../modules/modal/component/AlertModal';
import Loader from '../../modules/customElement/component/Loader';
import ChequeRequestModal from '../../modules/modal/component/ChequeRequestModal';
import ReactDOM from "react-dom";
function ChequeRequestPage() {
    const [loading, setLoading] = useState(false);
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

    const handleCloseAlertModal = (text, status) => {
        setAlertModalIsActive(false);
    }
    const handlePreview = () => {
        setChequeModal(!chequeModal);
        setAlertModalIsActive(false);
    }
    return (
        <>
            {
                loading &&
                <Loader color="#FFFFFF" />
            }
            <UserDashboardContainer>

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
                        <ChequeRequestModal data={modalData} handleCloseBackDrop={handlePreview} />,
                        document.getElementById("chequeRequestModal")
                    )

                }
                <div className="w-full flex">
                    <ChequeRequest handleLoader={handleLoader} handleAlertModal={handleAlertModal} handlePreviewPage={handlePreviewPage} />
                </div>
            </UserDashboardContainer>
        </>
    )
}

export default ChequeRequestPage;
