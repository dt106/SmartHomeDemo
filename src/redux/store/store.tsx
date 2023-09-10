import {configureStore} from '@reduxjs/toolkit'
import { Device } from './../slices/Device';
import DeviceReducer from '../slices/Device';

export const store = configureStore({
    reducer:{
        Device: DeviceReducer
    }
})