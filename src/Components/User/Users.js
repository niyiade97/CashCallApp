import React,{useContext} from 'react'
import { MdFilterListAlt } from "react-icons/md";
import { BsSortUp } from "react-icons/bs";
import image from "../../Assets/images/adepics.jpeg";
import { IoAddOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi'
import { BsArrowUpShort } from 'react-icons/bs'
import { Link } from "react-router-dom";
import UserTemplate from './UserTemplate';
import { DataContext } from "../../Utils/DataContext";
function Users(props) {
   
    // const { users } = useContext(DataContext);

    return (
        <div className="w-full h-screen mb-8 py-4 mt-5 relative"> 
            {props.children}
            <div className="w-full px-7">
                <div className="py-3 flex justify-between items-center border-1.5 border-b rounded-t-xl">
                    <div className="flex items-center w-2/4">
                        <h1 className="text-color13 font-bold text-xl pl-10">All Users</h1>
                        <div className="mx-5 w-2 h-5 bg-color29"></div>
                        <p className="text-color29 text-sm font-bold">30total</p>
                    </div>
                    <div className="flex justify-end items-center pr-4 w-2/4">
                        <div className="flex items-center text-color14 w-4/5">
                            <input className="h-10 pl-5 bg-color32 w-90 rounded-tl-lg rounded-bl-lg border-l border-t border-b  border-color31 outline-none" type="search" placeholder="Search"/>
                            <div className="text-color31 bg-color32 w-10 border-r border-t border-b border-color31 rounded-tr-lg rounded-br-lg h-10 pr-2 flex items-center justify-center">
                                <FiSearch />
                            </div>
                        </div>
                        <div className="flex items-center pl-5 text-color14 w-1/5">
                            <Link to="/users/addUser" className="bg-color30 w-full text-sm text-white flex items-center justify-evenly py-2 rounded-lg">
                                Add User 
                                <i><IoAddOutline /></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <table className="w-full rounded-full border border-t-0 border-color16">
                    <tr className="text-left border-1.5 border-t-0 text-color19 font-bold text-sm h-20">
                        <th className="py-2 w-10">
                            <div className="flex justify-center items-center">
                                <input className="border border-color30 rounded-fullbg-colo" type="checkbox" />
                            </div>
                        </th>
                        <th className=" w-30 bg-color7">
                            <div className="flex justify-between items-center py-2 px-4 text-color17 font-bold text-lg">
                               <p className="">Name</p>
                                <i className="text-3xl"><BsArrowUpShort /></i>
                            </div>
                        </th>
                        <th className="py-2 w-60 pl-4 text-color17 font-bold text-lg">Role</th>  
                    </tr>
                    <UserTemplate users={[]} />
                    
                </table>
                
            </div>
        </div>
    )
}

export default Users;
