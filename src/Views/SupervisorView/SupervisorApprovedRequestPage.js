import React, { useState } from 'react';
import SupervisorDashboardContainer from "../../modules/dashboard/components/SupervisorDashboardContainer"
import Loader from "../../modules/customElement/component/Loader";
import SupervisorApprovedRequest from '../../modules/requestStatus/components/SupervisorApprovedRequest';
function SupervisorApprovedRequestPage() {
    const  [ loading ,setLoading ] = useState(false);

    const handleLoader = (state) =>{
        setLoading(state);
    }
    return (
        <SupervisorDashboardContainer>
        {
            loading &&
            <Loader color="#FFFFFF" />
        }
            <div className="w-full flex">
                <SupervisorApprovedRequest handleLoader={handleLoader} />
            </div>
        </SupervisorDashboardContainer>
    )
}

export default SupervisorApprovedRequestPage;
