import React from 'react';
import DisbursedRequest from '../../Components/Dashboard/DisbursedRequest';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function DisbursedRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <DisbursedRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default DisbursedRequestPage;
