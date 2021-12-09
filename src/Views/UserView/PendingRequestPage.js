import React from 'react';
import PendingRequest from '../../Components/Dashboard/PendingRequest';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function PendingRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <PendingRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default PendingRequestPage
