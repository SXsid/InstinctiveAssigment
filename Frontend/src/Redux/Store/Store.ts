import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../signleStudetnSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { studentSlice } from "../StudenSlice";


export const  StudentStore = configureStore({
    reducer:{
        singleStudent:StudentReducer,
        [studentSlice.reducerPath]:studentSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(studentSlice.middleware)
    },
})

setupListeners(StudentStore.dispatch)
export type RootState = ReturnType<typeof StudentStore.getState>;
export type AppDispatch = typeof StudentStore.dispatch;