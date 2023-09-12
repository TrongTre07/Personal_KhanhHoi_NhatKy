import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderView = () => {
  const soQuyDinh = 'Số 21 /2018/TT-BNNPTNT';
  const mauSo = 'Mẫu số 02 (Phụ lục II)';
  const title = 'MẪU BÁO CÁO KẾT QUẢ RÀ SOÁT CẢNG CÁ CHỈ ĐỊNH CÓ ĐỦ \n HỆ THỐNG XÁC NHẬN NGUỒN GỐC THỦY HÀI SẢN TỪ KHAI THÁC';
  return (
    <View style={styles.container}>
      <View style={styles.mauSoVaSoQuyDinhContainer}>
        <Text style={styles.soQuyDinhText}>{soQuyDinh}</Text>
        <Text style={styles.mauSoText}>{mauSo}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop:16,
    justifyContent: 'center',
  },
  titleText: {
    fontWeight:'bold',
    fontSize: 20,
    color:'black',
    textAlign:'center',
  },
  mauSoText: {
    fontWeight:'bold',
    fontSize: 18,
    color:'black',
    fontStyle:'italic'
  },
  soQuyDinhText: {
    fontWeight:'bold',
    fontSize: 18,
    color:'black',
    
  },
  mauSoVaSoQuyDinhContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:'white'
  },
});
