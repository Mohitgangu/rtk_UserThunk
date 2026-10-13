import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"

const Store=configureStore({
    reducer:{
        User:userReducer
    }
})

export default Store