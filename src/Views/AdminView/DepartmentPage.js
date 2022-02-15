import React,{useState, useEffect} from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import Department from "../../modules/department/component/Departments"
import BackDrop from "../../modules/customElement/component/BackDrop"
import Loader from "../../modules/customElement/component/Loader"

import AddDepartment from '../../modules/department/component/AddDepartment';
import DeleteModal from '../../modules/modal/component/DeleteModal';
import { useSelector, useDispatch } from "react-redux";
import { getDepartment } from "../../services/departments";
import { createDepartments, deleteDepartment } from "../../redux/slice/departmentSlice";

function DepartmentPage(props) {
    const departmentList = useSelector((state) => state.departments.department);
    const dispatch = useDispatch();

    const [ addDepartmentModal, setAddDepartmentModal ] = useState(false);
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

    const loadDepartment = () =>{
        getDepartment()
            .then((res) =>{
                dispatch(createDepartments(res.data.data));
                // setDepartments(res.data.data.map((data) =>{
                //     return{
                //         departmentID: data.departmentID,
                //         department: data.department
                //     }
                // }))
            })
            .catch(err =>{
                console.log(err);
            })
    }

    const handleDelete = () =>{
        deleteDepartment(id)
            .then((res) =>{ 
                loadDepartment();
                setDeleteModal(false);
            })
            .catch(err =>{
                console.log(err);
            })
    }
    useEffect(() => {
        loadDepartment();
    }, [])
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <Department departments={departmentList} handleAddDepartmentModal={handleAddDepartmentModal} handleOnLoad={handleOnLoad} handleDeleteModal={handleDeleteModal} totalDepartment={departmentList.length}>
                {
                    loading &&
                    <>
                        <BackDrop indexValue={"40"}/>
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
                    addDepartmentModal &&  <AddDepartment loading={handleOnLoad} handleBackDropOnClick={handleAddDepartmentModal} getDepartments={loadDepartment}/>
                }
                </Department>
            </div>
        </DashboardContainer>
    )
}

export default DepartmentPage;
