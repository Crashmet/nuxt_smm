import axios from 'axios';

const defaultCongig = {
  baseURL: process.env.VUE_APP_ACC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const defaultAPIInstance = axios.create(defaultCongig);

export default defaultAPIInstance;
