import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentProp } from "../Types/type";
interface singleStudnetProp{
    student:StudentProp|null
    isLoading:boolean,
    error:string|null
}
const initialState:singleStudnetProp={
    student:null,
    isLoading:false,
    error:null
}

const singleSTudentSlice= createSlice({
    name:"singleStudent",
    initialState,
   reducers:{
    setStudent:(state,action:PayloadAction<StudentProp>)=>{
        state.student = action.payload
    },
    setloading:(state,action:PayloadAction<boolean>)=>{
        state.isLoading = action.payload

    },
    setError:(state,action:PayloadAction<string>)=>{
        state.error= action.payload

    }
   }

})

export const {setError,setStudent,setloading}=singleSTudentSlice.actions;
export default singleSTudentSlice.reducer