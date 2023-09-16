import {configureStore} from '@reduxjs/toolkit';
import DeviceReducer from '../slices/Device';
import RoomReducer from '../slices/Room';

export const store = configureStore({
    reducer:{
        Device: DeviceReducer,
        Room: RoomReducer,
    }
})