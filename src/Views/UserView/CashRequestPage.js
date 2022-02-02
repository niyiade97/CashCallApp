import React, { useState } from 'react';
import CashRequest from "../../modules/cashrequest/components/CashRequest";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"
import Loader from "../../modules/customElement/component/Loader"
import AlertModal from "../../modules/modal/component/AlertModal"
import { useNavigate } from "react-router-dom";

function CashRequestPage() {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userToken");
    const departmentID = localStorage.getItem("userDepartmentID");
    const firstName = localStorage.getItem("userFirstName");
    const lastName = localStorage.getItem("userLastName");
    const [loading, setLoading] = useState(false);
    const [alertModalIsActive, setAlertModalIsActive] = useState(false);
    const handleLoader = (state) => {
        setLoading(state);
    }
    const [message, setMessage] = useState({
        msg: "",
        status: false
    })

    const handleAlertModal = (text, status) => {
        setAlertModalIsActive(true);
        setMessage({
            msg: text,
            status: status
        })
    }
    const handleCloseAlertModal = (text, status) => {
        setAlertModalIsActive(false);
        navigate("/fund-request")
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
                    <CashRequest 
                        handleLoader={handleLoader} 
                        handleAlertModal={handleAlertModal}
                        userId={userId}
                        token={token}
                        departmentID={departmentID}
                        fullName={firstName + " " + lastName}
                         />
                </div>
            </UserDashboardContainer>
        </>
    )
}

export default CashRequestPage;
