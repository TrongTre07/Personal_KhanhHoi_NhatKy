import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState, useMemo, useContext, useEffect} from 'react';
import styles from './styles';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {dateNowFormat} from '../../../others/formatdate';
import CustomDatePicker from '../../../others/CustomDatePicker';

import {UserContext} from '../../../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';
import Storage from '../../../../utils/storage';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
import ChiTietVeSanLuongThuySan from './ChiTietVeSanLuongThuySan';
const Table1 = ({}) => {
  //data
  const {dataInfShip, setData0202, data0202, setDataInfShip} =
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

  const handleChangeThoiHanGPKT = thoiHan => {
    try {
      setData0202({...data0202, thoihan_gpkt: thoiHan});
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleChangeNgayBocHang = ngayHocHang => {
    try {
      setData0202({...data0202, ngaybochang: ngayHocHang});
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const calculateTongKhoiLuong = khoiluong => {
    try {
      let total = 0;

      data0202.ls0202ds.forEach(item => {
        if (item[khoiluong] && item.isdelete != true) {
          total += Number(item[khoiluong]); // Convert to float to ensure proper addition
        }
      });

      return total;
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.text}>Tên cảng cá:</Text>
          <TextInput
            onChangeText={text => {
              setData0202({...data0202, tencangca: text});
            }}
            value={data0202?.tencangca}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <Text style={styles.text}>Địa chỉ:</Text>
        <TextInput
          onChangeText={text => {
            setData0202({...data0202, diachi: text});
          }}
          value={data0202?.diachi}
          style={[styles.input, styles.text]}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={styles.txtHeader}>BIÊN NHẬN</Text>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu/Thuyền trưởng:</Text>
          <TextInput
            onChangeText={text => {
              setData0202({...data0202, tenchutauthuyentruong: text});
            }}
            value={data0202?.tenchutauthuyentruong}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <View style={[styles.row, {width: '100%', height: 'auto'}]}>
          <View style={[styles.row, {width: '40%'}]}>
            <Text style={[styles.text]}>2. Số đăng ký tàu</Text>
            <Text style={{color: 'red'}}>*</Text>
            <Text style={[styles.text]}>:</Text>
          </View>
          <Picker
            selectedValue={data0202?.biensotau}
            style={[styles.input]}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue) {
                const dataInf = dataInfShip[itemIndex - 1];
                setData0202({
                  ...data0202,
                  tenchutauthuyentruong: dataInf?.chutau,
                  biensotau: dataInf?.tentau,
                  giayphepkhaithac: dataInf?.gpkt,
                  thoihan_gpkt: moment(
                    dataInf?.gpkt_thoihan,
                    'DD/MM/YYYY',
                  ).format('YYYY-MM-DD'),

                  // id_tau: dataInf?.idShip?.toString(),
                  // tau_chieudailonnhat: dataInf?.chieudailonnhat,
                  // tau_tongcongsuatmaychinh: dataInf?.congsuat,
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
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>3. Giấy phép khai thác thủy sản số:</Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0202({...data0202, giayphepkhaithac: text});
            }}
            value={data0202?.giayphepkhaithac}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>

        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời hạn đến:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeThoiHanGPKT(text);
            }}
            value={moment(data0202?.thoihan_gpkt).format('DD/MM/YYYY')}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          <CustomDatePicker
            onDateChange={date => {
              handleChangeThoiHanGPKT(date);
            }}
          />
        </View>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>4. Ngày:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeNgayBocHang(text);
            }}
            value={moment(data0202?.ngaybochang).format('DD/MM/YYYY')}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          <CustomDatePicker
            onDateChange={date => {
              handleChangeNgayBocHang(date);
            }}
          />
        </View>
        <Text style={styles.text}> đã bốc dỡ thủy sản qua cảng.</Text>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '100%'}]}>
          <Text style={styles.text}>5. Tổng sản lượng thủy sản bốc dỡ:</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={text => {
              setData0202({...data0202, tongsolaodong: Number(text)});
            }}
            value={calculateTongKhoiLuong('khoiluong').toString() || 0}
            style={[styles.input, styles.text]}
            editable={false}
          />
          <Text style={styles.text}>kg</Text>
        </View>
      </View>

      <ChiTietVeSanLuongThuySan />

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '100%'}]}>
          <Text style={styles.text}>
            6. Người thu mua sản phẩm (Cơ sở CBTS/nậu, vựa/người buôn):
          </Text>
          <TextInput
            onChangeText={text => {
              setData0202({...data0202, nguoithumua: text});
            }}
            value={data0202?.nguoithumua}
            style={[styles.input, styles.text]}
            // editable={false}
          />
        </View>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '100%'}]}>
          <Text style={styles.text}>
            7. Hình thức bán sản phẩm (Toàn bộ/một phần/theo loài):
          </Text>
          <TextInput
            onChangeText={text => {
              setData0202({...data0202, hinhthucbansp: text});
            }}
            value={data0202?.hinhthucbansp}
            style={[styles.input, styles.text]}
            // editable={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
