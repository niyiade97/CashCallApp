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
import { getUser,deleteUser } from "../../services/users"


function UsersPage(props) {
    const dispatch = useDispatch();
    
    const userList = useSelector((state) => state.users)
    
    const usersAPI = process.env.REACT_APP_GET_USERS_API;
    const [ loading, setLoading ] = useState(false);
    const [ addUserModal, setAdUserModal ] = useState(false);
    const [ users, setUsers ] = useState([]);
    const baseURL = process.env.REACT_APP_BASE_URL;
    const deleteUserAPI = process.env.REACT_APP_DELETE_USER_API;
    const token = localStorage.getItem("adminToken");
    const [ deleteModal, setDeleteModal] = useState(false);
    const [ deleteData, setDeleteData ] = useState({});
    
    const handleOnLoad = (state) =>{
        setLoading(state)
    }
    const handleAddUserModal = () =>{
        setAdUserModal(!addUserModal);
    }
    const handleDeleteModal = (data) =>{
        setDeleteData(data);
        console.log(data)
        setDeleteModal(!deleteModal);
    }
    const onclick = () =>{
        
    }

    const handleDelete = () =>{
        deleteUser(deleteData.id)
            .then((res) =>{ 
                console.log(res)
                // dispatch(deleteUser(deleteData.index));
                getUsers();
                setDeleteModal(false);
            })
            .catch(err =>{
                console.log(err);
            })
    }

    const getUsers = async () =>{
        // handleOnLoad(true)
        getUser()
        .then((res) =>{
            handleOnLoad(false)
            dispatch(addUsers(res.data.data));
        })
        .catch(err =>{
            // err.response..status
            handleOnLoad(false);
        })
    }
    useEffect(() => {
        console.log(userList)
        getUsers();
    }, [])
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <Users handleOnLoad={handleOnLoad} handleAddUserModal={handleAddUserModal} handleDeleteModal={handleDeleteModal} users={userList}>
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
