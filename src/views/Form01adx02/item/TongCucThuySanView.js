import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import { FormContext } from '../../../contexts/FormContext';

import { UserContext } from '../../../contexts/UserContext.js';
import moment from 'moment';
import CustomDatePicker from '../../others/CustomDatePicker';
const TongCucThuySanView = () => {
  const { data0102, setData0102 } = useContext(UserContext);
  const handleChangeTuNgay = date => {
    try {
      // Create a copy of data0202
      const updatedData0102 = { ...data0102 };
      updatedData0102.tungay = moment(date).format('YYYY-MM-DD');

      // Update data0202 with the modified thumua
      setData0102(updatedData0102);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleChangeDenNgay = date => {
    try {
      // Create a copy of data0202
      const updatedData0102 = { ...data0102 };
      updatedData0102.denngay = moment(date).format('YYYY-MM-DD');

      // Update data0202 with the modified thumua
      setData0102(updatedData0102);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        {/* item header */}
        <View>
          <View style={[styles.header]}>
            <Text style={styles.txtHeader}>
              [UBND CẤP TỈNH]
            </Text>
            <Text style={styles.txtHeader}>[TÊN SỞ NN&PTNN]</Text>
            <Text style={styles.txtHeader}>-------</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Text style={[styles.txtHeaderDate,{fontWeight:"400"}]}>
              Số: 
            </Text>
            <TextInput
              style={[styles.input,{fontWeight:"400"}]}
              // value={data0102.sothongtu}
              // onChangeText={handleChangeSoThongTu}
            />

          </View>
          </View>
        </View>
        {/* end  */}
          <View style={[styles.header]}>
            <Text style={styles.txtHeader}>
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
            </Text>
            <Text style={styles.txtHeader}>Độc lập - Tự do - Hạnh phúc</Text>
            <Text style={styles.txtHeader}>-----------</Text>
            <Text style={[styles.txtHeaderDate,{fontWeight:"400"}]}>
              ......., ngày ...... tháng ......năm........
            </Text>
          </View>

        {/* end */}

      </View>

      {/* title */}
      <View>
          <View style={[styles.header]}>
            <Text style={styles.txtHeader}>
            BÁO CÁO
            </Text>
            <Text style={[styles.txtHeader,{textAlign:'center'}]}>Kết quả rà soát cảng cá chỉ định có đủ hệ thống xác nhận nguồn gốc thủy sản từ khai thác</Text>
            <Text style={styles.txtHeader}>------------------</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width:250,
              }}>
              <Text style={[styles.txtHeaderDate,{fontWeight:"400",fontStyle:'normal'}]}>
              Kính gửi:   
              </Text>
              <TextInput
                style={[styles.input,{fontWeight:"400",fontSize:19}]}
                value={data0102?.kinhgui}
                // onChangeText={handleChangeSoThongTu}
              />
            </View>
          </View>
        </View>
        
        {/* txt */}
        <View style={{marginHorizontal:24,marginTop:12}}>
          <Text style={[styles.txtHeader,{textAlign:'justify',fontWeight:'400'}]}>
            Căn cứ khoản 2 Điều 6 Thông tư số 21/2018/TT-BNNPTNT, [Sở Nông nghiệp
            và Phát triển nông thôn] báo cáo kết quả rà soát cảng cá chỉ định có đủ hệ thống
            xác nhận nguồn gốc thủy sản từ khai thác đề nghị Tổng cục Thủy sản tổng hợp, 
            trình Bộ Nông nghiệp và Phát triển nông thôn công bố đưa vào hoặc đưa ra
            khỏi danh sách cảng cá chỉ định có đủ hệ thống xác nhận nguồn gốc thủy sản từ
            khai thác như sau:
          </Text>
        </View>

      {/* <Table1 /> */}
    </View>
  );
};

export default TongCucThuySanView;
