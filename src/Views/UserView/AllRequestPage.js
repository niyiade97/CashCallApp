import React, {useState} from 'react';
import AllRequest from '../../Components/Dashboard/AllRequest';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';
import Loader from '../../Components/Loader';

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
