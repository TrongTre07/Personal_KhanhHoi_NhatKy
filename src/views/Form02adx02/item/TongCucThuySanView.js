import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import { FormContext } from '../../../contexts/FormContext';

import { UserContext } from '../../../contexts/UserContext.js';
import moment from 'moment';
import CustomDatePicker from '../../others/CustomDatePicker';
const TongCucThuySanView = () => {
  const { data0202, setData0202 } = useContext(UserContext);

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
              value={data0202.sobacao}
              onChangeText={text => {setData0202({...data0202,sobacao:text})}}
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
                value={data0202?.kinhgui}
                onChangeText={text => {
                  let tempdata0202 = { ...data0202 };
                  tempdata0202.kinhgui = text;
                  setData0202(tempdata0202)
                }}
              />
            </View>
          </View>
        </View>
        
        {/* txt */}
        <View style={{marginHorizontal:24,marginTop:12}}>
          <Text style={[styles.txtHeader,{textAlign:'justify',fontWeight:'400'}]}>
            Căn cứ khoản 2 Điều 6 Thông tư số 21/2028/TT-BNNPTNT, [Sở Nông nghiệp
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
