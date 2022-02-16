import { configureStore } from  "@reduxjs/toolkit";
import usersReducer from "./slice/userSlice";
import profileReducer from "./slice/profileSlice";
import departmentReducer from "./slice/departmentSlice";

export const store = configureStore({
    reducer: {
      users: usersReducer,
      profile: profileReducer,
      departments: departmentReducer
    }, 
  })
