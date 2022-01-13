import React from 'react';
import image from "../../Assets/images/fundRequestImg.png";
import { Link } from  "react-router-dom";
import "./FundRequest.css";

function FundRequest() {
    return (
        <div className="fund-request-container"> 
            <div className="fund-request-inner-container">
                <h1 className="fund-request-h1">Request for funds</h1>
                <img  src={image} alt="img" />
                <div>
                    <Link to="/cash-request">
                        <button>Cash</button>
                    </Link>
                    <Link to="/cheque-request">
                        <button>Cheque</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FundRequest;
