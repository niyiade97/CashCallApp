import React,{useState} from 'react';
import Loader from "../../modules/customElement/component/Loader";
import AlertModal from '../../modules/modal/component/AlertModal';
import ApprovalModal from "../../modules/modal/component/ApprovalModal";
import SupervisorOtpModal from "../../modules/modal/component/SupervisorOtpModal";
import SupervisorDashboardContainer from '../../modules/dashboard/components/SupervisorDashboardContainer';
import SupervisorPendingRequest from '../../modules/requestStatus/components/SupervisorPendingRequest';


function SupervisorPendingRequestPage() {
    const token = localStorage.getItem("superToken");
    const email = localStorage.getItem("superEmail");
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
        <SupervisorDashboardContainer>
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
            <SupervisorOtpModal handleCloseOtpModal={handleCloseOtptModal} requestID={data.requestID} handleLoader={handleLoader} handleAlertModal={handleAlertModal} approvalStatus={approvalStatus}/>
        }
        {
            modal &&
            <ApprovalModal token={token} email={email} data={data} handleBackDropOnClick={handleBackDropOnClick} handleClick={handleBackDropOnClick} loading={handleLoader} handleOtpModal={handleOtpModal}/>
        }
            <div className="w-full flex">
                <SupervisorPendingRequest handleClick={handleClick} handleLoader={handleLoader}/>
            </div>
        </SupervisorDashboardContainer>
    )
}

export default SupervisorPendingRequestPage;
