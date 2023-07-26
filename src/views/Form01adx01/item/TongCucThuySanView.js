import {ScrollView, StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './itemTongCucThuySan/styles';
import Table1 from './itemTongCucThuySan/Table1';
import Table2 from './itemTongCucThuySan/Table2';
import Table3 from './itemTongCucThuySan/Table3';
import {FormContext} from '../../../contexts/FormContext';

const TongCucThuySanView = () => {
  const {thongTinTau, setThongTinTau} = useContext(FormContext);

  // isdraft: false,
  //   dairy_name: 'abc-test',
  //   nghechinh: '',
  //   ten_chutau: 'abc',
  //   ten_thuyentruong: 'abc',
  //   id_tau: '1',
  //   tau_bs: 'HC-1234-TS1',
  //   tau_chieudailonnhat: '12',
  //   tau_tongcongsuatmaychinh: '12',
  //   gpkt_so: 'HAGPKT',
  //   gpkt_thoihan: '12/2/2022',
  //   nghephu1: '',
  //   nghephu2: '',
  
  //   ncau_chieudaivangcau: '',
  //   ncau_soluoicau: '',
  //   nluoivay_chieudailuoi: '',
  //   nluoivay_chieucaoluoi: '',
  //   nluoichup_chuvimiengluoi: '',
  //   nluoichup_chieucaoluoi: '',
  //   nluoikeo_chieudaigiengphao: '',
  //   nluoikeo_chieudaitoanboluoi: '',
  //   nkhac: '',
  //   chuyenbien_so: '',
  //   cang_di: '',
  //   ngay_di: '2023-07-22',
  //   cang_ve: '',
  //   ngay_ve: '2023-07-22',
  //   ngaynop: '2023-07-22',
  //   vaoso_so: '',
  const handleNgheChinh = value => {
    const updatedThongTinTau = {...thongTinTau};
    updatedThongTinTau.nghechinh = value;
    setThongTinTau(updatedThongTinTau);
    console.log(updatedThongTinTau)
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
          <TextInput style={styles.input} onChangeText={handleNgheChinh} />
          <Text style={[styles.txtHeader, {fontWeight: '400'}]}>{')'}</Text>
        </View>
      </View>

      <Table1
        nameOwner={data.nameOwner}
        namePilot={data.namePilot}
        arrNumberShip={data.arrNumberShip}
        numberShip={data.numberShip}
        longMaxShip={data.longMaxShip}
        sumEngine={data.sumEngine}
        numberSeafood={data.numberSeafood}
        dateSeafood={data.dateSeafood}
        sideJob1={data.sideJob1}
        sideJob2={data.sideJob2}
      />
      <Table2
        jobCau={data.jobCau}
        jobVayRe={data.jobVayRe}
        jobChup={data.jobChup}
        jobKeo={data.jobKeo}
        jobOther={data.jobOther}
      />
      <Table3
        changeNumber={data.changeNumber}
        departurePort={data.departurePort}
        arrivalPort={data.arrivalPort}
        diary={data.diary}
      />
    </View>
  );
};

export default TongCucThuySanView;

var data = {
  nameOwner: '',
  namePilot: '',
  arrNumberShip: ['1234321', 'H2341', 'abc'],
  numberShip: '',
  longMaxShip: '',
  sumEngine: '',
  numberSeafood: '',
  dateSeafood: '',
  sideJob1: '',
  sideJob2: '',
  jobCau: {size: '', number: ''},
  jobVayRe: {size: '', number: ''},
  jobChup: {size: '', number: ''},
  jobKeo: {size: '', number: ''},
  jobOther: '',
  sideJob2: '',
  changeNumber: '',
  departurePort: {text: '', date: ''},
  arrivalPort: {text: '', date: ''},
  diary: {date: '', text: ''},
};
