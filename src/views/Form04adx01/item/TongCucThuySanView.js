import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import { FormContext } from '../../../contexts/FormContext';

import { UserContext } from '../../../contexts/UserContext.js';

const TongCucThuySanView = () => {

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
            onChangeText={text =>
              setData0301({ ...data0301, chuyenbien_so: text })
            }
          />
          <Text style={styles.txtHeader}>/năm</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.txtHeader}
            value={data0301.nam.toString()}
            onChangeText={text => setData0301({ ...data0301, nam: text })}
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
    </View>
  );
};

export default TongCucThuySanView;
