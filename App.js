import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TestSqlite from './src/views/TestSqlite';
import HeaderView from './src/views/HeaderView';
import TestLocation from './src/views/TestLocation';
import UserContext from './src/contexts/UserContext';
import TongCucThuySanView from './src/views/TongCucThuySanView';
import HoatDongChuyenTaiView from './src/views/HoatDongChuyenTaiView';
import HoatDongKhaiThacThuySanView from './src/views/HoatDongKhaiThacThuySanView';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <HeaderView />
        <TongCucThuySanView />
        <HoatDongKhaiThacThuySanView />
        <HoatDongChuyenTaiView />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
});
