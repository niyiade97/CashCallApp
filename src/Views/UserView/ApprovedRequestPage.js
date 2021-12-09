import React from 'react';
import ApprovedRequest from '../../Components/Dashboard/ApprovedRequest';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function ApprovedRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <ApprovedRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default ApprovedRequestPage;
