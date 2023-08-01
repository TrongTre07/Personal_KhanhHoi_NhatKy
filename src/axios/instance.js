import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Storage from '../utils/storage';
import DeviceInfo from 'react-native-device-info';

const instance = axios.create({
  baseURL: 'https://api-bieumau.khanhhoi.net/',
});
instance.interceptors.request.use(
  async config => {
    const APIKey = await Storage.getItem('token');
    const Clientip = await DeviceInfo.getIpAddress();

    config.headers['Clientip'] = Clientip;
    config.headers['APIKey'] = APIKey;

    return config;
  },
  error => {
    console.log('hehe',error);
    return Promise.reject(error);
  },
);

export default instance;
