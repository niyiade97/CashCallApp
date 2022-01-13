import React from 'react';
import ChequeRequest from "../../Components/User/ChequeRequest/ChequeRequest";
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function ChequeRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <ChequeRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default ChequeRequestPage;
