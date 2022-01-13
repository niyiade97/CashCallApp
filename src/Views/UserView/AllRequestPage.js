import React, {useState} from 'react';
import AllRequest from "../../modules/requestStatus/components/AllRequest";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"
import Loader from "../../modules/customElement/component/Loader";

function AllRequestPage() {
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
                <AllRequest handleLoader={handleLoader}/>
            </div>
        </UserDashboardContainer>
    )
}

export default AllRequestPage;
