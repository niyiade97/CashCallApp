import React from 'react'
import FundRequest from '../../Components/Dashboard/FundRequest';
import StatusIndicatorcontainer from '../../Components/Dashboard/StatusIndicatorContainer';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';


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
