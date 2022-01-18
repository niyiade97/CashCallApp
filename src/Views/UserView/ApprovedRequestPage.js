import React, { useState } from 'react';
import UserApprovedRequest from "../../modules/requestStatus/components/UserApprovedRequest"
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"
import Loader from "../../modules/customElement/component/Loader";
function ApprovedRequestPage() {
    const  [ loading ,setLoading ] = useState(false);

    const handleLoader = (state) =>{
        setLoading(state);
    }
    return (
        <UserDashboardContainer>
        {
            loading &&
            <Loader color="#FFFFFF" />
        }
            <div className="w-full flex">
                <UserApprovedRequest handleLoader={handleLoader} />
            </div>
        </UserDashboardContainer>
    )
}

export default ApprovedRequestPage;
