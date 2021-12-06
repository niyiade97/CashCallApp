import React from 'react';
import AllRequest from '../Components/Dashboard/AllRequest';
import DashboardContainer from '../Components/Dashboard/DashboardContainer';

function AllRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <AllRequest />
            </div>
        </DashboardContainer>
    )
}

export default AllRequestPage;
