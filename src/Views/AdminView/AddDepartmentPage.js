import React,{useState} from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import BackDrop from "../../modules/customElement/component/BackDrop"
import { useNavigate } from "react-router-dom"
import AlertModal from "../../modules/modal/component/AlertModal"
import Loader from "../../modules/customElement/component/Loader"
import Departments from "../../modules/department/component/Departments"
import AddDepartment from "../../modules/department/component/AddDepartment"

function AddDepartmentPage() {
    const navigate = useNavigate();
    const [ successState, setSuccessState ] = useState(false);
    const [ adduser, setAdduser ] = useState(true);
    const [ loading, setLoading ] = useState(false);
    const handleOnClick = () =>{
        navigate("/users");
     }
     const handleSubmitButton = () =>{
        setSuccessState(true);
        setAdduser(false);
    }
    const handleClick = (successState, failedState) =>{
        console.log(successState, failedState)
        setSuccessState(successState);
    }
    const handleLoader = (status,state) =>{
        // if(state){
        //     setLoading(true);
        // }
        // else{
        //     setLoading(false); 
        //     if(status){
        //         setSuccessState(true);
        //         setAdduser(false);
        //     }
        //     else if(!status){
        //         setSuccessState(false);
        //         setAdduser(true);
        //     }
        // }
        setLoading(state);
        
    }
    
    return (
        <DashboardContainer>
            <div className="w-full h-screen flex relative">
                <BackDrop onclick={handleOnClick} indexValue={"10"}/>
                <Departments>

                {
                    loading &&
                    <>
                        <BackDrop onclick={handleOnClick} indexValue={"30"}/>
                        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 transform">
                            <Loader color="#163F86"/>
                        </div>
                    </>
                }
                {

                    (adduser) &&
                    <AddDepartment handleClick={handleSubmitButton} loading={handleLoader}/>
                }
                {
                        successState &&
                        <AlertModal
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        }
                        messageHeader="Success"
                        messageText1="Successfully added new user!"
                        messageText2=""
                        btnText=""
                        btnText2="Back"
                        btnActive={false}
                        handleClick={handleClick}
                    />
                    }
                </Departments>
            </div>
        </DashboardContainer>
    )
}

export default AddDepartmentPage;
