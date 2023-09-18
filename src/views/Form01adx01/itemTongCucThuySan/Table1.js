import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {useState, useMemo, useContext, useEffect} from 'react';
import styles from './styles';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import CustomDatePicker from '../../others/CustomDatePicker';

import {useNetInfo} from '@react-native-community/netinfo';
import {UserContext} from '../../../contexts/UserContext';
import moment from 'moment';
import Storage from '../../../utils/storage';
const Table1 = () => {
  //data0101
  const {dataInfShip, data0101, setData0101, setDataInfShip} =
    useContext(UserContext);
  const netInfo = useNetInfo();

  // check ko có wifi thì lấy data0101InfShip từ local
  useEffect(() => {
    if (!netInfo.isConnected) {
      getShipInfo();
    }
  }, [netInfo.isConnected]);

  const getShipInfo = async () => {
    const result = await Storage.getItem('dataInfShip');
    if (result !== null) {
      const data0101Ship = JSON.parse(result);
      setDataInfShip(data0101Ship);
    }
  };

  useEffect(() => {
    if (data0101) {
      const newData = {...data0101};
      delete newData.khaithac;
      delete newData.thumua;
    }
  }, [data0101]);
  return (
    <View>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu:</Text>
          <TextInput
            onChangeText={text => {
              setData0101({...data0101, ten_chutau: text});
            }}
            value={data0101?.ten_chutau}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>2. Họ và tên thuyền trưởng:</Text>
          <TextInput
            onChangeText={text => {
              setData0101({...data0101, ten_thuyentruong: text});
            }}
            value={data0101?.ten_thuyentruong}
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
            selectedValue={data0101?.tau_bs}
            style={[styles.input]}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue) {
                const dataInf = dataInfShip[itemIndex - 1];
                setData0101({
                  ...data0101,
                  ten_chutau: dataInf?.chutau,
                  tau_bs: dataInf?.tentau,
                  gpkt_so: dataInf?.gpkt,
                  id_tau: dataInf?.idShip.toString(),
                  tau_chieudailonnhat: dataInf?.chieudailonnhat + '',
                  tau_tongcongsuatmaychinh: dataInf?.congsuat + '',
                  gpkt_thoihan: dataInf?.gpkt_thoihan,
                });
              }
            }}>
            <Picker.Item
              enabled={false}
              style={styles.text}
              label="- Chọn tàu -"
              value=""
            />
            {dataInfShip.map((value, index) => {
              return (
                <Picker.Item
                  key={index}
                  style={styles.text}
                  label={value.tentau}
                  value={value.tentau}
                />
              );
            })}
          </Picker>
        </View>
        <View style={[styles.row, {width: '33%', height: 'auto'}]}>
          <Text style={[styles.text, {width: '65%'}]}>
            4. Chiều dài lớn nhất của tàu:
          </Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0101({...data0101, tau_chieudailonnhat: text});
            }}
            value={data0101?.tau_chieudailonnhat}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>m; </Text>
        </View>
        <View style={[styles.row, {width: '34%', height: 'auto'}]}>
          <Text style={[styles.text, {width: '60%'}]}>
            5. Tổng công xuất máy chính:
          </Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0101({...data0101, tau_tongcongsuatmaychinh: text});
            }}
            value={data0101?.tau_tongcongsuatmaychinh}
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
            // editable={false}
            onChangeText={text => {
              setData0101({...data0101, gpkt_so: text});
            }}
            value={data0101?.gpkt_so}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời hạn đến:</Text>
          <TextInput
            onChangeText={text => {
              setData0101({
                ...data0101,
                gpkt_thoihan: text,
              });
            }}
            value={data0101?.gpkt_thoihan}
            style={[styles.input, styles.text]}
            editable={false}
          />
          {/* <Pressable onPress={() => setOpen(true)}>
            <Image style={{ width: 16, height: 16 }} source={require('../../../../assets/images/calendar.png')} />
          </Pressable> */}
          <CustomDatePicker
            onDateChange={date => {
              setData0101({
                ...data0101,
                gpkt_thoihan: moment(date).format('DD/MM/YYYY'),
              });
            }}
          />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>7. Nghề phụ 1:</Text>
          <TextInput
            onChangeText={text => {
              setData0101({...data0101, nghephu1: text});
            }}
            value={data0101?.nghephu1}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>8. Nghề phụ 2:</Text>
          <TextInput
            onChangeText={text => {
              setData0101({...data0101, nghephu2: text});
            }}
            value={data0101?.nghephu2}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
