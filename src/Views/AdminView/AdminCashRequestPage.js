import React, { useState } from 'react';
import CashRequest from "../../modules/cashrequest/components/CashRequest";
import DashboardContainer from '../../modules/dashboard/components/DashboardContainer';
import Loader from "../../modules/customElement/component/Loader"
import AlertModal from "../../modules/modal/component/AlertModal"
import { useNavigate } from "react-router-dom";

function AdminCashRequestPage() {
    const userId = localStorage.getItem("adminId");
    const token = localStorage.getItem("adminToken");
    const departmentID = localStorage.getItem("adminDepartmentID");
    const firstName = localStorage.getItem("adminFirstName");
    const lastName = localStorage.getItem("adminLastName");
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
        navigate("/admin-fund-request");
    }
    return (
        <>
            {
                loading &&
                <Loader color="#FFFFFF" />
            }
            <DashboardContainer >
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
                        path="admin-fund-request"
                         />
                </div>
            </DashboardContainer>
        </>
    )
}

export default AdminCashRequestPage;
