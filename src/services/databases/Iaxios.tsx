import DeviceDTO from "./DTO/DeviceDTO";
import HCDTO from "./DTO/HCDTO"

export default interface Iaxios{
    Login(param: object): Promise<any>
    GetDormitories:(params: string)=> Promise<any>
    GetHCsByDormID: (param: any, param1: any) => Promise<HCDTO[]>;
    GetDevicesByDormID:(param: any)=>Promise<DeviceDTO[]>;
}