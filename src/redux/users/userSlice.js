import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from  "../../Utils/api";
import { useDispatch } from "react-redux";
const usersAPI = process.env.REACT_APP_GET_USERS_API;
const deleteUserAPI = process.env.REACT_APP_DELETE_USER_API;



export const fetchAsyncUsers = createAsyncThunk("users/fetchAsyncUsers",  
    async () =>{
        const response = await api
            .get(usersAPI)
            .catch(err =>{
                console.log(err);
            })
            return response.data;
})

export const deleteAsyncUser = createAsyncThunk("users/deleteAsyncUser",  
    async (id) =>{
        const dispatch = useDispatch();
        const response = await api
            .post(deleteUserAPI + id)
            .catch(err =>{
                console.log(err);
            })
            // if(response.data.isSuccess){
                dispatch(fetchAsyncUsers());
            // }
           
})

const initialState = {
    users : {}
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: ( state, action) =>{

        },
        addUsers: ( state, {payload}) =>{
            state.users = payload;
        },
        deleteUser: ( state, action) =>{
            
        }
    },
    extraReducers: {
        [fetchAsyncUsers.pending]: () =>{
            console.log('Pending');
        },
        [fetchAsyncUsers.fulfilled]: (state, { payload }) =>{
            console.log('Pending');
            return { ...state, users: payload}
        },
        [fetchAsyncUsers.rejected]: () =>{
            console.log('Rejected');
        },
        [deleteAsyncUser.fulfilled]: () =>{
            console.log('UserDeleted Successfully');
           
        }
    }
})

export const { addUsers, getUsers, deleteUser} = userSlice.actions;
export const getAllUsers = (state) => state.users.users;
export default userSlice.reducer;