import React from 'react'
import DashboardContainer from '../Components/Dashboard/DashboardContainer';
import CashRequest from '../Components/Dashboard/CashRequest';
import StatusIndicatorcontainer from '../Components/Dashboard/StatusIndicatorContainer';

function CashRequestPage() {
    return (
        <DashboardContainer headerText="Cash Request">
            <div className="w-full flex h-4/5">
                <CashRequest />
                <StatusIndicatorcontainer />
            </div>
        </DashboardContainer>
    )
}

export default CashRequestPage;
