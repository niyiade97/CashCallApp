import React from 'react';
import ChequeRequest from "../../modules/chequeRequest/components/ChequeRequest"
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"

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
