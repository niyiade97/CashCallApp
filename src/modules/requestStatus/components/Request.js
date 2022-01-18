import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import "../style/AllRequest.css";
import profileImage from "../../../Assets/images/profileImage.png";

function Request({ requestData }) {
    const name = localStorage.getItem("name");
    console.log(requestData);
    return (
            requestData.map((request) =>{
                return(
                    <tr className="request-wrapper border-2 hover:bg-color20 cursor-pointer">
                        <td className="flex py-4 pl-10">
                            <img className="w-11 h-11 rounded-full mr-5 object-cover" src={request.imageRef} alt="img"/>
                            <div>
                                <p className="font-semibold text-sm text-color17 mb-1">{request.purpose.toUpperCase()}</p>
                                <p className="font-normal text-xs text-color18">{request.name}</p>
                            </div>
                        </td>
                        <td className="py-4">
                            <p className="font-semibold text-sm text-color17">{request.amount}</p>
                            <p className="font-normal text-xs text-color18">{"Cash Request"}</p>
                        </td>
                        <td className="py-4">
                            <p className="font-semibold text-sm text-color17">{request.dateCreated}</p>
                            <p className="font-normal text-xs text-color14">{request.dateCreated}</p>
                        </td>
                        <td className="py-4">
                            <div className="flex items-center justify-between pr-14">
                            {
                                request.status === "Pending" &&
                                <>
                                    <button className="rounded-full bg-color10 text-white text-xs font-bold py-1 px-3">Pending</button>
                                    <i className="text-color14"><BsThreeDotsVertical /></i>
                                </>
                            }
                            
                            </div>
                        </td>
                     </tr>
                )
            })
        
        
    )
}

export default Request
