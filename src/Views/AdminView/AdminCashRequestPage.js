import React from 'react'
import CashRequest from "../../Components/Dashboard/CashRequest"
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import StatusIndicatorcontainer from '../../Components/Dashboard/StatusIndicatorContainer';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function AdminCashRequestPage() {
    return (
        <DashboardContainer >
            <div className="w-full flex">
                <CashRequest />
            </div>
        </DashboardContainer>
    )
}


export default AdminCashRequestPage
