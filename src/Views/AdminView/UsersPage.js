import React,{useState, useEffect} from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import Users from '../../Components/User/Users';
import BackDrop from "../../Components/BackDrop";
import Loader from '../../Components/Loader';
import AddUser from '../../Components/User/AddUser';
import axios from "axios";
import DeleteModal from '../../Components/DeleteModal';

function UsersPage(props) {
    const [ loading, setLoading ] = useState(false);
    const [ addUserModal, setAdUserModal ] = useState(false);
    const [ users, setUsers ] = useState([]);
    const baseURL = process.env.REACT_APP_BASE_URL;
    const deleteUserAPI = process.env.REACT_APP_DELETE_USER_API;
    const token = localStorage.getItem("token");
    const usersAPI = process.env.REACT_APP_GET_USERS_API;
    const [ deleteModal, setDeleteModal] = useState(false);
    const [ id, setId ] = useState(null);
    
    const handleOnLoad = (state) =>{
        setLoading(state)
    }
    const handleAddUserModal = () =>{
        setAdUserModal(!addUserModal);
    }
    const handleDeleteModal = (id) =>{
        setId(id);
        setDeleteModal(!deleteModal);
    }
    const onclick = () =>{
        
    }

    const handleDelete = () =>{
        axios.delete(baseURL + deleteUserAPI + id,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            console.log(res)
            getUsers();
            setDeleteModal(false);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const getUsers = () =>{
        handleOnLoad(true)
        axios.get(baseURL + usersAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleOnLoad(false)
            setUsers(res.data.data.map((data) =>{
                return{
                    data
                }
            }))
        })
        .catch(err =>{
            handleOnLoad(false);
        })
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <DashboardContainer>
        {
                    deleteModal &&
                    <DeleteModal
                        messageHeader={"Are you sure you want to delete this user"}
                        messageText1=""
                        messageText2=""
                        status={false}
                        handle
                        handleDeleteModal={handleDeleteModal}
                        handleDelete={handleDelete}

                    />
                }
            <div className="w-full flex">
                <Users handleOnLoad={handleOnLoad} handleAddUserModal={handleAddUserModal} handleDeleteModal={handleDeleteModal} users={users}>
                {
                    loading &&
                    <>
                        <BackDrop indexValue={"40"} onclick={onclick}/>
                        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 transform">
                            <Loader color="#FFFFFF"/>
                        </div>
                    </>
                }
                {
                    addUserModal &&  <AddUser handleClick={null} loading={handleOnLoad} handleBackDropOnClick={handleAddUserModal} handleGetUsers={getUsers}/>
                }
                
                </Users>
            </div>
        </DashboardContainer>
    )
}

export default UsersPage;
