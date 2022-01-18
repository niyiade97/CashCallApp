import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";


function Approved({ requestData }) {
    return (
        requestData.map((request) =>{
            return(
                <tr className="border-1.5 hover:bg-color20 cursor-pointer">
                    <td className="flex py-4 pl-10">
                        <img className="w-11 h-11 rounded-full mr-5" src={request.image} alt="img"/>
                        <div>
                            <p className="font-semibold text-sm text-color17 mb-1">{request.cashPurpose}</p>
                            <p className="font-normal text-xs text-color18">{request.name}</p>
                        </div>
                    </td>
                    <td className="py-4">
                        <p className="font-semibold text-sm text-color17">{request.amount}</p>
                        <p className="font-normal text-xs text-color18">{request.requestForm}</p>
                    </td>
                    <td className="py-4">
                        <p className="font-semibold text-sm text-color17">{request.date}</p>
                        <p className="font-normal text-xs text-color14">{request.time}</p>
                    </td>
                    <td className="py-4">
                        <div className="flex items-center justify-between pr-14">
                            <button className="rounded-full bg-color9 text-white text-xs font-bold py-1 px-3">Accepted</button>
                            <i className="text-color14"><BsThreeDotsVertical /></i>
                        </div>
                    </td>
                    </tr>
            )
        })
    )
}

export default Approved;
