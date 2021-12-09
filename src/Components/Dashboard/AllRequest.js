import React from 'react'
import { MdFilterListAlt } from "react-icons/md";
import { BsSortUp } from "react-icons/bs";
import image from "../../Assets/images/adepics.jpeg";
import Request from './Request';

function AllRequest() {
    // const Services = ["Web Development", "IT", "Boat Cruise"]
    // const handleOnChange = (value) =>{
    //     console.log(value);
    // }
    const requestData = [
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "0",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "1",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "2",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "0",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "2",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "2",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "0",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "2",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "2",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "0",
        },
        {
            name: "Adeyemo Afalain",
            image: image,
            cashPurpose: "Repair of Car Engine",
            amount: "₦100,000",
            requestForm: "Cash Request",
            date:"May 26, 2019",
            time: "6:30 PM",
            status: "2",
        }
    ]

    return (
        <div className="w-full mb-8 py-4 mt-5 "> 
            <div className="w-full px-7">
                <div className=" py-5 flex justify-between items-center border-1.5 border-b-0 rounded-t-xl">
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
                    <tr className="text-left border-1.5 border-t-0 text-color19 font-bold text-sm">
                        <th className="w-2/5 py-2 pl-10">Staff Details/Purpose</th>
                        <th className="w-1/5 py-2">Amount/Request Type</th>
                        <th className="w-1/5 py-2">Date</th>  
                        <th className="w-1/5 py-2">Status</th>
                    </tr>
                    <Request requestData={requestData} />
                    
                </table>
                
            </div>
        </div>
    )
}

export default AllRequest;
