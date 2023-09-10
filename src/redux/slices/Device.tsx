import { createSlice } from "@reduxjs/toolkit";

export const Device = createSlice({
    name : 'Device',
    initialState : {
        status: false,
    },
    reducers:{
        setStatus :(status, action)=>{
            status.status = action.payload
        }
    }
}) 


export default Device.reducer;