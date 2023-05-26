import axios from '@/api/index';

export const AccountAPI = {
  getDataAccount(dataJson) {
    const url = 'account/';
    const data = dataJson;

    return axios.post(url, data);
  },
};
