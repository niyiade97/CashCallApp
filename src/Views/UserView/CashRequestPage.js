import React from 'react'
import CashRequest from "../../Components/Dashboard/CashRequest"
import StatusIndicatorcontainer from '../../Components/Dashboard/StatusIndicatorContainer';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function CashRequestPage() {
    return (
        <UserDashboardContainer >
            <div className="w-full flex">
                <CashRequest />
            </div>
        </UserDashboardContainer>
    )
}

export default CashRequestPage;
