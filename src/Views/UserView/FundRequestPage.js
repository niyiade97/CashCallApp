import React from 'react'
import FundRequest from '../../Components/Dashboard/FundRequest';
import StatusIndicatorcontainer from '../../Components/Dashboard/StatusIndicatorContainer';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';


function FundRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex h-4/5">
                <FundRequest />
                <StatusIndicatorcontainer />
            </div>
        </UserDashboardContainer>
    )
}

export default FundRequestPage;
