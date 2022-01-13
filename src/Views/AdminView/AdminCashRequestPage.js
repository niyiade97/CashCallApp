import React, { useState } from 'react'
import CashRequest from "../../Components/User/CashRequest/CashRequest";
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import StatusIndicatorcontainer from '../../Components/Dashboard/StatusIndicatorContainer';
import Loader from "../../Components/Loader";
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';


function AdminCashRequestPage() {
    const [ loading, setLoader ] = useState(false);

    const handleOnLoad = (state) =>{
        setLoader(state);
    }

    return (
        <DashboardContainer >
        {
            loading &&
            <Loader />
        }
           
        <div className="w-full flex">
            <CashRequest onLoad={handleOnLoad} />
        </div>
        </DashboardContainer>
    )
}


export default AdminCashRequestPage
