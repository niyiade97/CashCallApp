import React from 'react';
import PendingRequest from "../../modules/requestStatus/components/PendingRequest";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";

function PendingRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <PendingRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default PendingRequestPage
