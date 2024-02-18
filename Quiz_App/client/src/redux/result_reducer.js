import {createSlice} from "@reduxjs/toolkit"
export const resultreducer = createSlice({
    name:"result",
    initialState:{
        userId:null,
        result:[]
    },
    reducers:{
        setuserid:(state,action)=>{
            state.userId= action.payload;
        }
    }
})

export const {setuserid} = resultreducer.actions;
export default resultreducer.reducer