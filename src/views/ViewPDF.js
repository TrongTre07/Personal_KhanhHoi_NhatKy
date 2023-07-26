import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});
var response;
const ViewPDF = (props) => { // Sử dụng functional component và nhận giá trị pdfPath từ props
//   console.log('pdfPath', pdfPath);
//   const source = { uri: pdfPath }; // Sử dụng đường dẫn từ props
  // const{navigation ,route} = props;
  // const {uri} = route.params;
  // console.log('uri', uri);
  // const babi ={uri};
  
  const abc = { uri: 'content://com.android.externalstorage.documents/document/primary%3ADocuments%2Fpdf%2Finvoice_1.pdf' };  
  convertContentUriToAbsolutePath(abc)
  .then((absolutePath) => {
    if (absolutePath) {
      console.log('Đường dẫn tệp tin tuyệt đối:', absolutePath);
      // Gửi absolutePath đến mã xử lý tiếp theo ở đây
    } else {
      console.log('Không thể chuyển đổi content URI thành đường dẫn tuyệt đối.', absolutePath);
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });
  return (
    <View style={styles.container}>
      <Pdf
        source={abc}
        style={styles.pdf}
      />
    </View>
  );
};
export const openPDFDocument = (uri) => {
    response =uri;
    console.log('========================', response);
  };

  async function convertContentUriToAbsolutePath(contentUri) {
    try {
      const realPath = await RNFetchBlob.fs.getContentIntentPath(contentUri);
      return realPath;
    } catch (error) {
      console.log('Error converting content URI to absolute path:', error);
      return null;
    }
  }
export default ViewPDF;