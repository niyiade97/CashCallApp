import React,{ useContext } from 'react'
import { MdDelete } from "react-icons/md";
import image from "../../../Assets/images/adepics.jpeg";
import { DataContext } from "../../../Utils/DataContext";
import "../../userManagement/style/UserTemplate.css";

function DepartmentTemplate({ departments, handleDeleteModal }) {
    const handleOnDelete = (id) =>{
        handleDeleteModal(id);
    }
    
    return (
        <>
        {

            departments.length !== 0 ?
            departments.map((user) =>{
                return(
                    <tr className="user-template-table-row cursor-pointer">
                        <td className="">
                            <div className="flex justify-center items-center">
                                <input className="border border-color30 rounded-full" type="checkbox" />
                            </div>
                        </td>
                        <td className="user-template-table-data flex py-4 pl-2">
                            <div>
                                <p className="user-template-table-email font-normal text-base text-color18">{user.department}</p>
                            </div>
                        </td>
                        <td className="py-4 pl-5">
                            <div className="flex justify-end items-center pr-10">
                               
                                <div className="flex items-center">

                                    <button onClick={handleOnDelete.bind(null,user.departmentID)} className="flex items-center justify-evenly ml-5">
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

export default DepartmentTemplate
