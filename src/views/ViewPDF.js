import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


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
export default ViewPDF;