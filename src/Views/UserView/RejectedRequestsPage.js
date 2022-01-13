import React from 'react';
import RejectedRequests from "../../modules/requestStatus/components/RejectedRequests";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";

function RejectedRequestsPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <RejectedRequests />
            </div>
        </UserDashboardContainer>
    )
}
export default RejectedRequestsPage;
