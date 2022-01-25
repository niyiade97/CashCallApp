import React from 'react'
import { GrPowerReset } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import image from "../../../Assets/images/adepics.jpeg";
import "../style/UserTemplate.css";

function UserTemplate({ users, handleDeleteModal  }) {
    const handleOnDelete = (id) =>{
        handleDeleteModal(id);
    }
    const handleOnPassWordReset = (id) =>{
        
    }
    return (
        <>
        {
            users.length !== 0 ?
            users.map((user) =>{
                return(
                    <tr className="user-template-table-row cursor-pointer">
                        <td className="">
                            <div className="flex justify-center items-center">
                                <input className="border border-color30 rounded-full" type="checkbox" />
                            </div>
                        </td>
                        <td className="user-template-table-data flex py-4 pl-2">
                            <img className="w-11 h-11 rounded-full mr-5 object-cover" src={image} alt="img"/>
                            <div>
                                <p className="user-template-table-name font-semibold text-sm text-color17 mb-1">{user.data.firstname + " " + user.data.lastname}</p>
                                <p className="user-template-table-email font-normal text-xs text-color18">{user.data.email}</p>
                            </div>
                        </td>
                        <td className="py-4 pl-5">
                            <div className="flex justify-between items-center pr-10">
                                <div>
                                    <button className="user-template-table-role bg-color17 text-white rounded-full w-20 text-sm py-1">{user.data.userRole}</button>
                                </div>
                                <div className="flex items-center">
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
            :
            <div className='text-center'>
                <p>No Data</p>
            </div>
            
                    
        }
        
        </>
             
            
        
        
    )
}

export default UserTemplate
