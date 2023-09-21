import axios from 'axios';
import {
  DEVICES_URL,
  DORMITORIES_URL,
  HCs_URL,
  LOGIN_URL,
} from '../assets/URI/API';
import Iaxios from './databases/Iaxios';
import HCDTO from './databases/DTO/HCDTO';

export default class SmartAPI implements Iaxios {
  constructor() {}

  async GetHCsByDormID(DormID: any): Promise<HCDTO[]> {
    let config = {
      headers: {
        Authorization: 'Bearer ',
        'X-DormitoryId': DormID,
      },
    };
    const data = {
      updatedAt: '1970-01-01T00:00:00.000Z',
      skip: 0,
      take: 1000,
      orderBy: 'id',
      orderType: 'ASC',
    };
    try {
      const response = await axios.post(HCs_URL, data, config);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async Login(info: Object) {
    try {
      const response = await axios.post(LOGIN_URL, info);
      return response;
    } catch (error) {
      console.log(error);
      return -1;
    }
  }
  async GetDormitories(refreshToken: string) {
    const headers = {
      Cookie: 'RefreshToken' + refreshToken,
    };
    try {
      const response = await axios.post(
        DORMITORIES_URL,
        {
          updatedAt: '1970-01-01T00:00:00.000Z',
          skip: 0,
          take: 1000,
          orderBy: 'id',
          orderType: 'ASC',
        },
        {headers},
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async GetDevicesByDormID(DormID: any) {
    const body = {
      updatedAt: '1970-01-01T00:00:00.000Z',
          skip: 0,
          take: 1000,
          orderBy: 'id',
          orderType: 'ASC',
    }
    const config = {
      headers:{
        "Authorization": `Bearer`,
        "X-DormitoryId": DormID
      }
    }
    try {
      const response =await axios.post(DEVICES_URL, body, config );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
