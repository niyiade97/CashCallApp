import React from 'react';
import ApprovedRequest from '../../Components/Dashboard/ApprovedRequest';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';

function AdminApprovedRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <ApprovedRequest />
            </div>
        </DashboardContainer>
    )
}


export default AdminApprovedRequestPage
