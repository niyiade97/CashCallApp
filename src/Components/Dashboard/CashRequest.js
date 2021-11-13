import React from 'react'
import BackButton from '../BackButton'

function CashRequest() {
    return (
        <div className="w-3/4 rounded-3xl h-full border-color7 border mb-10 ml-4 mr-2 mt-3 flex justify-center items-center relative"> 
            <BackButton bgColor="color8" color="white" />
            <div className="font-bold text-center">
                <h1 className="text-color4 text-4xl">Cash Request Funds</h1>
                <div className="text-center text-color4 my-10">
                    <p className="text-lg font-normal">Request Amount</p>
                    <input className="rounded-full w-full text-color4 mt-3 h-14 px-4 text-center bg-color12" type="text" name="password" placeholder="#123-456789" />
                </div>
                <div>
                    <button className="bg-color2 text-white w-60 h-14 rounded-xl mx-2 text-lg">Cash</button>
                </div>
            </div>
        </div>
    )
}

export default CashRequest
