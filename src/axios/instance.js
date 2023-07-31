import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Storage from '../utils/storage';
import DeviceInfo from 'react-native-device-info';

// or ES6+ destructured imports

// import { getUniqueId, getManufacturer } from 'react-native-device-info';



const instance = axios.create({
  baseURL: 'https://api-bieumau.khanhhoi.net/',
});

let Clientip;


instance.interceptors.request.use(
  async config => {

    Clientip = await DeviceInfo.getIpAddress();
    console.log('clientip',Clientip)
    
    const APIKey = await Storage.getItem('token');
    config.headers['Clientip'] = Clientip;
    config.headers['APIKey'] = APIKey;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
