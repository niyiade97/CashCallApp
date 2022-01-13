import React from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import RejectedRequests from "../../modules/requestStatus/components/RejectedRequests"

function AdminRejectedRequestsPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <RejectedRequests />
            </div>
        </DashboardContainer>
    )
}
export default AdminRejectedRequestsPage;
