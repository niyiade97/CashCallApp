import React from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import PendingRequest from '../../Components/Dashboard/PendingRequest';

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
