import React from 'react';
import Profile from "../../modules/profile/components/Profile";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";

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
