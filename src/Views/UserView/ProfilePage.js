import React from 'react';
import Profile from '../../Components/Dashboard/Profile';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function ProfilePage() {
    const handlePasswordModal = () =>{
        
    }
    return (
        <UserDashboardContainer>
            <div className="w-full">
                <Profile handlePasswordModal={handlePasswordModal}> 
               
                </Profile>
            </div>
        </UserDashboardContainer>
    )
}

export default ProfilePage;
