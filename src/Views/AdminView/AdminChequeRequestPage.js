import React from 'react';
import ChequeRequest from '../../Components/Dashboard/ChequeRequest';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';

function AdminChequeRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <ChequeRequest />
            </div>
        </DashboardContainer>
    )
}

export default AdminChequeRequestPage;
