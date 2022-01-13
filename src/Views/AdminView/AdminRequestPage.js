import React from 'react';
import ApprovedRequest from "../../modules/requestStatus/components/ApprovedRequest"
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"

function AdminRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <ApprovedRequest />
            </div>
        </DashboardContainer>
    )
}


export default AdminRequestPage
