import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
// import Table2 from './itemTongCucThuySan/Table2';
import Table3 from './itemTongCucThuySan/Table3';
import {FormContext} from '../../../contexts/FormContext';

import {UserContext} from '../../../contexts/UserContext.js';
import CustomDatePicker from '../../others/CustomDatePicker';
import moment from 'moment';

const TongCucThuySanView = () => {
  // const [data0301, setData0301] = useState({
  //   tau_tongcongsuatmaychinh: 12,
  //   tau_chieudailonnhat: 12,
  //   dairyname: 'BaoCaoKhaiThacThuySan_11092023',
  //   denngay: '2023-09-11',
  //   tblreport_0301_ls: [
  //     {
  //       id: 0,
  //       tenloai: '1111',
  //       sanluong: 12,
  //     },
  //     {
  //       id: new Date(),
  //       tenloai: '2222',
  //       sanluong: 11,
  //     },
  //   ],
  //   chuyenbien_so: 2,
  //   nam: 999999,
  //   tungay: '0001-01-01',
  //   ten_chutau_thuyentruong: 'abc',
  //   diachi: '',
  //   tau_bs: 'HC-1234-TS1',
  //   nghekhaithac: '',
  //   tongsolaodong: 0,
  //   songaykhaithac: 0,
  //   so_meluoi: 0,
  //   ngutruong_vinhbacbo: false,
  //   ngutruong_trungbo: true,
  //   ngutruong_dongnambo: false,
  //   ngutruong_taynambo: false,
  //   ngutruong_giuabiendong: false,
  //   tongsanluong: 0,
  // });
  const {data0301, setData0301} = useContext(UserContext);
  const handleChangeTuNgay = date => {
    try {
      // Create a copy of data0201
      const updatedData0301 = {...data0301};
      updatedData0301.tungay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData0301(updatedData0301);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleChangeDenNgay = date => {
    try {
      // Create a copy of data0201
      const updatedData0301 = {...data0301};
      updatedData0301.denngay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData0301(updatedData0301);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>MẪU BÁO CÁO KHAI THÁC THỦY SẢN</Text>
        <Text style={styles.txtHeader}>
          {'\n'} CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </Text>
        <Text style={styles.txtHeader}>Độc lập - Tự do - Hạnh phúc</Text>
        <Text style={styles.txtHeader}>-----------</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={styles.txtHeaderDate}>
          ......., ngày ...... tháng ......năm........
        </Text>
      </View>

      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>BÁO CÁO KHAI THÁC THỦY SẢN</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.txtHeader}>CHUYẾN SỐ:</Text>
          <TextInput
            keyboardType="numeric"
            value={data0301.chuyenbien_so.toString()}
            style={styles.txtHeader}
            placeholder='.........'
            onChangeText={text =>
              setData0301({...data0301, chuyenbien_so: parseInt(text, 10)})
            }
          />
          <Text style={styles.txtHeader}>/năm</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.txtHeader}
            placeholder='.........'
            value={data0301.nam.toString()}
            onChangeText={text => setData0301({...data0301, nam: parseInt(text, 10)})}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.txtHeader}>Từ ngày:</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.txtHeader}
            value={moment(data0301.tungay).format('DD/MM/YYYY')}
            onChangeText={text => handleChangeTuNgay(text)}
          />
          <CustomDatePicker onDateChange={date => handleChangeTuNgay(date)} />
          <Text style={styles.txtHeader}> Đến ngày:</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.txtHeader}
            value={moment(data0301.denngay).format('DD/MM/YYYY')}
            onChangeText={text => handleChangeDenNgay(text)}
          />
          <CustomDatePicker onDateChange={date => handleChangeDenNgay(date)} />
        </View>
      </View>
      <Table1 />
      {/* <Table3 /> */}
    </View>
  );
};

export default TongCucThuySanView;
