import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});

const ViewPDF = () => { // Sử dụng functional component và nhận giá trị pdfPath từ props
//   console.log('pdfPath', pdfPath);
//   const source = { uri: pdfPath }; // Sử dụng đường dẫn từ props
  const abc = { uri: 'content://com.android.externalstorage.documents/document/primary%3ADocuments%2FDownloader%2Finvoice_2.pdf' };  
  return (
    <View style={styles.container}>
      <Pdf
        source={abc}
        style={styles.pdf}
      />
    </View>
  );
};
const openPDFDocument = (uri) => {
    Linking.openURL(uri).catch((err) => console.error('An error occurred: ', err));
  };
export default ViewPDF;