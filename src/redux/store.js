import { configureStore } from  "@reduxjs/toolkit";
import usersReducer from "./slice/userSlice";
import profileReducer from "./slice/profileSlice";
import departmentSlice from "./slice/departmentSlice";

export const store = configureStore({
    reducer: {
      users: usersReducer,
      profile: profileReducer,
      departments: departmentSlice
    }, 
  })
