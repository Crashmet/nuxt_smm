import axios from '@/api/index';

export const RegisterAPI = {
  register(dataJson) {
    const url = 'account/register/';
    const data = dataJson;

    return axios.post(url, data);
  },
};
