import axios from 'axios';
import {LOGIN_URL} from './../assets/URI/API';

export default class loginSV {
  constructor() {}
  async Login(info: Object) {
    // console.log(info);
    // axios
    //   .post(LOGIN_URL, info)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    try {
        const response = await axios.post(LOGIN_URL,info)
        return response;
    } catch (error) {
        console.log(error)
        return -1
    }
  }
}
