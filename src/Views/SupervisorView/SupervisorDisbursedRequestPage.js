import React, { useState } from 'react';
import SupervisorDashboardContainer from "../../modules/dashboard/components/SupervisorDashboardContainer"
import Loader from "../../modules/customElement/component/Loader";
import SupervisorDisbursedRequest from '../../modules/requestStatus/components/SupervisorDisbursedRequest';

function SupervisorDisbursedRequestPage() {
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
                <SupervisorDisbursedRequest handleLoader={handleLoader} />
            </div>
        </SupervisorDashboardContainer>
    )
}

export default SupervisorDisbursedRequestPage;
