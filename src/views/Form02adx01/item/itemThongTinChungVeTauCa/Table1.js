import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {useState, useMemo, useContext, useEffect} from 'react';
import styles from './styles';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {dateNowFormat} from '../../../others/formatdate';
import CustomDatePicker from '../../../others/CustomDatePicker';

import {UserContext} from '../../../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';
import Storage from '../../../../utils/storage';

import moment from 'moment';
const Table1 = ({}) => {
  //data
  const {dataInfShip, setData0201, data0201, setDataInfShip} =
    useContext(UserContext);
  const netInfo = useNetInfo();

  // check ko có wifi thì lấy dataInfShip từ local
  useEffect(() => {
    if (!netInfo.isConnected) {
      getShipInfo();
    }
  }, [netInfo.isConnected]);

  const getShipInfo = async () => {
    const result = await Storage.getItem('dataInfShip');
    if (result !== null) {
      const dataShip = JSON.parse(result);
      setDataInfShip(dataShip);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>1. Số đăng ký tàu:</Text>
          <TextInput
            onChangeText={text => {
              setData0201({...data0201, ten_chutau: text});
            }}
            value={data0201?.ten_chutau}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>2. Chiều dài lớn nhất của tàu:</Text>
          <TextInput
            onChangeText={text => {
              setData0201({...data0201, ten_thuyentruong: text});
            }}
            value={data0201?.ten_thuyentruong}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>
      <View style={[styles.row, {width: '50%'}]}>
        <Text style={styles.text}>3. Tổng công suất máy chính:</Text>
        <TextInput
          onChangeText={text => {
            setData0201({...data0201, ten_thuyentruong: text});
          }}
          value={data0201?.ten_thuyentruong}
          style={[styles.input, styles.text]}
        />
        <Text style={styles.text}>CV</Text>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>4. Số giấy phép khai thác thủy sản:</Text>
          <TextInput
            onChangeText={text => {
              setData0201({...data0201, ten_chutau: text});
            }}
            value={data0201?.ten_chutau}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời hạn đến:</Text>
          <TextInput
            onChangeText={text => {
              // setData0201({...data, gpkt_thoihan: text});
            }}
            value={data0201.gpkt_thoihan}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          {/* <Pressable onPress={() => setOpen(true)}>
            <Image style={{ width: 16, height: 16 }} source={require('../../../../assets/images/calendar.png')} />
          </Pressable> */}
          <CustomDatePicker
            onDateChange={date => {
              setData0201({
                ...data0201,
                gpkt_thoihan: moment(date).format('DD/MM/YYYY'),
              });
            }}
          />
        </View>
      </View>

      <View style={[styles.row, {width: '50%'}]}>
        <Text style={styles.text}>5. Nghề khai thác:</Text>
        <TextInput
          // editable={false}
          onChangeText={text => {
            setData0201({...data0201, gpkt_so: text});
          }}
          value={data0201?.gpkt_so}
          style={[styles.input, styles.text]}
        />
        <Text style={styles.text}>;</Text>
      </View>
      <View style={[styles.row, {marginBottom: 10}]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>6. Cảng đi:</Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0201({...data0201, gpkt_so: text});
            }}
            value={data0201?.gpkt_so}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời gian đi:</Text>
          <TextInput
            onChangeText={text => {
              // setData0201({...data, gpkt_thoihan: text});
            }}
            value={data0201.gpkt_thoihan}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          {/* <Pressable onPress={() => setOpen(true)}>
            <Image style={{ width: 16, height: 16 }} source={require('../../../../assets/images/calendar.png')} />
          </Pressable> */}
          <CustomDatePicker
            onDateChange={date => {
              setData0201({
                ...data0201,
                gpkt_thoihan: moment(date).format('DD/MM/YYYY'),
              });
            }}
          />
        </View>
      </View>
      <Text style={styles.text}>
        {' '}
        7. Thời gian khai thác đối với sản phẩm thu mua, chuyển tải:{' '}
      </Text>
      <View style={[styles.row, {marginBottom: 10}]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Từ ngày:</Text>
          <TextInput
            onChangeText={text => {
              // setData0201({...data, gpkt_thoihan: text});
            }}
            value={data0201.gpkt_thoihan}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          <CustomDatePicker
            onDateChange={date => {
              setData0201({
                ...data0201,
                gpkt_thoihan: moment(date).format('DD/MM/YYYY'),
              });
            }}
          />
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}> Đến ngày:</Text>
          <TextInput
            onChangeText={text => {
              // setData0201({...data, gpkt_thoihan: text});
            }}
            value={data0201.gpkt_thoihan}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          <CustomDatePicker
            onDateChange={date => {
              setData0201({
                ...data0201,
                gpkt_thoihan: moment(date).format('DD/MM/YYYY'),
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
