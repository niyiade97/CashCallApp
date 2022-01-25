import React,{useState} from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import RejectedRequests from "../../modules/requestStatus/components/RejectedRequests"
import Loader from "../../modules/customElement/component/Loader";

function AdminRejectedRequestsPage() {
    const  [ loading ,setLoading ] = useState(false);

    const handleLoader = (state) =>{
        setLoading(state);
    }
    return (
        <DashboardContainer>
        {
            loading &&
            <Loader color="#FFFFFF" />
        }
            <div className="w-full flex">
                <RejectedRequests handleLoader={handleLoader}/>
            </div>
        </DashboardContainer>
    )
}
export default AdminRejectedRequestsPage;
