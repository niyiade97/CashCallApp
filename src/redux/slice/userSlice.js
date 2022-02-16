import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


// export const fetchAsyncUsers = createAsyncThunk("users/fetchAsyncUsers",  
//     async () =>{
//         const response = await api
//             .get(usersAPI)
//             .catch(err =>{
//                 console.log(err);
//             })
//             return response.data;
// })

// export const deleteAsyncUser = createAsyncThunk("users/deleteAsyncUser",  
//     async (id) =>{
//         const dispatch = useDispatch();
//         const response = await api
//             .post(deleteUserAPI + id)
//             .catch(err =>{
//                 console.log(err);
//             })
//             // if(response.data.isSuccess){
//                 dispatch(fetchAsyncUsers());
//             // }
           
// })

const initialState = {
    users : []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: ( state, action) =>{
            state.users = action.payload;
        },
        addUsers: ( state, action) =>{
            state.users = action.payload;
        },
        deleteUser: ( state, action) =>{
            console.log(action.payload, state.users);
            const index = state.users.indexOf(action.payload);
            if (index > -1) {
                const tempArr = state.users.splice(index, 1); // 2nd parameter means remove one item only
                state.users = tempArr;
            }
        }
    }
    // extraReducers: {
    //     [fetchAsyncUsers.pending]: () =>{
    //         console.log('Pending');
    //     },
    //     [fetchAsyncUsers.fulfilled]: (state, { payload }) =>{
    //         console.log('Pending');
    //         return { ...state, users: payload}
    //     },
    //     [fetchAsyncUsers.rejected]: () =>{
    //         console.log('Rejected');
    //     },
    //     [deleteAsyncUser.fulfilled]: () =>{
    //         console.log('UserDeleted Successfully');
           
    //     }
    // }
})

export const { addUsers, getUsers, deleteUser} = userSlice.actions;
export const getAllUsers = (state) => state.users.users;
export default userSlice.reducer;