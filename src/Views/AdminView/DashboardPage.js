import React, { useState } from 'react'
import CashRequest from "../../Components/Dashboard/CashRequest"
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import StatusIndicatorcontainer from '../../Components/Dashboard/StatusIndicatorContainer';
import Loader from "../../Components/Loader";
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';
import Dashboard from '../../Components/Dashboard/Dashboard';

function DashboardPage() {
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
           
        <div className="w-full flex h-full">
            <Dashboard onLoad={handleOnLoad} />
        </div>
        </DashboardContainer>
    )
}


export default DashboardPage;
