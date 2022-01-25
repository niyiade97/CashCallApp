import React,{useState} from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import PendingRequest from "../../modules/requestStatus/components/PendingRequest"
import Loader from "../../modules/customElement/component/Loader";
import ApprovalModal from "../../modules/modal/component/ApprovalModal";
import OtpModal from "../../modules/modal/component/OtpModal";
import AlertModal from '../../modules/modal/component/AlertModal';

function AdminPendingRequestPage() {
    const token = localStorage.getItem("adminToken");
    const userId = localStorage.getItem("adminId");
    const  [ loading ,setLoading ] = useState(false);
    const  [ modal ,setModal ] = useState(false);
    const  [ otpModal ,setOtpModal ] = useState(false);
    const  [ data ,setData ] = useState({});
    const [ alertModal, setAlertModal ] = useState(false);
    const [ message, setMessage ] = useState({
        msg: "",
        status: false
    })
    const [ approvalStatus, setapprovalStatus ] = useState(false);
    
    const handleLoader = (state) =>{
        setLoading(state);
    }
    const handleBackDropOnClick = () =>{
        setModal(!modal);
    }
    const handleClick = (request) =>{
        setData(request);
        setModal(!modal);
    }
    const handleOtpModal = (status) =>{
        setapprovalStatus(status);
        setModal(false);
        setOtpModal(!otpModal);
    }
    const handleAlertModal = (message, state) =>{
        setOtpModal(false);
        setMessage({
            msg:message,
            status: state
        })
        setAlertModal(true);
    }

    const handleCloseAlertModal = () =>{
        setAlertModal(false);
    }
    const handleCloseOtptModal = () =>{
        setOtpModal(false);
    }
    return (
        <DashboardContainer>
        {
            alertModal &&
            <AlertModal
                messageHeader={message.msg}
                messageText1=""
                messageText2=""
                status={message.status}
                handleClick={handleCloseAlertModal}
               
            />
        }
        {
            loading &&
            <Loader color="#FFFFFF" />
        }
        {
            otpModal &&
            <OtpModal token={token} email={userId} handleCloseOtpModal={handleCloseOtptModal} requestID={data.requestID} handleLoader={handleLoader} handleAlertModal={handleAlertModal} approvalStatus={approvalStatus}/>
        }
        {
            modal &&
            <ApprovalModal data={data} handleBackDropOnClick={handleBackDropOnClick} handleClick={handleBackDropOnClick} loading={handleLoader} handleOtpModal={handleOtpModal}/>
        }
            <div className="w-full flex">
                <PendingRequest handleClick={handleClick} handleLoader={handleLoader}/>
            </div>
        </DashboardContainer>
    )
}

export default AdminPendingRequestPage
