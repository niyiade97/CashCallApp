import React, {useContext, useState } from 'react'
import Select from '../Select';
import UploadButton from '../UploadButton';
import TextField from '../TextField';
import {Link} from "react-router-dom"
import { DataContext } from "../../Utils/DataContext";
import axios from 'axios';
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./Dashboard.css";

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
                {/* <form onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap">
                        <TextField type="text" name="name" placeholder="Dolapo Obisesan" label="Name" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.name} value={cashRequest.name}/>
                        <Select name="departmentID" label="Department" onChange={handleOnChange} disabled={false} options={departments} width="2/4" formError={formErrors.department} value={cashRequest.departmentID} valueKey="department" />
                        <TextField type="number" name="amount" placeholder="#300,000" label="Amount" onChange={handleOnChange} disabled={false} width="2/4"  formError={formErrors.amount} value={cashRequest.amount} />
                        <Select name="supervisorID" placeholder="Adebayo Salami" label="Supervisor" onChange={handleOnChange} disabled={false} options={supervisors} width="2/4" formError={formErrors.supervisor} value={cashRequest.supervisorID} valueKey="fullName"/>
                        <UploadButton label="Upload" onChange={handleOnChange} name="ImageFile"  formError={formErrors.imageFile} value={cashRequest.ImageFile}/>
                        <TextField type="text" name="purpose" placeholder="Vehicle Repair" label="Purpose" onChange={handleOnChange} disabled={false} width="2/4" formError={formErrors.purpose} value={cashRequest.purpose} />
                        <div className="w-45 m-auto py-3">
                            <button type="submit" className=" border w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold hover:border-color2 hover:bg-white hover:text-color2">Submit</button>
                        </div>
                    </div>
                </form>
                 */}
            </div>
        </div>
    )
}

export default Dashboard
