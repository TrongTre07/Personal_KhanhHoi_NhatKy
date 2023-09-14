import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderForm02_PL2B = () => {
  const soQuyDinh = 'Số 21 /2018/TT-BNNPTNT';
  const mauSo = 'Mẫu số 02b (Phụ lục IIb)';
  const title = 'THÔNG TIN VẬN TẢI/TRANSPORT DETAILS';
  return (
    <View style={styles.container}>
      <View style={styles.mauSoVaSoQuyDinhContainer}>
        <Text style={styles.soQuyDinhText}>{soQuyDinh}</Text>
        <Text style={styles.mauSoText}>{mauSo}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.txtHeader}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderForm02_PL2B;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  mauSoText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    fontStyle: 'italic',
  },
  soQuyDinhText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  mauSoVaSoQuyDinhContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  txtHeader: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
