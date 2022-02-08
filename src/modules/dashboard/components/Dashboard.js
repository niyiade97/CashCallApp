import React,{useState,useEffect} from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import "../style/Dashboard.css";
import axios from 'axios';

function Dashboard() {
    const dashboardAPI = process.env.REACT_APP_DASHBOARD_API;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem("adminToken");
    
    const [ requestWeeklyStat, setRequestWeeklyStat ] = useState({
        allamount: 0,
        approvedrequest: 0,
        cashamount: 0,
        chequeamount: 0,
        declinedrequest: 0,
        pendingrequest: 0,
    });

    const stats =[
        {
            statType:"All Request",
            amount:requestWeeklyStat.allamount
        },
        {
            statType:"Cash Request",
            amount: requestWeeklyStat.cashamount
        },
        {
            statType:"Cheque Request",
            amount:requestWeeklyStat.chequeamount
        },
        {
            statType:"Pending Request",
            amount: requestWeeklyStat.pendingrequest
        },
        {
            statType:"Approved Request",
            amount:requestWeeklyStat.approvedrequest
        },
        {
            statType:"Declined Request",
            amount:requestWeeklyStat.declinedrequest
        },
    ]

    const getAllWeeklyRequest = () =>{
        axios.get(baseURL + dashboardAPI,
            {
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            console.log(res);
            if(res.data.isSuccess){
                setRequestWeeklyStat(res.data.data);
            }
        })
        .catch(err =>{
            console.log(err);
        })
    }
    
    const StatCard = ({ statType, amount}) =>{
        return(
            <div className='stat-card-wrapper p-4'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h1>{statType}</h1>
                    </div>
                    <div className="text-3xl">
                        <BiDotsVerticalRounded />
                    </div>
                </div>
               <h1 className="text-4xl font-bold">{amount}</h1>
            </div>
        )
    }
    useEffect(() => {
        getAllWeeklyRequest();
    }, [])
    return (
        <div className="w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="dashboard-header text-color13 font-bold text-2xl">Admin Dashboard</h1>
                </div>
                <div className='flex flex-wrap'>
                    {
                        stats.map((data) =>{
                            return(
                                <div className="w-1/3 px-4 py-8"> 
                                    <StatCard statType={data.statType} requestWeeklyStat={requestWeeklyStat} stat={data.stat} amount={data.amount}/>
                                </div>
                            )
                        })
                    }
                </div>
               
            </div>
        </div>
    )
}

export default Dashboard
