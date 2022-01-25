import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import "../style/AllRequest.css";
import { IoIosStar } from "react-icons/io";
import axios from "axios";

function UserRequestTemplate({ requestData, handleClick, clickStatus }) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const generateUserProfile = process.env.REACT_APP_GET_PROFILE_API;
    const token = localStorage.getItem("token");
    const handleOnClick = (request) => {
        handleClick(request);
    }
    const getName = (id) => {
        axios.get(baseURL + generateUserProfile + id,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
            .then((res) => {
                if (res.data.isSuccess) {
                    return res.data.data.firstname + " " + res.data.data.lastname
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        requestData.map((request) => {
            const date = new Date(request.dateCreated).toUTCString().split(" ");
            const dateToUTC = `${date[0]} ${date[1]} ${date[2]} ${date[3]}`;

            return (
                <tr onClick={handleOnClick.bind(null, request)} className={`request-wrapper border-2 hover:bg-color20  ${clickStatus ? "cursor-pointer" : "pointer-events-none"}`}>
                    <td className="flex py-4 pl-10">
                        <img className="w-11 h-11 rounded-full mr-5 object-contain" src={request.imageRef} alt="img" />
                        <div>
                            <p className="font-semibold text-sm text-color17 mb-1">{request.purpose.toUpperCase()}</p>
                            <p className="font-normal text-xs text-color18">{""}</p>
                        </div>
                    </td>
                    <td className="py-4">
                        <p className="font-semibold text-sm text-color17">{request.amount}</p>
                        <p className="font-normal text-xs text-color18">{request.type ? request.type + " Request" : ""}</p>
                    </td>
                    <td className="py-4">
                        <p className="font-semibold text-sm text-color17">{dateToUTC}</p>
                        <p className="font-normal text-xs text-color14">{new Date(request.dateCreated).toLocaleTimeString()}</p>
                    </td>
                    {
                        request.status !== "Approved/Disbursed" &&
                        <td className="py-4">
                            <div className="flex items-center justify-between pr-14">
                                <button className={`rounded-full ${request.status === "Pending" && "bg-color10"} ${request.status === "Approved" && "bg-color9"} ${request.status === "Declined" && "bg-red-500"} text-white text-xs font-bold py-1 w-24`}>{request.status}</button>
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
export default UserRequestTemplate;
