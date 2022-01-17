import React,{useState, useEffect} from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import Department from "../../modules/department/component/Departments"
import BackDrop from "../../modules/customElement/component/BackDrop"
import Loader from "../../modules/customElement/component/Loader"
import axios from "axios";
import AddDepartment from '../../modules/department/component/AddDepartment';
import DeleteModal from '../../modules/modal/component/DeleteModal';

function DepartmentPage(props) {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const departmentAPI = process.env.REACT_APP_GET_DEPARTMENT_API;
    const deleteDepartmentAPI = process.env.REACT_APP_DELETE_DEPARTMENT_API;
    const token = localStorage.getItem("token");
    const [ addDepartmentModal, setAddDepartmentModal ] = useState(false);
    const [ departments, setDepartments ] = useState([]);
    const [ deleteModal, setDeleteModal] = useState(false);
    const [ loading, setLoading ] = useState(false); 
    const [ id, setId ] = useState(null);
    
    const handleOnLoad = (state) =>{
        setLoading(state);
    }

    const handleDeleteModal = (id) =>{
        setId(id);
        setDeleteModal(!deleteModal);
    }

    const handleAddDepartmentModal = () =>{
        setAddDepartmentModal(!addDepartmentModal);
    }

    const getDepartment = () =>{
        handleOnLoad(true);
        axios.get(baseURL + departmentAPI,
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{
            handleOnLoad(false);
            setDepartments(res.data.data.map((data) =>{
                return{
                    departmentID: data.departmentID,
                    department: data.department
                }
            }))
        })
        .catch(err =>{
            handleOnLoad(false);
            console.log(err);
        })
    }

    const handleDelete = () =>{
        axios.post(baseURL + deleteDepartmentAPI + id,{},
            { 
                headers: {"Authorization" : `Bearer ${token}`} 
            }
        )
        .then((res) =>{ 
            console.log(res)
            getDepartment();
            setDeleteModal(false);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    useEffect(() => {
        getDepartment();
    }, [])
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <Department departments={departments} handleAddDepartmentModal={handleAddDepartmentModal} handleOnLoad={handleOnLoad} handleDeleteModal={handleDeleteModal}>
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
                    deleteModal &&
                    <DeleteModal
                        messageHeader={"Are you sure you want to delete this department"}
                        messageText1=""
                        messageText2=""
                        status={false}
                        handleDeleteModal={handleDeleteModal}
                        handleDelete={handleDelete}

                    />
                }
                {
                    addDepartmentModal &&  <AddDepartment loading={handleOnLoad} handleBackDropOnClick={handleAddDepartmentModal} handleGetDepartment={getDepartment}/>
                }
                </Department>
            </div>
        </DashboardContainer>
    )
}

export default DepartmentPage;
