import {ScrollView, StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import Table2 from './itemTongCucThuySan/Table2';
import Table3 from './itemTongCucThuySan/Table3';
import {UserContext} from '../../contexts/UserContext';

const TongCucThuySanView = () => {
  const {getDiaryForm, data0101Ship, data0101, setData0101} =
    useContext(UserContext);

  const handleNgheChinh = value => {
    const updatedThongTinTau = {...data0101};
    updatedThongTinTau.nghechinh = value;
    setData0101(updatedThongTinTau);
  };

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
            value={data0101?.nghechinh}
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
