import React from 'react'
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import FundRequest from '../../Components/Dashboard/FundRequest';
import StatusIndicatorcontainer from '../../Components/Dashboard/StatusIndicatorContainer';
import{ Link } from "react-router-dom"
import image from "../../Assets/images/fundRequestImg.png";
function AdminFundRequestPage() {
    return (
        <DashboardContainer>
            <div className="w-full flex h-4/5">
            <div className="w-3/4 rounded-3xl h-full border-color7 border mb-10 ml-4 mr-2 mt-3 flex justify-center items-center"> 
            <div className="font-bold text-center">
                <h1 className="text-color4 text-4xl">Request for funds</h1>
                <img  src={image} alt="img" className="inline py-12" />
                <div>
                    <Link to="/admin-cash-request">
                        <button to="/cash-request" className="bg-color2 text-white w-60 h-14 rounded-xl mx-2 text-lg">Cash</button>
                    </Link>
                    <Link to="/admin-cheque-request">
                        <button className="bg-color2 text-white w-60 h-14 rounded-xl mx-2 text-lg">Cheque</button>
                    </Link>
                </div>
            </div>
        </div>
                <StatusIndicatorcontainer />
            </div>
        </DashboardContainer>
    )
}

export default AdminFundRequestPage;
