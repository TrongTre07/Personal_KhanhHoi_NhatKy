import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {useState, useMemo, useContext, useEffect} from 'react';
import styles from './styles';

import {FormContext} from '../../../../contexts/FormContext';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {dateNowFormat} from './formatdate';
import CustomDatePicker from './CustomDatePicker';

const Table1 = ({
  nameOwner,
  namePilot,
  arrNumberShip,
  numberShip,
  longMaxShip,
  sumEngine,
  numberSeafood,
  dateSeafood,
  sideJob1,
  sideJob2,
}) => {
  //data[]
  const [inputValue, setInputValue] = useState({
    nameOwner,
    namePilot,
    numberShip,
    longMaxShip,
    sumEngine,
    numberSeafood,
    dateSeafood,
    sideJob1,
    sideJob2,
  });

  const {thongTinTau, setThongTinTau} = useContext(FormContext);

  // console.log(inputValue)
  const handleTenChuTau = value => {
    setInputValue({...inputValue, nameOwner: value});
    setThongTinTau({...thongTinTau, ten_chutau: value});
  };
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
            onChangeText={handleTenChuTau}
            value={inputValue.nameOwner}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>2. Họ và tên thuyền trưởng:</Text>
          <TextInput
            onChangeText={handleTenThuyenTruong}
            value={inputValue.namePilot}
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
            selectedValue={inputValue.numberShip}
            style={[styles.input]}
            onValueChange={(itemValue, itemIndex) =>
              setInputValue({...inputValue, numberShip: itemValue})
            }>
            <Picker.Item style={styles.text} label="- Chọn tàu -" value="" />
            {arrNumberShip.map((value, key) => (
              <Picker.Item
                key={key}
                style={styles.text}
                label={value}
                value={value}
              />
            ))}
          </Picker>
        </View>
        <View style={[styles.row, {width: '33%', height: 'auto'}]}>
          <Text style={[styles.text, {width: '65%'}]}>
            4. Chiều dài lớn nhất của tàu:
          </Text>
          <TextInput
            onChangeText={handleChieuDaiLonNhat}
            value={inputValue.longMaxShip}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>m; </Text>
        </View>
        <View style={[styles.row, {width: '34%', height: 'auto'}]}>
          <Text style={[styles.text, {width: '60%'}]}>
            5. Tổng công xuất máy chính:
          </Text>
          <TextInput
            onChangeText={handleTongCongSuatMayChinh}
            value={inputValue.sumEngine}
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
            onChangeText={handleGPKTSo}
            value={inputValue.numberSeafood}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời gian đến:</Text>
          <TextInput
            onChangeText={text =>
              setInputValue({...inputValue, dateSeafood: text})
            }
            value={inputValue.dateSeafood.toString()}
            style={[styles.input, styles.text]}
            editable={false}
          />
          {/* <Pressable onPress={() => setOpen(true)}>
            <Image style={{ width: 16, height: 16 }} source={require('../../../../assets/images/calendar.png')} />
          </Pressable> */}
          <CustomDatePicker
            onDateChange={value => {
              handleGPKTThoiHan(value, 'string');
            }}
          />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>7. Ngề phụ 1:</Text>
          <TextInput
            onChangeText={handleNghePhu1}
            value={inputValue.sideJob1}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>8. Nghề phụ 2:</Text>
          <TextInput
            onChangeText={handleNghePhu2}
            value={inputValue.sideJob2}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
