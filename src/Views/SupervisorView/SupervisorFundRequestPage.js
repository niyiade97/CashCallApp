import React from 'react'
import SupervisorFundRequest from "../../modules/fundRequest/component/SupervisorFundRequest"
import StatusIndicatorcontainer from "../../modules/dashboard/components/StatusIndicatorContainer"
import SupervisorDashboardContainer from '../../modules/dashboard/components/SupervisorDashboardContainer';

function SupervisorFundRequestPage() {
    return (
        <SupervisorDashboardContainer>
            <div className="w-full flex h-full">
                <SupervisorFundRequest />
                <StatusIndicatorcontainer />
            </div>
        </SupervisorDashboardContainer>
    )
}

export default SupervisorFundRequestPage;
