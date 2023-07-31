import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Storage from '../utils/storage';
import DeviceInfo from 'react-native-device-info';

const instance = axios.create({
  baseURL: 'https://api-bieumau.khanhhoi.net/',
});

instance.interceptors.request.use(
  async config => {

    const Clientip = await DeviceInfo.getIpAddress();
    console.log('clientip',Clientip)
      
    const APIKey = await Storage.getItem('token');
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
