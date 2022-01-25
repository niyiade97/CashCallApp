import React, {useState} from 'react';
import UserRequest from "../../modules/requestStatus/components/UserRequest";
import UserDashboardContainer from "../../modules/userManagement/components/UserDashboardContainer"
import Loader from "../../modules/customElement/component/Loader";
import AddUser from '../../modules/userManagement/components/AddUser';

function AllRequestPage() {
    const  [ loading ,setLoading ] = useState(false);
    const  [ modal ,setModal ] = useState(false);
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
                <UserRequest handleLoader={handleLoader}/>
            </div>
        </UserDashboardContainer>
    )
}

export default AllRequestPage;
