import React,{useState, useEffect} from 'react'
import { MdFilterListAlt } from "react-icons/md";
import { BsSortUp } from "react-icons/bs";
import axios from 'axios';
import SupervisorRequestTemplate from "./SupervisorRequestTemplate";

function SupervisorDeclinedRequest({handleLoader}) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem("superToken");
    const userId = localStorage.getItem("superId");
    const userDeclinedRequest = process.env.REACT_APP_GET_ALL_USER_DECLINED_REQUESTS_API;
    const [ allDeclinedRequest, setAllDeclinedRequest ] = useState([]);
    
    const getRejectedRequest = () =>{
        handleLoader(true);
        axios.get(baseURL + userDeclinedRequest  + userId,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleLoader(false);
            if(res.data.isSuccess){
                setAllDeclinedRequest(res.data.data);
            }
           
        })
        .catch(err =>{
            handleLoader(false);
            console.log(err);
        })
    }
  
    useEffect(() => {
        getRejectedRequest();
    }, [])
  

    return (
        <div className="w-full mb-8 py-4 mt-5 "> 
            <div className="w-full px-7">
                <div className=" py-5 flex justify-between items-center border-1.5 border-b-0 rounded-t-xl">
                    <h1 className="text-color13 font-bold text-2xl pl-10">Declined Request</h1>
                    {/* <div className="flex items-center pr-12">
                        <div className="flex items-center text-color14">
                            <BsSortUp />
                            <p className="pl-1 text-color15 text-sm">Sort</p>
                        </div>
                        <div className="flex items-center pl-5 text-color14">
                            <MdFilterListAlt />
                            <p className="pl-1 text-color15 text-sm">Filter</p>
                        </div>
                    </div> */}
                </div>
                <table className="w-full rounded-full border border-t-0 border-color16">
                    <tr className="text-left border-1.5 border-t-0 text-color19 font-bold text-sm">
                        <th className="w-2/5 py-2 pl-10">Staff Details/Purpose</th>
                        <th className="w-1/5 py-2">Amount/Request Type</th>
                        <th className="w-1/5 py-2">Date</th>  
                        <th className="w-1/5 py-2">Status</th>
                    </tr>
                    {
                        allDeclinedRequest.length === 0 ?
                        <tr className='w-full h-52 text-2xl relative'>
                            <p className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 ">No Request</p>
                        </tr>
                        :
                    <SupervisorRequestTemplate requestData={allDeclinedRequest} />
                    }
                </table>
                
            </div>
        </div>
    )
}
export default SupervisorDeclinedRequest;
