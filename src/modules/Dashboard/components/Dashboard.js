import React,{useState,useEffect} from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import "../style/Dashboard.css";
import axios from 'axios';

function Dashboard() {
    const weeklyCashRequestAPI = process.env.REACT_APP_GET_TOTAL_WEEKLY_CASH_REQUEST_API;
    const weeklyChequeRequestAPI = process.env.REACT_APP_GET_TOTAL_WEEKLY_CHEQUE_REQUEST_API;
    const weeklyApprovedRequestAPI = process.env.REACT_APP_GET_TOTAL_WEEKLY_AMOUNT_APPROVED_API;
    const weeklyDeclinedRequestAPI = process.env.REACT_APP_GET_TOTAL_WEEKLY_AMOUNT_APPROVED_API;
    const weeklyPendingRequestAPI = process.env.REACT_APP_GET_TOTAL_WEEKLY_AMOUNT_APPROVED_API;
    const allWeeklyRequestAPI = process.env.REACT_APP_GET_TOTAL_WEEKLY_REQUEST_API;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem("token");
    const [ requestWeeklyStat, setRequestWeeklyStat ] = useState({
        weeklyCash: 0,
        weeklyCheque: 0,
        weeklyTotalRequest: 0,
        weeklyApprovedRequest: 0,
        weeklyDeclinedRequest: 0,
        weeklyPendingRequest: 0
    });

    const stats =[
        {
            statType:"All Request",
            stat: "no investment this week",
            amount:requestWeeklyStat.weeklyTotalRequest
        },
        {
            statType:"Cash Request",
            stat: "15% more this week",
            amount: requestWeeklyStat.weeklyCash
        },
        {
            statType:"Cheque Request",
            stat: "15% more this week",
            amount:requestWeeklyStat.weeklyCheque
        },
        {
            statType:"Pending Request",
            stat: "no investment this week",
            amount: requestWeeklyStat.weeklyPendingRequest
        },
        {
            statType:"Approved Request",
            stat: "no investment this week",
            amount:requestWeeklyStat.weeklyApprovedRequest
        },
        {
            statType:"Declined Request",
            stat: "no investment this week",
            amount:requestWeeklyStat.weeklyDeclinedRequest
        },
    ]
    const getWeeklyCashRequest = () =>{
        axios.get(baseURL + weeklyCashRequestAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setRequestWeeklyStat((prevState) =>{
                return{
                    ...prevState,
                    weeklyCash: res.data.data
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const getWeeklyChequeRequest = () =>{
        axios.get(baseURL + weeklyChequeRequestAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setRequestWeeklyStat((prevState) =>{
                return{
                    ...prevState,
                    weeklyCheque: res.data.data
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const getAllWeeklyRequest = () =>{
        axios.get(baseURL + allWeeklyRequestAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setRequestWeeklyStat((prevState) =>{
                return{
                    ...prevState,
                    weeklyTotalRequest: res.data.data
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const getWeeklyApprovedRequest = () =>{
        axios.get(baseURL + weeklyApprovedRequestAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setRequestWeeklyStat((prevState) =>{
                return{
                    ...prevState,
                    weeklyApprovedRequest: res.data.data
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const getWeeklyDeclinedRequest = () =>{
        axios.get(baseURL + weeklyDeclinedRequestAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setRequestWeeklyStat((prevState) =>{
                return{
                    ...prevState,
                    weeklyDeclinedRequest: res.data.data
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const getWeeklyPendingRequest = () =>{
        axios.get(baseURL + weeklyPendingRequestAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setRequestWeeklyStat((prevState) =>{
                return{
                    ...prevState,
                    weeklyPendingRequest: res.data.data
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
    const StatCard = ({ statType, stat, amount}) =>{
        return(
            <div className='stat-card-wrapper p-4'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h1>{statType}</h1>
                        <p>{stat}</p>
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
        getWeeklyCashRequest();
        getWeeklyChequeRequest();
        getAllWeeklyRequest();
        getWeeklyApprovedRequest();
        getWeeklyDeclinedRequest();
        getWeeklyPendingRequest();
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
