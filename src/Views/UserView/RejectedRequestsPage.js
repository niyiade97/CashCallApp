import React from 'react';
import RejectedRequests from '../../Components/Dashboard/RejectedRequests';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function RejectedRequestsPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <RejectedRequests />
            </div>
        </UserDashboardContainer>
    )
}
export default RejectedRequestsPage;
