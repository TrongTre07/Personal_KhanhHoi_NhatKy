import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';

// import Table2 from './itemTongCucThuySan/Table2';

import moment from 'moment';
import styles from './styles';
import {UserContext} from '../../contexts/UserContext';

const TongCucThuySanView = () => {
  const {data03_PLII, setData03_PLII} = useContext(UserContext);
  const handleChangeTuNgay = date => {
    try {
      // Create a copy of data0201
      const updateddata03_PLII = {...data03_PLII};
      updateddata03_PLII.tungay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData03_PLII(updateddata03_PLII);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleChangeDenNgay = date => {
    try {
      // Create a copy of data0201
      const updateddata03_PLII = {...data03_PLII};
      updateddata03_PLII.denngay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData03_PLII(updateddata03_PLII);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>
          MẪU BIÊN BẢN KIỂM TRA TÀU CÁ CẬP CẢNG
        </Text>
        <Text style={styles.txtHeader}>
          {'\n'} CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </Text>
        <Text style={styles.txtHeader}>Độc lập - Tự do - Hạnh phúc</Text>
        <Text style={styles.txtHeader}>-----------</Text>
      </View>

      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>BIÊN BẢN KIỂM TRA TÀU CÁ CẬP CẢNG</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.txtHeader}>SỐ:</Text>
          <TextInput
            keyboardType="numeric"
            value={data03_PLII.sobienban.toString()}
            style={styles.txtHeader}
            placeholder="........."
            onChangeText={text =>
              setData03_PLII({...data03_PLII, sobiennhan: text})
            }
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
      </View>
      {/* <Table1 /> */}
      {/* <Table3 /> */}
    </View>
  );
};

export default TongCucThuySanView;
