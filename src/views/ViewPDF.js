import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, PermissionsAndroid } from 'react-native';
import Pdf from 'react-native-pdf';
import { FormContext } from '../contexts/FormContext';
import FileViewer from "react-native-file-viewer";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});

const ViewPDF = () => {
  const { thongTinTau } = useContext(FormContext);
  console.log('========================', thongTinTau.dairy_name);

  const pdfPath = `file:///storage/emulated/0/Documents/pdf/abc.pdf`;

  useEffect(() => {
    requestExternalStoragePermission();
  }, []);

  const requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'External Storage Permission',
          message: 'This app needs access to your external storage to open PDF files.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('External storage permission granted');
      } else {
        console.log('External storage permission denied');
      }
    } catch (err) {
      console.warn('Error while requesting external storage permission:', err);
    }
  };

  let yourPDFURI = { uri: pdfPath, cache: true };
  
  return (
    <View style={{ flex: 1 }}>
      <Pdf
        ref={(pdf) => {
          this.pdf = pdf;
        }}
        source={yourPDFURI}
        style={{ flex: 1 }}
        onError={(error) => {
          console.log(error);
        }}
      />
    </View>
  );
};

export default ViewPDF;