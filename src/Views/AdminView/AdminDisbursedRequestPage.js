import React from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import DisbursedRequest from '../../Components/Dashboard/DisbursedRequest';

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
