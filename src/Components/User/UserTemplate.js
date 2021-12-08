import React from 'react'
import { GrPowerReset } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import image from "../../Assets/images/adepics.jpeg";

function UserTemplate({ users }) {
    const handleOnDelete = (id) =>{
        
    }
    const handleOnPassWordReset = (id) =>{
        
    }
    return (
        <>
        {
            users.length !== 0 ?
            users.map((user) =>{
                return(
                    <tr className="border-1.5 hover:bg-color20 cursor-pointer ">
                        <td className="">
                            <div className="flex justify-center items-center">
                                <input className="border border-color30 rounded-full" type="checkbox" />
                            </div>
                        </td>
                        <td className="flex py-4 pl-2">
                            <img className="w-11 h-11 rounded-full mr-5" src={image} alt="img"/>
                            <div>
                                <p className="font-semibold text-sm text-color17 mb-1">{user.data.firstname + " " + user.data.lastname}</p>
                                <p className="font-normal text-xs text-color18">{user.data.email}</p>
                            </div>
                        </td>
                        <td className="py-4 pl-5">
                            <div className="flex justify-between items-center pr-10">
                                <div>
                                    <button className="bg-color17 text-white rounded-full w-20 text-sm py-1">{user.data.userRole}</button>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={handleOnPassWordReset.bind(null,user.data.id)} className="flex items-center justify-evenly">
                                        <i className="pr-1"><GrPowerReset /></i>
                                        Reset Password
                                    </button>
                                    <button onClick={handleOnDelete.bind(null,user.data.id)} className="flex items-center justify-evenly ml-5">
                                        <i className="pr-1"><MdDelete /></i>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </td>
                     </tr> 
                )
            })
            : "No Data"
                    
        }
        
        </>
             
            
        
        
    )
}

export default UserTemplate
