import React, { useState } from 'react';
import SupervisorCashRequest from "../../modules/cashrequest/components/SupervisorCashRequest";
import SupervisorDashboardContainer from "../../modules/dashboard/components/SupervisorDashboardContainer";
import Loader from "../../modules/customElement/component/Loader"
import AlertModal from "../../modules/modal/component/AlertModal"
import { useNavigate } from "react-router-dom";

function SupervisorCashRequestPage() {
    const userId = localStorage.getItem("superId");
    const token = localStorage.getItem("superToken");
    const departmentID = localStorage.getItem("superDepartmentID");
    const firstName = localStorage.getItem("superFirstName");
    const lastName = localStorage.getItem("superLastName");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
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
        navigate("/supervisor-fund-request");
    }

    return (
        <>
            {
                loading &&
                <Loader color="#FFFFFF" />
            }
            <SupervisorDashboardContainer >
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
                    <SupervisorCashRequest
                        handleLoader={handleLoader} 
                        handleAlertModal={handleAlertModal}
                        userId={userId}
                        token={token}
                        departmentID={departmentID}
                        fullName={lastName + " " + firstName}
                         />
                </div>
            </SupervisorDashboardContainer>
        </>
    )
}

export default SupervisorCashRequestPage;
