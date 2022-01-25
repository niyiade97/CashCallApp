import React,{useState} from 'react';
import AllRequest from "../../modules/requestStatus/components/AllRequest"
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import Loader from "../../modules/customElement/component/Loader";

function AdminRequestPage() {
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
                <AllRequest  handleLoader={handleLoader} />
            </div>
        </DashboardContainer>
    )
}


export default AdminRequestPage
