import React from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import DisbursedRequest from "../../modules/requestStatus/components/DisbursedRequest"

function AdminDisbursedRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <DisbursedRequest />
            </div>
        </DashboardContainer>
    )
}

export default AdminDisbursedRequestPage;
