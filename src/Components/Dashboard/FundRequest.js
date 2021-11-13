import React from 'react';
import image from "../../Assets/images/fundRequestImg.png";
import { Link } from  "react-router-dom";
function FundRequest() {
    return (
        <div className="w-3/4 rounded-3xl h-full border-color7 border mb-10 ml-4 mr-2 mt-3 flex justify-center items-center"> 
            <div className="font-bold text-center">
                <h1 className="text-color4 text-4xl">Request for funds</h1>
                <img  src={image} alt="img" className="inline py-12" />
                <div>
                    <Link to="/cash-request">
                        <button to="/cash-request" className="bg-color2 text-white w-60 h-14 rounded-xl mx-2 text-lg">Cash</button>
                    </Link>
                    
                    <button className="bg-color2 text-white w-60 h-14 rounded-xl mx-2 text-lg">Cheque</button>
                </div>
            </div>
        </div>
    )
}

export default FundRequest;
