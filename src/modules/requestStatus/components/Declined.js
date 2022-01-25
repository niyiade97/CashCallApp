import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

function Declined({requestData}) {
    return (
        requestData.map((request) =>{
            const date = new Date(request.dateCreated).toUTCString().split(" ");
                const dateToUTC = `${date[0] } ${date[1]} ${date[2]} ${date[3]}`;
            return(
                <tr className="border-1.5 hover:bg-color20 cursor-pointer">
                    <td className="flex py-4 pl-10">
                        <img className="w-11 h-11 rounded-full mr-5" src={request.imageRef} alt="img"/>
                        <div>
                            <p className="font-semibold text-sm text-color17 mb-1">{request.purpose.toUpperCase()}</p>
                            <p className="font-normal text-xs text-color18">{""}</p>
                        </div>
                    </td>
                    <td className="py-4">
                        <p className="font-semibold text-sm text-color17">{request.amount}</p>
                        <p className="font-normal text-xs text-color18">{request.type ? request.type + " Request" : "" }</p>
                    </td>
                    <td className="py-4">
                        <p className="font-semibold text-sm text-color17">{dateToUTC}</p>
                        <p className="font-normal text-xs text-color14">{new Date(request.dateCreated).toLocaleTimeString()}</p>
                    </td>
                    <td className="py-4">
                        <div className="flex items-center justify-between pr-14">
                            <button className="rounded-full bg-red-500 text-white text-xs font-bold py-1 px-3">Declined</button>
                            <i className="text-color14"><BsThreeDotsVertical /></i>
                        </div>
                    </td>
                    </tr>
            )
        })
    )
}

export default Declined
