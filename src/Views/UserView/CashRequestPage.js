import React, { useState } from 'react';
import CashRequest from "../../Components/User/CashRequest/CashRequest";
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';
import Loader from '../../Components/Loader';
import AlertModal from '../../Components/Dashboard/AlertModal';

function CashRequestPage() {
    const  [ loading ,setLoading ] = useState(false);
    const [ alertModalIsActive, setAlertModalIsActive ] = useState(false);
    const handleLoader = (state) =>{
        setLoading(state);
    }
    const [ message, setMessage ] = useState({
        msg: "",
        status: false
    })
   
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
        <UserDashboardContainer >
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
                <CashRequest handleLoader={handleLoader} handleAlertModal={handleAlertModal}/>
            </div>
        </UserDashboardContainer>
        </>
    )
}

export default CashRequestPage;
