import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import "../style/Dashboard.css";

function Dashboard() {
    const stats =[
        {
            statType:"Cash Request",
            stat: "15% more this week",
            amount:"$300"
        },
        {
            statType:"Cheque Request",
            stat: "15% more this week",
            amount:"$300"
        },
        {
            statType:"Approved Request",
            stat: "no investment this week",
            amount:"$0"
        },
        {
            statType:"Pending Request",
            stat: "no investment this week",
            amount:"0"
        },
        {
            statType:"Approved Request",
            stat: "no investment this week",
            amount:"200"
        },
        {
            statType:"Declined Request",
            stat: "no investment this week",
            amount:"1200"
        },
    ]
    
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
                                    <StatCard statType={data.statType} stat={data.stat} amount={data.amount}/>
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
