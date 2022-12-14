import { createSlice  } from "@reduxjs/toolkit";
import { getDepartment } from "../../services/departments";


const initialState = {
    department : []
}

const departmentSlice = createSlice({
    name: "departments",
    initialState,
    reducers: {
        createDepartments : (state, action) =>{
            state.department = action.payload
        },
        deleteDepartment : (state, action) =>{
            state.department = action.payload
        }
    }
})

export const { createDepartments, deleteDepartment } = departmentSlice.actions
export default departmentSlice.reducer;