import React,{ useState } from 'react'
import TextField from '../../customElement/component/TextField';
import { FaWindowClose } from 'react-icons/fa';
import { createDepartment } from  "../../../services/departments";

function AddDepartment({ loading, handleBackDropOnClick, getDepartments }) {
    const [ message, setMessage ] = useState({
        msg: "",
        status:""
    });
    const [ formErrors, setFormErrors ] = useState({
        status: false
    })
    const [ departmentDetails, setDepartmentDetails ] = useState({
        departmentName: "",
        lineManagerName:"",
        lineManagerEmail:""
    });

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(departmentDetails));
        if(!validate(departmentDetails).status){
            const payload = {
                departmentName: departmentDetails.departmentName
            }
            AddNewDepartment(payload);
        }
    }
    
    const handleOnChange = (name, value) =>{
        setDepartmentDetails((prevData) =>{
            return{
                ...prevData,
                [name]: value
            }
        })
    }

    const validate = (data) =>{
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const errors ={
            status: false
        }
        if(!data.lineManagerEmail){
            errors.lineManagerEmail = "LineManager's Email is required";
            errors.status = true;
        }
        else if(emailRegex.test(data.lineManagerEmail) === false){
            errors.lineManagerEmail = "LineManager's Email is not valid";
            errors.status = true;
        }
        if(!data.lineManagerName){
            errors.lineManagerName = "LineManager's Name is required";
            errors.status = true;
        }
        if(!data.departmentName){
            errors.departmentName = "Department Name is required";
            errors.status = true;
        }
        
        return errors;
    }

    const ClearInput = () =>{
        setDepartmentDetails({
            departmentName: "",
            lineManagerName:"",
            lineManagerEmail:""
        })
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }

    const AddNewDepartment = (payload) =>{
        loading(true);
        createDepartment(payload)
            .then((res)=>{
                if(res.data.isSuccess){
                    getDepartments();
                    loading(false);
                    ClearInput();
                    setMessage({
                        msg: "Department Added Successfully !!",
                        status:"1"
                    });
                }
                else{
                    loading(false);
                    ClearInput();
                    setMessage({
                        msg: res.data.message,
                        status:"0"
                    });
                }
            })
    }

    return (
        <>
             <div className={`fixed top-0 w-full h-full bg-black opacity-50 z-${20}`} onClick={handleBackDropOnClick}>
            </div>
            <div className="absolute transform -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 w-3/4 py-14 rounded-xl bg-white z-20">
            <div className="w-11/12 m-auto">
                <div className="pl-4 pb-3 flex justify-between">
                    <h1 className="text-color24 font-bold text-xl">Add Departmet</h1>
                    <i onClick={handleBackDropOnClick} className="text-blue-800 hover:text-blue-500">
                        <FaWindowClose />
                    </i>
                </div>
                <form onSubmit={handleOnSubmit}>
                {
                    message  !== "" &&
                    <p className={`${message.status === "0" && "text-red-500 bg-red-300"} ${message.status === "1" && "text-green-700 bg-green-200"} p-4 text-left my-3`}>{message.msg}</p>
                }
                <div className="flex flex-wrap">
                    <TextField type="text" name="departmentName" placeholder="Department" label="Departmet Name" onChange={handleOnChange} disabled={false} width="2/4" value={departmentDetails.departmentName} formError={formErrors.departmentName}/>
                    <TextField type="text" name="lineManagerName" placeholder="Ademola" label="Line Manager" onChange={handleOnChange} disabled={false} width="2/4" value={departmentDetails.lineManagerName} formError={formErrors.lineManagerName} />
                    <TextField type="text" name="lineManagerEmail" placeholder="niyiade97@gmail.com" label="Line Manager's Email" onChange={handleOnChange} disabled={false} width="2/4" value={departmentDetails.lineManagerEmail} formError={formErrors.lineManagerEmail}/>
                    
                    <div className="w-full py-3 text-center">
                        <button type="submit" className="add-user-btn border w-5/12 bg-blue-800 text-white h-14 rounded-full text-lg font-semibold hover:border-blue-800 hover:bg-white hover:text-blue-800">
                        Submit
                        </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </>
        
    )
}

export default AddDepartment;
