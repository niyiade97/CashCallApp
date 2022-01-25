import React, { useState } from 'react'
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import Loader from "../../modules/customElement/component/Loader"
import Dashboard from "../../modules/dashboard/components/Dashboard"

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
