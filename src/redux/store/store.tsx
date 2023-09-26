import {configureStore} from '@reduxjs/toolkit';
import DeviceReducer from '../slices/Device';
import RoomReducer from '../slices/Room';
import UserReducer from '../slices/User';

export const store = configureStore({
    reducer:{
        Device: DeviceReducer,
        Room: RoomReducer,
        User: UserReducer
    }
})