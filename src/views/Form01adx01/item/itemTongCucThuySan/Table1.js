import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {useState, useMemo, useContext} from 'react';
import styles from './styles';

import {FormContext} from '../../../../contexts/FormContext';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {dateNowFormat} from './formatdate';
import CustomDatePicker from './CustomDatePicker';

import {UserContext} from '../../../../contexts/UserContext';

const Table1 = ({
  ten_chutau,
  ten_thuyentruong,
  id_tau,
  tau_bs,
  tau_chieudailonnhat,
  tau_tongcongsuatmaychinh,
  gpkt_so,
  gpkt_thoihan,
  nghephu1,
  nghephu2,
}) => {
  //data
  const {dataInfShip} = useContext(UserContext);

  console.log('tau', dataInfShip);

  //data[]
  const [inputValue, setInputValue] = useState({
    ten_chutau,
    ten_thuyentruong,
    id_tau,
    tau_bs,
    tau_chieudailonnhat,
    tau_tongcongsuatmaychinh,
    gpkt_so,
    gpkt_thoihan,
    nghephu1,
    nghephu2,
  });

  const {thongTinTau, setThongTinTau} = useContext(FormContext);

  const handleTenThuyenTruong = value => {
    setInputValue({...inputValue, namePilot: value});
    setThongTinTau({...thongTinTau, ten_thuyentruong: value});
  };
  const handleIdTau = value => {
    setInputValue({...inputValue, numberShip: value});
    setThongTinTau({...thongTinTau, id_tau: value});
  };
  const handleTauBS = value => {
    setInputValue({...inputValue, namePilot: value});
    setThongTinTau({...thongTinTau, ten_thuyentruong: value});
  };
  const handleChieuDaiLonNhat = value => {
    setInputValue({...inputValue, longMaxShip: value});
    setThongTinTau({...thongTinTau, tau_chieudailonnhat: value});
  };
  const handleTongCongSuatMayChinh = value => {
    setInputValue({...inputValue, sumEngine: value});
    setThongTinTau({...thongTinTau, tau_tongcongsuatmaychinh: value});
  };
  const handleGPKTSo = value => {
    setInputValue({...inputValue, numberSeafood: value});
    setThongTinTau({...thongTinTau, gpkt_so: value});
  };
  const handleGPKTThoiHan = (value, string) => {
    setInputValue({...inputValue, dateSeafood: dateNowFormat(value, string)});
    setThongTinTau({
      ...thongTinTau,
      gpkt_thoihan: dateNowFormat(value, string),
    });
  };
  const handleNghePhu1 = value => {
    setInputValue({...inputValue, sideJob1: value});
    setThongTinTau({...thongTinTau, nghephu1: value});
  };
  const handleNghePhu2 = value => {
    setInputValue({...inputValue, sideJob2: value});
    setThongTinTau({...thongTinTau, nghephu2: value});
  };
  return (
    <View>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu:</Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, ten_chutau: text});
              setInputValue({...inputValue, ten_chutau: text});
            }}
            value={inputValue.ten_chutau}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>2. Họ và tên thuyền trưởng:</Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, ten_thuyentruong: text});
              setInputValue({...inputValue, ten_thuyentruong: text});
            }}
            value={inputValue.ten_thuyentruong}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <View style={[styles.row, {width: '33%', height: 'auto'}]}>
          <View style={[styles.row, {width: '40%'}]}>
            <Text style={[styles.text]}>3. Số đăng ký tàu</Text>
            <Text style={{color: 'red'}}>*</Text>
            <Text style={[styles.text]}>:</Text>
          </View>
          <Picker
            selectedValue={inputValue.tau_bs}
            style={[styles.input]}
            onValueChange={(itemValue, itemIndex) => {
              //tau_bs và tentau là 1
              const dataInf = dataInfShip.find(
                item => itemValue === item.tentau,
              );
              setInputValue({
                ...inputValue,
                tau_bs: dataInf.tentau,
                gpkt_so: dataInf.gpkt,
                gpkt_thoihan: dataInf.gpkt_thoihan,
              });
            }}>
            <Picker.Item style={styles.text} label="- Chọn tàu -" value="" />
            {dataInfShip.map((value, key) => (
              <Picker.Item
                key={key}
                style={styles.text}
                label={value.tentau}
                value={value.tentau}
              />
            ))}
          </Picker>
        </View>
        <View style={[styles.row, {width: '33%', height: 'auto'}]}>
          <Text style={[styles.text, {width: '65%'}]}>
            4. Chiều dài lớn nhất của tàu:
          </Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, tau_chieudailonnhat: value});
              setInputValue({...inputValue, tau_chieudailonnhat: text});
            }}
            value={inputValue.tau_chieudailonnhat}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>m; </Text>
        </View>
        <View style={[styles.row, {width: '34%', height: 'auto'}]}>
          <Text style={[styles.text, {width: '60%'}]}>
            5. Tổng công xuất máy chính:
          </Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, tau_tongcongsuatmaychinh: value});
              setInputValue({...inputValue, tau_tongcongsuatmaychinh: text});
            }}
            value={inputValue.tau_tongcongsuatmaychinh}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>CV</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>
            6. Số giấy phép khai {'\n'} thác thuỷ sản:
          </Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, gpkt_so: text});
              setInputValue({...inputValue, gpkt_so: text});
            }}
            value={inputValue.gpkt_so}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời hạn đến:</Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, gpkt_thoihan: text});
              setInputValue({...inputValue, gpkt_thoihan: text});
            }}
            value={inputValue.gpkt_thoihan}
            style={[styles.input, styles.text]}
            editable={false}
          />
          {/* <Pressable onPress={() => setOpen(true)}>
            <Image style={{ width: 16, height: 16 }} source={require('../../../../assets/images/calendar.png')} />
          </Pressable> */}
          <CustomDatePicker
            onDateChange={date => {
              setThongTinTau({...thongTinTau, gpkt_thoihan: date});
              setInputValue({
                ...inputValue,
                gpkt_thoihan: dateNowFormat(date, 'string'),
              });
            }}
          />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>7. Ngề phụ 1:</Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, nghephu1: text});
              setInputValue({...inputValue, nghephu1: text});
            }}
            value={inputValue.nghephu1}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>8. Nghề phụ 2:</Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, nghephu2: text});
              setInputValue({...inputValue, nghephu2: text});
            }}
            value={inputValue.nghephu2}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
