import React from 'react';
import ApprovedRequest from "../../modules/requestStatus/components/ApprovedRequest"
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"

function ApprovedRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <ApprovedRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default ApprovedRequestPage;
