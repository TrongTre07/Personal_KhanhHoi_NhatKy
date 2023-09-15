import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderForm04_PL3_03 = () => {
  const soQuyDinh = 'Số 21 /2018/TT-BNNPTNT';
  const mauSo = 'Mẫu số 04 (Phụ lục III/Annex III)';
  const title =
    'MẪU XÁC NHẬN CAM KẾT SẢN PHẨM THỦY SẢN XUẤT KHẨU CÓ NGUỐC GỐC TỪ THỦY SẢN KHAI THÁC NHẬP KHẨU';
  const TitleEnglish =
    'STATEMENT OF EXPORT FISHERY PRODUCTS PROCESSED FROM IMPORTED CATCHES';
  return (
    <View style={styles.container}>
      <View style={styles.mauSoVaSoQuyDinhContainer}>
        <Text style={styles.soQuyDinhText}>{soQuyDinh}</Text>
        <Text style={styles.titleText}>{mauSo}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {'\n'}
          {title}
        </Text>
        <Text style={styles.titleText}>
          {'\n'}
          {TitleEnglish}
        </Text>

        <Text style={styles.mauSoText}>
          {'\n'}(Promugated under Circular No: 21/2018/TT-BNNPTNT dated on
          15/11/2018
        </Text>
        <Text style={styles.mauSoText}>
          by Minister of Ministry of Agriculture and Rural Development)
        </Text>
      </View>
    </View>
  );
};

export default HeaderForm04_PL3_03;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },
  mauSoText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
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
});
