import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

import { UserContext } from '../contexts/UserContext';

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

const ViewPDF = ({ route }) => { // Chú ý destructuring của tham số route
  const id = route.params?.id;
  const data = route.params?.data;
  const name = data.find((item) => item.id === id);

  console.log(name);

  const localfile = { uri: `/storage/emulated/0/Android/data/com.khanhhoiapp/files/pdf/${name.dairy_name}.pdf` };  
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