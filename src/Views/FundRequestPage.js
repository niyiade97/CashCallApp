import React from 'react'
import DashboardContainer from '../Components/Dashboard/DashboardContainer';
import FundRequest from '../Components/Dashboard/FundRequest';
import StatusIndicatorcontainer from '../Components/Dashboard/StatusIndicatorContainer';


function FundRequestPage() {
    return (
        <DashboardContainer headerText="Fund Request">
            <div className="w-full flex h-4/5">
                <FundRequest />
                <StatusIndicatorcontainer />
            </div>
        </DashboardContainer>
    )
}

export default FundRequestPage;
