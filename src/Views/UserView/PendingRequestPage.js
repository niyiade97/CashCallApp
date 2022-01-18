import React,{useState} from 'react';
import UserPendingRequest from "../../modules/requestStatus/components/UserPendingRequest";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";
import Loader from "../../modules/customElement/component/Loader";
function PendingRequestPage() {
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
                <UserPendingRequest handleLoader={handleLoader}/>
            </div>
        </UserDashboardContainer>
    )
}

export default PendingRequestPage
