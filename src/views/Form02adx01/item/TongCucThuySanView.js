import {ScrollView, StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
// import Table2 from './itemTongCucThuySan/Table2';
import Table3 from './itemTongCucThuySan/Table3';
import {FormContext} from '../../../contexts/FormContext';

import {UserContext} from '../../../contexts/UserContext.js';

const TongCucThuySanView = () => {
  
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.txtHeader}>TỔNG CỤC THUỶ SẢN</Text>
        <Text style={styles.txtHeader}>-----------</Text>
        <Text style={styles.txtHeader}>NHẬT KÝ KHAI THÁC THUỶ SẢN</Text>
        <View style={[styles.row]}>
          <Text style={[styles.txtHeader, {fontWeight: '400'}]}>
            {'('}DÙNG CHO TÀU THU MUA/CHUYỂN TẢI THỦY SẢN{')'}
          </Text>
        </View>
      </View>

      <Table1 />
      <Table3 />
    </View>
  );
};

export default TongCucThuySanView;
