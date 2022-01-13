import React, { useState } from 'react'
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import Loader from "../../Components/Loader";
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
