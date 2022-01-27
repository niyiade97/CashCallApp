import React from 'react'
import AdminFundRequest from "../../modules/fundRequest/component/AdminFundRequest"
import StatusIndicatorcontainer from "../../modules/dashboard/components/StatusIndicatorContainer"
import DashboardContainer from '../../modules/dashboard/components/DashboardContainer';

function AdminFundRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex h-full">
                <AdminFundRequest />
                <StatusIndicatorcontainer />
            </div>
        </DashboardContainer>
    )
}

export default AdminFundRequestPage;
