import React,{useState, useEffect} from 'react'
import { IoAddOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi'
import { BsArrowUpShort } from 'react-icons/bs'
import { Link } from "react-router-dom";
import axios from "axios";
// import "../../userManagement/style/User.css";
import DepartmentTemplate from './DepartmentTemplate';


function Departments(props) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const token = localStorage.getItem("token");
    const usersAPI = process.env.REACT_APP_GET_USERS_API;
    const [ users, setUsers ] = useState([]);
    const [ departments, setDepartments ] = useState([]);
    // const { users } = useContext(DataContext);
    const getUsers = () =>{
        axios.get(baseURL + usersAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setUsers(res.data.data.map((data) =>{
                return{
                    data
                }
            }))
        })
    }

    const getDepartment = () =>{
        axios.get(baseURL + departmentAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            setDepartments(res.data.data.map((data) =>{
                return{
                    departmentID: data.departmentID,
                    department: data.department
                }
            }))
        })
    }

    useEffect(() => {
        getDepartment();
    }, [])

    return (
        <div className="w-full h-screen mb-8 py-4 mt-5 relative"> 
            {props.children}
            <div className="w-full px-7">
                <div className="py-3 flex justify-between items-center border-2 border-b rounded-t-xl">
                    <div className="user-header flex items-center w-2/4">
                        <h1 className="text-color13 font-bold text-xl pl-10">All Department</h1>
                        <div className="mx-5 w-2 h-5 bg-color29"></div>
                        <p className="text-color29 text-sm font-bold">30total</p>
                    </div>
                    <div className="flex justify-end items-center pr-4 w-2/4">
                        <div className="user-search-container flex items-center text-color14 w-4/5">
                            <input className="h-10 pl-5 bg-color32 w-90 rounded-tl-lg rounded-bl-lg border-l border-t border-b  border-color31 outline-none" type="search" placeholder="Search"/>
                            <div className="text-color31 bg-color32 w-10 border-r border-t border-b border-color31 rounded-tr-lg rounded-br-lg h-10 pr-2 flex items-center justify-center">
                                <FiSearch />
                            </div>
                        </div>
                        <div className="add-user-container flex items-center pl-5 text-color14 w-3/12">
                            <Link to="/departments/addDepartment" className="bg-color30 w-full text-sm text-white flex items-center justify-evenly py-2 rounded-lg">
                                Add Department 
                                <i><IoAddOutline /></i>
                            </Link>
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
                    <DepartmentTemplate departments={departments} />
                    
                </table>
                
            </div>
        </div>
    )
}

export default Departments;
