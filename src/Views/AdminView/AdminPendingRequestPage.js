import React from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import PendingRequest from "../../modules/requestStatus/components/PendingRequest"

function AdminPendingRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <PendingRequest />
            </div>
        </DashboardContainer>
    )
}

export default AdminPendingRequestPage
