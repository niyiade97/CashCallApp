import React, {useState} from 'react';
import Loader from "../../modules/customElement/component/Loader";
import SupervisorRequest from "../../modules/requestStatus/components/SupervisorRequest"
import SupervisorDashboardContainer from '../../modules/dashboard/components/SupervisorDashboardContainer';

function SupervisorRequestPage() {
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
                <SupervisorRequest handleLoader={handleLoader}/>
            </div>
        </SupervisorDashboardContainer>
    )
}

export default SupervisorRequestPage;
