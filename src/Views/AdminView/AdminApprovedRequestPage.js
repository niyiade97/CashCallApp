import React,{useState} from 'react';
import ApprovedRequest from "../../modules/requestStatus/components/ApprovedRequest";
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import Loader from "../../modules/customElement/component/Loader";

function AdminApprovedRequestPage() {
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
                <ApprovedRequest handleLoader={handleLoader}/>
            </div>
        </DashboardContainer>
    )
}


export default AdminApprovedRequestPage
