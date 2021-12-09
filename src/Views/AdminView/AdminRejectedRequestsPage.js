import React from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import RejectedRequests from '../../Components/Dashboard/RejectedRequests';

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
