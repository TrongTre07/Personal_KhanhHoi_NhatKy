import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Storage from '../utils/storage';
import DeviceInfo from 'react-native-device-info';

// const uploadFile = axios.create({
//   baseURL: 'https://api-bieumau.khanhhoi.net/',
// });
// instance.interceptors.request.use(
//   async config => {
//     const APIKey = await Storage.getItem('token');
//     const Clientip = await DeviceInfo.getIpAddress();

//     config.headers['Clientip'] = Clientip;
//     config.headers['APIKey'] = APIKey;

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );
const uploadFile = async (file) => {
    try{
        const baseURL= 'https://filecloud.khanhhoi.net/Img/uploadForm';
        const APIKey = await Storage.getItem('token');
        const Clientip = await DeviceInfo.getIpAddress();
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'APIKey': APIKey,
                'Clientip': Clientip,
            }
        };

        return await axios.post(baseURL, formData, config);
    }catch(error){
        console.log(error);
    }
    
}

export default uploadFile;
