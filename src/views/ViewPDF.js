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

const ViewPDF = (name) => { 
  const pdf = name;
  const localfile = { uri: '/storage/emulated/0/Android/data/com.khanhhoiapp/files/Dowload/invoice_1.pdf' };  
  return (
    <View style={styles.container}>
      <Pdf
        source={localfile}
        style={styles.pdf}
      />
    </View>
  );
};

export default ViewPDF;