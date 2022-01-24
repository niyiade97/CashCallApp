import React,{useState} from 'react';
import SupervisorDeclinedRequest from "../../modules/requestStatus/components/SupervisorDeclinedRequest";
import Loader from "../../modules/customElement/component/Loader";
import SupervisorDashboardContainer from '../../modules/dashboard/components/SupervisorDashboardContainer';

function SupervisorRejectedRequestsPage() {
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
                <SupervisorDeclinedRequest handleLoader={handleLoader}/>
            </div>
        </SupervisorDashboardContainer>
    )
}
export default SupervisorRejectedRequestsPage;
