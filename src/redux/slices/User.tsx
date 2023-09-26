import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState:{
        email:''
    },
    reducers:{
        setEmail: (state, action)=>{
            state.email = action.payload;
        }
    }
})
export const {setEmail} = UserSlice.actions;
export default UserSlice.reducer;