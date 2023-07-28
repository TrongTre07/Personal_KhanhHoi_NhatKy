import {ScrollView, StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import Table2 from './itemTongCucThuySan/Table2';
import Table3 from './itemTongCucThuySan/Table3';
import {FormContext} from '../../../contexts/FormContext';

import {UserContext} from '../../../contexts/UserContext.js';

const TongCucThuySanView = () => {
  const {thongTinTau, setThongTinTau} = useContext(FormContext);

  const {getDiaryForm, dataShip, data} = useContext(UserContext);

  const handleNgheChinh = value => {
    const updatedThongTinTau = {...thongTinTau};
    updatedThongTinTau.nghechinh = value;
    setThongTinTau(updatedThongTinTau);
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
            value={data.nghechinh}
            onChangeText={handleNgheChinh}
          />
          <Text style={[styles.txtHeader, {fontWeight: '400'}]}>{')'}</Text>
        </View>
      </View>

      <Table1/>
      <Table2/>
      <Table3/>
    </View>
  );
};

export default TongCucThuySanView;

// var data= {
//   nameOwner: 'Huy Tran',
//   namePilot: 'Trong tre',
//   arrNumberShip: ['1234321','H2341','abc'],
//   numberShip: 'abc',
//   longMaxShip: '10',
//   sumEngine: '1000',
//   numberSeafood:'100000',
//   dateSeafood: '20/02/2023',
//   sideJob1:'công an',
//   sideJob2:'câu cá',
//   jobCau:{size:'100',number:'2'},
//   jobVayRe:{size:'200',number:'3'},
//   jobChup:{size:'300',number:'4'},
//   jobKeo:{size:'400',number:'5'},
//   jobOther:"cong an, size 123",
//   sideJob2:'câu cá',
//   changeNumber:'23516',
//   departurePort:{text:'di',date:'1021-10-12'},
//   arrivalPort:{text:'ve',date:'2002-19-20'},
//   diary:{date:'2021-11-02',text:'abc123'}
// }
