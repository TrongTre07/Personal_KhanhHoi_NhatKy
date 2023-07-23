import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Storage from '../utils/storage';

const instance = axios.create({
  baseURL: 'https://api-bieumau.khanhhoi.net/',
});


const Clientip = '192.168.1.2'

instance.interceptors.request.use(
  async config => {
    const APIKey =await Storage.getItem('token');
    console.log('APIKEY: ', APIKey);
    config.headers['Clientip'] = Clientip;
    config.headers['APIKey'] = APIKey;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
