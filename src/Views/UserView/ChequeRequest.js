import React from 'react';
import ChequeRequest from '../../Components/Dashboard/ChequeRequest';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function ChequeRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full h-full flex">
                <ChequeRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default ChequeRequestPage;
