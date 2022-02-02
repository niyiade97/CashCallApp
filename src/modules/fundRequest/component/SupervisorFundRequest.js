import React from 'react';
import image from "../../../Assets/images/fundRequestImg.png";
import { Link } from  "react-router-dom";
import "../style/FundRequest.css";

function AdminFundRequest() {
    return (
        <div className="fund-request-container"> 
            <div className="fund-request-inner-container">
                <h1 className="fund-request-h1">Request for funds</h1>
                <img  src={image} alt="img" />
                <div>
                    <Link to="/supervisor-cash-request">
                        <button>Cash</button>
                    </Link>
                    <Link to="/supervisor-cheque-request">
                        <button>Cheque</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminFundRequest;
