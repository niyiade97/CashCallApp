import React,{ createContext, useState, useEffect} from 'react'
import axios from "axios";

export const DataContext = createContext({});

const DataContextProvider = ( props ) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const usersAPI = process.env.REACT_APP_GET_USERS_API;
    const supervisorAPI = process.env.REACT_APP_GET_SUPERVISOR_API;
    const deleteUserAPI = process.env.REACT_APP_DELETE_USER_API;
    
    const token = localStorage.getItem("token");
    const [ departments, setDepartments ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const [ supervisors, setSupervisors ] = useState([]);
    
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

    const deteleUser = (id) =>{
        axios.delete(baseURL + deleteUserAPI + id,
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
        axios.get(baseURL + supervisorAPI,
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
        try {
            getDepartment();
            getUsers();
            getSuperVisor();
        } catch (error) {
            console.log("init error", error);
        }
        
    }, [])
    return (
        <DataContext.Provider value={{ departments, users, getUsers, supervisors, deteleUser }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;

