import React from 'react'
import FundRequest from "../../modules/fundRequest/component/FundRequest"
import StatusIndicatorcontainer from "../../modules/dashboard/components/StatusIndicatorContainer"
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";

function FundRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex h-full">
                <FundRequest />
                <StatusIndicatorcontainer />
            </div>
        </UserDashboardContainer>
    )
}

export default FundRequestPage;
