import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import "../style/AllRequest.css";
import { IoIosStar } from "react-icons/io";
import emptyImage from "../../../Assets/images/noImage.png";
import addComma from '../../customElement/component/addComma';

function Request({ requestData, handleClick, clickStatus }){
    const baseURL = process.env.REACT_APP_BASE_URL;
    const generateUserProfile = process.env.REACT_APP_GET_PROFILE_API;
    const token = localStorage.getItem("adminToken");

   
    const handleOnClick = (request) =>{
        handleClick(request);
    }

    // const addComma = (value) =>{
    //     let tempValue = ""
    //     let tempArr = value.toString().split(",");
    //         if(tempArr.length > 1){
    //             for(let i=0; i<tempArr.length; i++){
    //                 tempValue += tempArr[i];
    //             }
    //         }
    //         else{
    //             tempValue = tempArr[0];
    //         } 
    //         return parseInt(tempValue).toLocaleString('en-US');
    // }

    return (
            requestData.map((request) =>{
                const date = new Date(request.dateCreated).toUTCString().split(" ");
                const dateToUTC = `${date[0] } ${date[1]} ${date[2]} ${date[3]}`;
               
                return(
                    <tr onClick={handleOnClick.bind(null,request)} className={`request-wrapper border-2 hover:bg-color20  ${clickStatus ? "cursor-pointer" : "pointer-events-none"}`}>
                        <td className="flex py-4 pl-10">
                            <img className="w-11 h-11 rounded-full mr-5 object-cover" src={request.imageRef ? request.imageRef : emptyImage} alt="img"/>
                            <div>
                                <p className="font-semibold text-sm text-color17 mb-1">{request.purpose.toUpperCase()}</p>
                                <p className="font-normal text-xs text-color18">{""}</p>
                            </div>
                        </td>
                        <td className="py-4">
                            <p className="font-semibold text-sm text-color17">{`₦${addComma(request.amount)}`}</p>
                            <p className="font-normal text-xs text-color18">{request.type ? request.type + " Request" : "" }</p>
                        </td>
                        <td className="py-4">
                            <p className="font-semibold text-sm text-color17">{dateToUTC}</p>
                            <p className="font-normal text-xs text-color14">{new Date(request.dateCreated).toLocaleTimeString()}</p>
                        </td>
                        {
                            request.status !== "Approved/Disbursed" &&
                                <td className="py-4">
                                    <div className="flex items-center justify-between pr-14">
                                        <button className={`rounded-full ${request.status === "Approved" && "bg-color10"} ${request.status === "Declined" && "bg-red-500"} text-white text-xs font-bold py-1 w-24`}>{`${request.status === "Declined" ? request.status : "Pending"}`}</button>
                                        <i className="text-color14"><BsThreeDotsVertical /></i>
                                    </div>
                                </td>
                        }
                        {
                            request.status === "Approved/Disbursed" &&
                                <td className="py-4">
                                    <div className="flex items-center justify-between pr-14">
                                        <button className="rounded-full bg-color9 text-white text-xs font-bold py-1 w-24 relative">
                                            Approved
                                        <i className="text-white bg-black rounded-full p-1 absolute -top-2 -right-2"><IoIosStar /></i>
                                        </button>
                                        <i className="text-color14"><BsThreeDotsVertical /></i>
                                    </div>
                                </td>
                        }
                        
                     </tr>
                )
            })
        
        
    )
}

export default Request
