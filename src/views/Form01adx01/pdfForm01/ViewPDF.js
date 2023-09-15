import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';

import { UserContext } from '../../../contexts/UserContext';

const ViewPDF = ({ route }) => {

  // const { data } = useContext(UserContext);

  // const id = route.params?.id;
  // const data2 = route.params?.data;
  // let name;
  // try {
  //   name = data2?.find((item) => item?.id === id);
    
  //   if(!name.dairy_name){
  //     name = { dairy_name: 'filemau' };

  //   }
  // } catch (error) {
  //   if(data.dairy_name){
  //     name=data
  //   }else

  //   name = { dairy_name: 'filemau' };
  // }

  const [fileExists, setFileExists] = useState(false);
  const localfile = { uri: `/storage/emulated/0/Android/data/com.khanhhoiapp/files/pdf/filemau.pdf` };

  useEffect(() => {
    checkFileExists();
  }, []);

  const checkFileExists = async () => {
    try {
      const exists = await RNFS.exists(localfile.uri);
      setFileExists(exists);
    } catch (error) {
      console.log(error);
      setFileExists(false);
    }
  };

  if (!fileExists) {
    return (
      <View style={styles.container}>
        <Text style={styles.messageText}>Bạn phải tải trước mới xem được.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pdf source={localfile} style={styles.pdf} />
    </View>
  );
};

export default ViewPDF;

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
  messageText: {
    fontSize: 16,
    color: 'red',
  },
});