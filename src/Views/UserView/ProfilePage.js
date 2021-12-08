import React from 'react';
import Profile from '../../Components/Dashboard/Profile';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function ProfilePage() {
    return (
        <UserDashboardContainer>
            <div className="w-full">
                <Profile> 
               
                </Profile>
            </div>
        </UserDashboardContainer>
    )
}

export default ProfilePage;
