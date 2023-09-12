import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import { FormContext } from '../../../contexts/FormContext';

import { UserContext } from '../../../contexts/UserContext.js';
import moment from 'moment';
import CustomDatePicker from '../../others/CustomDatePicker';
const TongCucThuySanView = () => {
  const { data0401, setData0401 } = useContext(UserContext);
  const handleChangeTuNgay = date => {
    try {
      // Create a copy of data0201
      const updatedData0401 = { ...data0401 };
      updatedData0401.tungay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData0401(updatedData0401);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleChangeDenNgay = date => {
    try {
      // Create a copy of data0201
      const updatedData0401 = { ...data0401 };
      updatedData0401.denngay = moment(date).format('YYYY-MM-DD');

      // Update data0201 with the modified thumua
      setData0401(updatedData0401);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: 6 }]}>
        <Text style={styles.txtHeader}>
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
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
        <Text style={styles.txtHeader}>BÁO CÁO THĂM DÒ, TÌM KIẾM, DẪN DỤ NGUỒN LỢI THỦY SẢN</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
            <Text style={[styles.txtHeader, { fontWeight: "400" }]}>CHUYẾN SỐ:</Text>
            <TextInput
              keyboardType="numeric"
              value={data0401?.chuyenbien_so?.toString()}
              style={[styles.txtHeader,{ fontSize:16,fontWeight: "400",height:30, paddingVertical:0, borderColor: 'gray',
              borderBottomWidth: 1,
              borderStyle: 'dotted', }]}
              onChangeText={text =>
                setData0401({ ...data0401, chuyenbien_so: Number(text) })
              }
            />

            <Text style={[styles.txtHeader, { fontWeight: "400" }]}>/năm</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.txtHeader,{   height:30,paddingVertical:0, fontWeight: "400", borderColor: 'gray',
              borderBottomWidth: 1,
              borderStyle: 'dotted',}]}
              value={data0401?.nam?.toString()}
              onChangeText={text => setData0401({ ...data0401, nam: Number(text) })}
            />
        </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',
            }}>
            <Text style={styles.txtHeader}>Từ ngày:</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.txtHeader, { fontWeight: "400" }]}
              value={moment(data0401?.tungay).format('DD/MM/YYYY')}
              onChangeText={text => handleChangeTuNgay(text)}
            />
            <CustomDatePicker onDateChange={date => handleChangeTuNgay(date)} />
            <Text style={styles.txtHeader}> Đến ngày:</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.txtHeader, { fontWeight: "400" }]}
              value={moment(data0401?.denngay).format('DD/MM/YYYY')}
              onChangeText={text => handleChangeDenNgay(text)}
            />
            <CustomDatePicker onDateChange={date => handleChangeDenNgay(date)} />
          </View>

      </View>
      <Table1 />
    </View>
  );
};

export default TongCucThuySanView;
