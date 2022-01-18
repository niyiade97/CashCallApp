import React,{useState} from 'react';
import AllRequest from "../../modules/requestStatus/components/AllRequest"
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import Loader from "../../modules/customElement/component/Loader";
import ApprovalModal from "../../modules/modal/component/ApprovalModal";

function AdminRequestPage() {
    const  [ loading ,setLoading ] = useState(false);
    const  [ modal ,setModal ] = useState(false);
    const  [ data ,setData ] = useState({});
    const handleLoader = (state) =>{
        setLoading(state);
    }
    const handleBackDropOnClick = () =>{
        setModal(!modal);
    }
    const handleClick = (id, request) =>{
        setData(request);
        setModal(!modal);
    }
    return (
        <DashboardContainer>
         {
            loading &&
            <Loader color="#FFFFFF" />
        }
        {
            modal &&
            <ApprovalModal data={data} handleBackDropOnClick={handleBackDropOnClick} handleClick={handleBackDropOnClick} loading={handleLoader}/>
        }
            
            <div className="w-full flex">
                <AllRequest handleClick={handleClick} handleLoader={handleLoader}/>
            </div>
        </DashboardContainer>
    )
}


export default AdminRequestPage
