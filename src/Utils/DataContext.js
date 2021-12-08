import React,{ createContext, useState, useEffect} from 'react'
import axios from "axios";

export const DataContext = createContext({});

const DataContextProvider = ( props ) => {
    const REACT_BASE_URL_API = "https://uat.bts.com.ng/cashcallapi/"
    const REACT_GET_DEPARTMENT_API = "api/department/departments";
    const REACT_GET_USERS_API = "api/users/getallusers";

    const [ departments, setDepartments ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const getDepartment = () =>{
        axios.get(REACT_BASE_URL_API+REACT_GET_DEPARTMENT_API)
        .then((res) =>{
            setDepartments(res.data.data.map((data) =>{
                return{
                    data
                }
            }))
        })
    }
    const getUsers = () =>{
        axios.get(REACT_BASE_URL_API+REACT_GET_USERS_API)
        .then((res) =>{
            console.log(res)
            setUsers(res.data.data.map((data) =>{
                return{
                    data
                }
            }))
        })
    }
    useEffect(() => {
        getDepartment();
        getUsers();
    }, [])
    return (
        <DataContext.Provider value={{ departments, users, getUsers }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;

