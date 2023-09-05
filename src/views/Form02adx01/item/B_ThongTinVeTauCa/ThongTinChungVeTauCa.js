import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Table3 from '../itemTongCucThuySan/Table3';
import Table1 from '../itemThongTinChungVeTauCa/Table1';

const ThongTinChungVeTauCa = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          lineHeight: 28,
          color: 'black',
        }}>
        I. THÔNG TIN CHUNG VỀ TÀU CÁ
      </Text>
      <Table1/>
    </View>
  );
};

export default ThongTinChungVeTauCa;

const styles = StyleSheet.create({});
