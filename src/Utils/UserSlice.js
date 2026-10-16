import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser= createAsyncThunk("kuchbhilikhdo", async(_NEVER,{rejectWithValue})=>{
    try {
         const res = await fetch(
                'https://jsonplaceholder.typicode.com/users/'
            );
        const data= await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const userSlice=createSlice({ 
    name:"userData",
    initialState:{
        loading:false,
        error:null,
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUser.pending,(state,action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            return {
                error:null,
                loading:false,
                data:action.payload
            }
        })
        .addCase(getUser.rejected,(state,action)=>{
            return {
                data:[],
                error:action.payload,
                loading:false
            }
        })
    }
})











// const Userslice=createSlice({
//     name:"user",
//     initialState:[],
//     reducers:{
//        addUser:(state,action)=>{
//             return action.payload
//        }
//     }
// })

export default userSlice.reducer

// export const{addUser}=Userslice.actions