import axios from 'axios';
import RNFS from 'react-native-fs'; // Import thư viện RNFS

const uploadFile = async (filePath) => {
    try {
      const formData = new FormData();
  
      // Đọc tệp PDF
    //   const fileData = await RNFS.readFile(filePath, 'base64'); 

      // Tạo đối tượng file để thêm vào biểu mẫu
      const file = {
        uri: 'file:'+filePath, // Dữ liệu của tệp đã đọc
        name: 'filemau.pdf', // Tên tệp trên server
        type: 'application/pdf', // Loại tệp
      };
  
      formData.append('_dataFile', file); // Đặt tên của trường biểu mẫu là '_dataFile'
  
      const baseURL = 'https://filecloud.khanhhoi.net/Img/uploadForm';
  
    //   // Thực hiện yêu cầu POST bằng fetch
    //   fetch(baseURL, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     body: formData,
    //   })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       console.log(responseJson);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',

            },
          };
      
        const response = await axios.post(baseURL, formData, config);
        console.log(response.data);
  
    } catch (error) {
      console.log('error', error.message);
    }
  };
  

export default uploadFile;