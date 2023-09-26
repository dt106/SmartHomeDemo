import axios from 'axios';
import {
  CRM_URL,
  DEVICES_URL,
  DORMITORIES_URL,
  HCs_URL,
  ISSUE_CREATE_URL,
  ISSUE_DELETE_URL,
  LIST_ISSUE,
  LOGIN_URL,
} from '../assets/URI/API';
import Iaxios from './databases/Iaxios';
import HCDTO from './databases/DTO/HCDTO';
import IssueDTO from './databases/DTO/Issue';

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
    };
    const config = {
      headers: {
        Authorization: `Bearer`,
        'X-DormitoryId': DormID,
      },
    };
    try {
      const response = await axios.post(DEVICES_URL, body, config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async CountIssue(DormID: string) {
    const config = {
      headers: {
        Authorization: `Bearer`,
        'X-DormitoryId': DormID,
      },
    };
    const body = {
      id: {},
      deviceId: {},
      senderId: {},
      recipientId: {},
      time: {},
      skip: 0,
      take: 20,
    };
    try {
      const response = await axios.post(CRM_URL, body, config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async GetListIssue() {
    const body = {
      id: {},
      deviceId: {},
      senderId: {},
      recipientId: {},
      time: {},
      skip: 0,
      take: 20,
    };
    try {
      const response: IssueDTO[] = (await axios.post(LIST_ISSUE, body)).data;
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async CreateIssue(issueTitle: string, issue: string) {
    const body = {
      title: issueTitle,
      description: issue,
      issueFileMappings: [],
    };
    try {
      const response = await axios.post(ISSUE_CREATE_URL, body);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async DeleteIssue(param: any) {
      try {
        const response = await axios.post(ISSUE_DELETE_URL, param);
        return response;
      } catch (error) {
        console.log(error)
      }
  }
}
