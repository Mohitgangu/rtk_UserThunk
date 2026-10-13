import { createSlice } from "@reduxjs/toolkit";

const Userslice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
       addUser:(state,action)=>{
            return action.payload
       }
    }
})

export default Userslice.reducer

export const{addUser}=Userslice.actions