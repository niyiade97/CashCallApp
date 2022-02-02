import React from 'react'
import { IoAddOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi'
import { BsArrowUpShort } from 'react-icons/bs'
import UserTemplate from './UserTemplate';
import "../style/Users.css";
import { useSelector } from "react-redux";
import { getAllUsers } from '../../../redux/users/userSlice';
import { render } from 'react-dom';

function Users(props) {
    const users = useSelector(getAllUsers);
    console.log(users);
    return (
        <div className="w-full h-screen mb-8 py-4 mt-5 relative"> 
            {props.children}
            <div className="w-full px-7">
                <div className="py-3 flex justify-between items-center border-2 border-b rounded-t-xl">
                    <div className="user-header flex items-center w-2/4">
                        <h1 className="text-color13 font-bold text-xl pl-10">All Users</h1>
                        <div className="mx-5 w-2 h-5 bg-color29"></div>
                        <p className="text-color29 text-sm font-bold">{`${props.totalUser} total`}</p>
                    </div>
                    <div className="flex justify-end items-center pr-4 w-2/4">
                        
                        <div className="add-user-container flex items-center pl-5 text-color14 w-1/5">
                            <p onClick={props.handleAddUserModal} className="bg-color30 w-full text-sm text-white flex items-center justify-evenly py-2 rounded-lg">
                                Add User 
                                <i><IoAddOutline /></i>
                            </p>
                        </div>
                    </div>
                </div>
                <table className="user-table-container w-full rounded-full border border-t-0 border-color16">
                    <tr className="user-table-row-container text-left border-2 border-t-0 text-color19 font-bold text-sm h-20">
                        <th className="py-2 w-10">
                            <div className="flex justify-center items-center">
                                <input className="user-table-checkbox border border-color30 rounded-full" type="checkbox" />
                            </div>
                        </th>
                        <th className="user-table-name-header w-1/3 bg-color7">
                            <div className="flex justify-between items-center py-2 px-4 text-color17 font-bold text-lg">
                               <p className="">Name</p>
                                <i className="text-3xl"><BsArrowUpShort /></i>
                            </div>
                        </th>
                        <th className="user-table-role-header py-2 w-60 pl-4 text-color17 font-bold text-lg">Role</th>  
                    </tr>
                    <UserTemplate users={props.users} handleDeleteModal={props.handleDeleteModal} />
                    
                </table>
                
            </div>
        </div>
    )
}

export default Users;
