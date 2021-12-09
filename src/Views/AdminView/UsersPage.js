import React from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import Users from '../../Components/User/Users';

function UsersPage(props) {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <Users />
            </div>
        </DashboardContainer>
    )
}

export default UsersPage;
