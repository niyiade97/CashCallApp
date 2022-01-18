import React,{useState} from 'react';
import UserRejectedRequest from "../../modules/requestStatus/components/UserRejectedRequest";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer";
import Loader from "../../modules/customElement/component/Loader";
function RejectedRequestsPage() {
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
                <UserRejectedRequest handleLoader={handleLoader}/>
            </div>
        </UserDashboardContainer>
    )
}
export default RejectedRequestsPage;
