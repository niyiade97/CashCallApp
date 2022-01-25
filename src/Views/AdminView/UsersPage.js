import React,{useState, useEffect} from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer";
import Users from "../../modules/userManagement/components/Users"
import BackDrop from "../../modules/customElement/component/BackDrop"
import Loader from "../../modules/customElement/component/Loader"
import AddUser from "../../modules/userManagement/components/AddUser"
import axios from "axios";
import DeleteModal from "../../modules/modal/component/DeleteModal"
import { useSelector, useDispatch } from "react-redux";
import { addUsers, fetchAsyncUsers } from '../../redux/users/userSlice';
import api from "../../Utils/api";

function UsersPage(props) {
    // const dispatch = useDispatch();
    
    // const userList = useSelector((state) => state.users.value)
    const usersAPI = process.env.REACT_APP_GET_USERS_API;
    const [ loading, setLoading ] = useState(false);
    const [ addUserModal, setAdUserModal ] = useState(false);
    const [ users, setUsers ] = useState([]);
    const baseURL = process.env.REACT_APP_BASE_URL;
    const deleteUserAPI = process.env.REACT_APP_DELETE_USER_API;
    const token = localStorage.getItem("adminToken");
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
        axios.post(baseURL + deleteUserAPI + id,{},
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

    const getUsers = async () =>{
        // const response = await api
        // .get(usersAPI)
        // .catch(err =>{
        //     console.log(err);
        // })
        // dispatch(addUsers(response.data));
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
            // dispatch(addUser(res.data.data));
        })
        .catch(err =>{
            handleOnLoad(false);
        })
    }
    useEffect(() => {
        // dispatch(fetchAsyncUsers())
        getUsers();
    }, [])
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <Users handleOnLoad={handleOnLoad} handleAddUserModal={handleAddUserModal} handleDeleteModal={handleDeleteModal} users={users}>
                {
                    loading &&
                    <>
                        <BackDrop indexValue={"40"} onclick={onclick}/>
                        <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 transform">
                            <Loader color="#FFFFFF"/>
                        </div>
                    </>
                }
                {
                    deleteModal &&
                    <DeleteModal
                        messageHeader={"Are you sure you want to delete this user"}
                        messageText1=""
                        messageText2=""
                        status={false}
                        handleDeleteModal={handleDeleteModal}
                        handleDelete={handleDelete}

                    />
                }
                {
                    addUserModal &&  <AddUser loading={handleOnLoad} handleBackDropOnClick={handleAddUserModal} handleGetUsers={getUsers}/>
                }
                
                </Users>
            </div>
        </DashboardContainer>
    )
}

export default UsersPage;
