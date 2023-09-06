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
const Table1 = ({selectedItem}) => {
  console.log('SELECTED INDEX: ', selectedItem);
  const {data0201, setData0201} = useContext(UserContext);

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

  const [itemSelected, setItemSelected] = useState();
  useEffect(() => {
    if (selectedItem != undefined) {
      setItemSelected(data0201.thongtintaudc_thumua[selectedItem]);
    } else {
      setItemSelected([
        {
          cang_di: '',
          dairy_id: 0,
          gpkt_so: '',
          gpkt_thoihan: '0001-01-01T00:00:00',
          id: 0,
          id_tau: '',
          ngay_di: '2023-09-06T00:00:00',
          nghekt: 'eeeeeeeddddd',
          selected: true,
          tau_bs: 'aaaaaaaa',
          tau_chieudailonnhat: '',
          tau_tongcongsuatmaychinh: '',
          tg_khaithac_denngay: '2023-09-06T00:00:00',
          tg_khaithac_tungay: '2023-09-06T00:00:00',
          thongtinhoatdong: [
            {
              dairy_id: 0,
              id: 0,
              kinhdo_tha: '',
              kinhdo_thu: '',
              loai_1: '',
              loai_1_kl: '',
              loai_2: '',
              loai_2_kl: '',
              loai_3: '',
              loai_3_kl: '',
              loai_4: '',
              loai_4_kl: '',
              loai_5: '',
              loai_5_kl: '',
              loai_6: '',
              loai_6_kl: '',
              methu: '1',
              thoidiem_tha: '2023-09-06T08:35',
              thoidiem_thu: '2023-09-06T08:35',
              tongsanluong: '',
              vido_tha: '',
              vido_thu: '',
            },
          ],
        },
      ]);
    }
  }, [selectedItem]);

  return (
    <View style={styles.container}>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>1. Số đăng ký tàu:</Text>
          <TextInput
            onChangeText={text => {
              setData0201({...data0201, ten_chutau: text});
            }}
            value={itemSelected?.tau_bs}
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
            value={itemSelected?.tau_chieudailonnhat}
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
          value={itemSelected?.tau_tongcongsuatmaychinh}
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
            value={itemSelected?.gpkt_so}
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
            value={moment(itemSelected?.gpkt_thoihan)
              .subtract(10, 'days')
              .calendar()}
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
          value={itemSelected?.nghekt}
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
            value={itemSelected?.cang_di}
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
            value={moment(itemSelected?.ngay_di).subtract(10, 'days').calendar()}
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
            value={moment(itemSelected?.tg_khaithac_tungay).subtract(10, 'days').calendar()}
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
            value={moment(itemSelected?.tg_khaithac_denngay).subtract(10, 'days').calendar()}
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
