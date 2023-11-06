import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getResponse=createAsyncThunk("/user/getResponse",async (body,_)=>{
    try{
        
    
        const response=await axios.post("http://localhost:3000/post",body);
        
        return response.data.result;

    }
    catch(err){
        console.log(err.message);
 
    }
    
  
})
export const getResponseFromOpenAI=createAsyncThunk("/user/getResponseFromOpenAi",async (body,_)=>{
    try{
        
    
        const response=await axios.post("http://localhost:3000/getResponse",body);
        
        return response.data;

    }
    catch(err){
        console.log(err.message);
 
    }
    
  
})
const appSlice=createSlice({
    name:"appSlice",
    initialState:{
        text:"",
        text2:""
    },

    extraReducers:(builder)=>{
        builder.addCase(getResponse.fulfilled,(state,action)=>{
            state.text=action.payload;
             
        })
        .addCase(getResponseFromOpenAI.fulfilled,(state,action)=>{
            state.text2=action.payload;
        })

    }
})
export default appSlice.reducer;
