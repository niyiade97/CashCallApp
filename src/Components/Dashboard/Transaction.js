import React from 'react'
import  { Link } from "react-router-dom";
import Select from '../Select';
import TextField from '../TextField';

function Transaction() {
    const Services = ["Web Development", "IT", "Boat Cruise"]
    const handleOnChange = (value) =>{
        console.log(value);
    }
    return (
        <div className="w-11/12 rounded-3xl border-color7 border mb-8 mx-auto py-4 mt-5 shadow-transactionBoxShadow"> 
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3">
                    <h1 className="text-color13 font-bold text-2xl">Transaction</h1>
                </div>
                <div className="flex flex-wrap">
                    <TextField type="text" name="transactionNumber" placeholder="#123-456789" label="Transaction Number" onChange={handleOnChange} disabled={true} />
                    <TextField type="date" name="date" placeholder="Feb 21, 2021" label="Date" onChange={handleOnChange} disabled={true} />
                    <TextField type="text" name="recipient" placeholder="Jordan Nico" label="Recipient" onChange={handleOnChange} disabled={false} />
                    <TextField type="email" name="email" placeholder="nico@mail.com" label="Email" onChange={handleOnChange} disabled={false}/>
                    <TextField type="text" name="amount" placeholder="$ 12,400" label="Amount" onChange={handleOnChange} disabled={false}/>
                    <Select name="services" placeholder="Web Development" label="Services" onChange={handleOnChange} disabled={false} options={Services}/>
                    <TextField type="date" name="dueDate" placeholder="Mar 21, 2021" label="Due Date" onChange={handleOnChange} disabled={false}/>
                    <TextField type="password" name="password" placeholder="••••••••" label="password" onChange={handleOnChange} disabled={false}/>
                </div>
                <div className="flex flex-wrap justify-end items-center pt-8 pr-4 pb-4">
                    <div className="flex items-start">
                            <input type="checkbox" name="" className="w-5 h-5 mt-1"/>
                            <p className="w-56 pr-3 text-color5 font-normal text-sm leading-6 ml-2">Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit</p>
                    </div>
                    <div className="w-35">
                        <input type="submit" value="submit" className="w-full bg-color2 text-white h-14 rounded-full mx-2 text-lg font-semibold" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction;
