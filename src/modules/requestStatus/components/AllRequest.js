import React,{useState, useEffect} from 'react'
import { MdFilterListAlt } from "react-icons/md";
import { BsSortUp } from "react-icons/bs";
import Request from "./Request";
import axios from 'axios';
import "../style/AllRequest.css"


function AllRequest({ handleLoader, handleClick }) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem("token");
    // const userId = localStorage.getItem("userId");
    const chequeRequestApi = process.env.REACT_APP_CHEQUE_REQUEST_API;
    const cashRequestApi = process.env.REACT_APP_CASH_REQUEST_API;
    const [ allRequest, setAllRequest ] = useState([]);

    const getCashRequests = () =>{
        handleLoader(true);
        axios.get(baseURL + cashRequestApi ,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleLoader(false);
            if(res.data.isSuccess){
                setAllRequest(res.data.data);
                getChequeRequests(res.data.data);
            }
           
        })
        .catch(err =>{
            handleLoader(false);
            console.log(err);
        })
    }
    const getChequeRequests = (data) =>{
        handleLoader(true);
        axios.get(baseURL + chequeRequestApi,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleLoader(false);
            if(res.data.isSuccess){
                const newArr = data.concat(res.data.data);
                console.log(newArr);
                setAllRequest(newArr);
            }
        })
        .catch(err =>{
            handleLoader(false);
            console.log(err);
        })
    }
    

    useEffect(() => {
        getCashRequests();
    }, [])

    return (
        <div className="w-full mb-8 py-4 mt-5 "> 
            <div className="w-full px-7">
                <div className=" py-5 flex justify-between items-center border-2 border-b-0 rounded-t-xl">
                    <h1 className="text-color13 font-bold text-2xl pl-10">All Request</h1>
                    <div className="flex items-center pr-12">
                        <div className="flex items-center text-color14">
                            <BsSortUp />
                            <p className="pl-1 text-color15 text-sm">Sort</p>
                        </div>
                        <div className="flex items-center pl-5 text-color14">
                            <MdFilterListAlt />
                            <p className="pl-1 text-color15 text-sm">Filter</p>
                        </div>
                    </div>
                </div>
                <table className="w-full rounded-full border border-t-0 border-color16">
                    <tr className="text-left border-2 border-t-0 text-color19 font-bold text-sm">
                        <th className="w-2/5 py-2 pl-10">Staff Details/Purpose</th>
                        <th className="w-1/5 py-2">Amount/Request Type</th>
                        <th className="w-1/5 py-2">Date</th>  
                        <th className="w-1/5 py-2">Status</th>
                    </tr>
                    {
                        allRequest.length === 0 ?
                        <tr className='w-full h-52 text-2xl relative'>
                            <p className="absolute top-2/4 left-2/4  transform -translate-x-2/4 ">No Request</p>
                        </tr>
                        :
                        <Request handleClick={handleClick} requestData={allRequest} onClick={true}/>
                    }
                    
                    
                </table>
                
            </div>
        </div>
    )
}

export default AllRequest;
