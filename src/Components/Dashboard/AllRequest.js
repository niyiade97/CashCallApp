import React,{useState, useEffect} from 'react'
import { MdFilterListAlt } from "react-icons/md";
import { BsSortUp } from "react-icons/bs";
import image from "../../Assets/images/adepics.jpeg";
import Request from './Request';
import axios from 'axios';
import "./AllRequest.css";


function AllRequest({ handleLoader }) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const allRequestApi = process.env.REACT_APP_GET_RQUESTS_API;
    // const Services = ["Web Development", "IT", "Boat Cruise"]
    // const handleOnChange = (value) =>{
    //     console.log(value);
    // }
    const [ allRequest, setAllRequest ] = useState([]);
    // const requestData = [
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "0",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "1",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "2",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "0",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "2",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "2",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "0",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "2",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "2",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "0",
    //     },
    //     {
    //         name: "Adeyemo Afalain",
    //         image: image,
    //         cashPurpose: "Repair of Car Engine",
    //         amount: "₦100,000",
    //         requestForm: "Cash Request",
    //         date:"May 26, 2019",
    //         time: "6:30 PM",
    //         status: "2",
    //     }
    // ]

    const getAllRequests = () =>{
        handleLoader(true);
        axios.get(baseURL + allRequestApi,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleLoader(false);
            console.log(res);
            if(res.data.isSuccess){
                setAllRequest(res.data.data);
            }
        })
        .catch(err =>{
            handleLoader(false);
            console.log(err);
        })
    }

    useEffect(() => {
        getAllRequests();
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
                            <p className="absolute top-2/4 left-2/4  transform -mt-28 -translate-x-2/4 ">No Request</p>
                        </tr>
                        :
                        <Request requestData={allRequest} />
                    }
                    
                    
                </table>
                
            </div>
        </div>
    )
}

export default AllRequest;
