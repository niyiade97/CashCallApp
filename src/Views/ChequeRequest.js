import React from 'react';
import DashboardContainer from '../Components/Dashboard/DashboardContainer';
import ChequeRequest from '../Components/Dashboard/ChequeRequest';

function ChequeRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <ChequeRequest />
            </div>
        </DashboardContainer>
    )
}

export default ChequeRequestPage;
