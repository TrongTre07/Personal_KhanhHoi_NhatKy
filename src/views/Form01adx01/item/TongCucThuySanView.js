import {ScrollView, StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import Table2 from './itemTongCucThuySan/Table2';
import Table3 from './itemTongCucThuySan/Table3';
import {FormContext} from '../../../contexts/FormContext';

import {UserContext} from '../../../contexts/UserContext.js';

const TongCucThuySanView = () => {
  const {thongTinTau, setThongTinTau} = useContext(FormContext);

  const {getDiaryForm, dataShip, data, setData} = useContext(UserContext);

  const handleNgheChinh = value => {
    const updatedThongTinTau = {...thongTinTau};
    updatedThongTinTau.nghechinh = value;
    setThongTinTau(updatedThongTinTau);
    setData(updatedThongTinTau);
  };

  // useEffect(() => {
  //   if (data) {

  //   }
  // }, [data]);F

  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>TỔNG CỤC THUỶ SẢN</Text>
        <Text style={styles.txtHeader}>-----------</Text>
        <Text style={styles.txtHeader}>NHẬT KÝ KHAI THÁC THUỶ SẢN</Text>
        <View style={[styles.row, {width: '30%'}]}>
          <Text style={[styles.txtHeader, {fontWeight: '400'}]}>
            {'('}NGHỀ CHÍNH:
          </Text>
          <TextInput
            style={styles.input}
            value={data.nghechinh}
            onChangeText={handleNgheChinh}
          />
          <Text style={[styles.txtHeader, {fontWeight: '400'}]}>{')'}</Text>
        </View>
      </View>

      <Table1 />
      <Table2 />
      <Table3 />
    </View>
  );
};

export default TongCucThuySanView;
