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
  const {data04_PLII, setData04_PLII} = useContext(UserContext);
  const handleChangeTuNgay = date => {
    try {
      // Create a copy of data0201
      const updateddata04_PLII = {...data04_PLII};
      updateddata04_PLII.tungay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData04_PLII(updateddata04_PLII);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleChangeDenNgay = date => {
    try {
      // Create a copy of data0201
      const updateddata04_PLII = {...data04_PLII};
      updateddata04_PLII.denngay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData04_PLII(updateddata04_PLII);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>
        MẪU BIÊN BẢN KIỂM TRA TÀU CÁ RỜI CẢNG
        </Text>
        <Text style={styles.txtHeader}>
          {'\n'} CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </Text>
        <Text style={styles.txtHeader}>Độc lập - Tự do - Hạnh phúc</Text>
        <Text style={styles.txtHeader}>-----------</Text>
      </View>

      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>BIÊN BẢN KIỂM TRA TÀU CÁ RỜI CẢNG</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.txtHeader}>SỐ:</Text>
          <TextInput
            
            value={data04_PLII.sobienban.toString()}
            style={styles.txtHeader}
            placeholder="........."
            onChangeText={text =>
              setData04_PLII({...data04_PLII, sobienban: text})
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
