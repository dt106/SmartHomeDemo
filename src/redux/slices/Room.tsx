import { createSlice } from "@reduxjs/toolkit";

export const RoomSlice = createSlice({
    name : 'Room',
    initialState:{
        name:'',
        image:'',
        isRefresh: false,
    },
    reducers:{
        setName:(state, action)=>{
            state.name = action.payload
        },
        setImage:(state,action)=>{
            state.image = action.payload
        },
        setRefresh: (state, action)=>{
            state.isRefresh  = action.payload
        }
    }
})
export const  {setName, setImage, setRefresh} = RoomSlice.actions;  
export default RoomSlice.reducer;