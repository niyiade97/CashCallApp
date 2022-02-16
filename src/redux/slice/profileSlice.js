import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profiles : {}
}

const profileSlice = createSlice({
    name: "profiles",
    initialState,
    reducers: {
        createProfile: (state, action) =>{
            state.profiles = action.payload;
        },
        updateProfile: ( state, action) =>{
            state.profiles = action.payload;
        }
    }
})

export const { createProfile, updateProfile } = profileSlice.actions;
export const getAllProfile = (state) => state.profiles.profiles;
export default profileSlice.reducer;