import React from 'react';
import DisbursedRequest from "../../modules/requestStatus/components/DisbursedRequest";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"

function DisbursedRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <DisbursedRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default DisbursedRequestPage;
