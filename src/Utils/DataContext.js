import React,{ createContext, useState, useEffect} from 'react'
import axios from "axios";

export const DataContext = createContext({});

const DataContextProvider = ( props ) => {
    const REACT_BASE_URL_API = "https://uat.bts.com.ng/cashcallapi/"
    const REACT_GET_DEPARTMENT_API = "api/department/departments";
    const REACT_GET_USERS_API = "api/users/getallusers";
    const REACT_GET_SUPERVISOR_API = "api/users/getsupervisors";
    const REACT_DELETE_USER_API = "api/users/delete/";
    const token = localStorage.getItem("token");

    const [ departments, setDepartments ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const [ supervisors, setSupervisors ] = useState([]);
    
    const getDepartment = () =>{
        axios.get(REACT_BASE_URL_API + REACT_GET_DEPARTMENT_API,
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
    const getUsers = () =>{
        axios.get(REACT_BASE_URL_API+REACT_GET_USERS_API,
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

    const deteleUser = (id) =>{
        axios.delete(REACT_BASE_URL_API + REACT_DELETE_USER_API + id,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            console.log(res)
            getUsers();
            // setUsers(res.data.data.map((data) =>{
            //     return{
            //         data
            //     }
            // }))
        })
    }
    const getSuperVisor = () =>{
        axios.get(REACT_BASE_URL_API + REACT_GET_SUPERVISOR_API,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            console.log(res)
            setSupervisors(res.data.data.map((data) =>{
                return{
                    supervisorID: data.id,
                    fullName: data.lastname + " " + data.firstname
                }
            }))
        })
    }
    useEffect(() => {
        getDepartment();
        getUsers();
        getSuperVisor();
    }, [])
    return (
        <DataContext.Provider value={{ departments, users, getUsers, supervisors, deteleUser }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;

