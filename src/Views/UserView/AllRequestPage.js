import React from 'react';
import AllRequest from '../../Components/Dashboard/AllRequest';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function AllRequestPage() {
    return (
        <UserDashboardContainer>
            <div className="w-full flex">
                <AllRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default AllRequestPage;
