import React,{ useState } from 'react';
import ChequeRequest from "../../modules/chequeRequest/components/ChequeRequest"
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"
import AlertModal from '../../modules/modal/component/AlertModal';
import Loader from '../../modules/customElement/component/Loader';

function ChequeRequestPage() {
    const  [ loading ,setLoading ] = useState(false);
    const [ alertModalIsActive, setAlertModalIsActive ] = useState(false);
    const [ message, setMessage ] = useState({
        msg: "",
        status: false
    })
    
    const handleLoader = (state) =>{
        setLoading(state);
    }
    const handleAlertModal = (text, status) =>{
        setAlertModalIsActive(true);
        setMessage({
            msg: text,
            status: status
        })
    }

    const handleCloseAlertModal = (text, status) =>{
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
               
            />
        }
            <div className="w-full flex">
                <ChequeRequest handleLoader={handleLoader} handleAlertModal={handleAlertModal}/>
            </div>
        </UserDashboardContainer>
        </>
    )
}

export default ChequeRequestPage;
