import React from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import Profile from '../../Components/Dashboard/Profile';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function AdminProfilePage() {
    return (
        <DashboardContainer>
            <div className="w-full">
                <Profile> 
               
                </Profile>
            </div>
        </DashboardContainer>
    )
}

export default AdminProfilePage;
