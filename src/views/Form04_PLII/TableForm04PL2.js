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

import moment from 'moment';
import {UserContext} from '../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';
import {Picker} from '@react-native-picker/picker';
import CustomDatePicker from '../others/CustomDatePicker';
import Storage from '../../utils/storage';
import CheckBox from '@react-native-community/checkbox';
import CustomDateTimePicker from '../others/CustomDateTimePicker';
import TableKiemTraHoSo from './TableKiemTraHoSo';
import TableKiemTraThucTe from './TableKiemTraThucTe';
const TableForm04PL2 = ({}) => {
  //data
  const {dataInfShip, setData04_PLII, data04_PLII, setDataInfShip} =
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
      setData04_PLII({
        ...data04_PLII,
        thoigiankt: moment(thoiHan, 'DD/MM/YYYY HH:mm:ss').format(
          'YYYY-MM-DDTHH:mm:ss',
        ),
      });
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleChangeNgayBocHang = ngayHocHang => {
    try {
      setData04_PLII({...data04_PLII, ngaybochang: ngayHocHang});
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const calculateTongKhoiLuong = khoiluong => {
    try {
      let total = 0;

      data04_PLII.ls0202ds.forEach(item => {
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
    <View style={{backgroundColor: 'white'}}>
      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto', marginVertical: 5}]}>
          <Text style={styles.text}>Tên cảng cá:</Text>
          <TextInput
            onChangeText={text => {
              setData04_PLII({...data04_PLII, tencangca: text});
            }}
            value={data04_PLII?.tencangca}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={[styles.row, {height: 'auto', marginVertical: 5}]}>
        <Text style={styles.text}>Địa chỉ:</Text>
        <TextInput
          onChangeText={text => {
            setData04_PLII({...data04_PLII, diachi: text});
          }}
          value={data04_PLII?.diachi}
          style={[styles.input, styles.text]}
        />
      </View>
      <View style={[styles.row, {width: '50%', marginVertical: 5}]}>
        <Text style={styles.text}>Thời gian:</Text>
        <TextInput
          onChangeText={text => {
            handleChangeThoiHanGPKT(text);
          }}
          value={moment(data04_PLII?.thoigiankt, 'YYYY-MM-DDTHH:mm:ss').format(
            'DD/MM/YYYY HH:mm:ss',
          )}
          style={[styles.input, styles.text]}
          // editable={false}
        />
        <CustomDateTimePicker
          onDateChange={date => {
            handleChangeThoiHanGPKT(date);
          }}
        />
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.textBold}>1. Đơn vị kiểm tra:</Text>
          <TextInput
            onChangeText={text => {
              setData04_PLII({...data04_PLII, donvikt: text});
            }}
            value={data04_PLII?.donvikt}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Người kiểm tra:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, kt1: text});
              }}
              value={data04_PLII?.kt1}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Chức vụ:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, cv1: text});
              }}
              value={data04_PLII?.cv1}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Người kiểm tra:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, kt2: text});
              }}
              value={data04_PLII?.kt2}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Chức vụ:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, cv2: text});
              }}
              value={data04_PLII?.cv2}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Người kiểm tra:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, kt3: text});
              }}
              value={data04_PLII?.kt3}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Chức vụ:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, cv3: text});
              }}
              value={data04_PLII?.cv3}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Người kiểm tra:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, kt4: text});
              }}
              value={data04_PLII?.kt4}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Chức vụ:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, cv4: text});
              }}
              value={data04_PLII?.cv4}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.textBold}>2. Kiểm tra tàu cá:</Text>
          <TextInput
            onChangeText={text => {
              setData04_PLII({...data04_PLII, tencangca: text});
            }}
            // value={data04_PLII?.tencangca}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Tên tàu:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, tentau: text});
              }}
              value={data04_PLII?.tentau}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Số đăng ký tàu:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, sodangkytau: text});
              }}
              value={data04_PLII?.sodangkytau}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Họ tên chủ tàu:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, tenchutau: text});
              }}
              value={data04_PLII?.tenchutau}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Địa chỉ:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, diachichutau: text});
              }}
              value={data04_PLII?.diachichutau}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Họ và tên thuyền trưởng</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, thuyentruong: text});
              }}
              value={data04_PLII?.thuyentruong}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Địa chỉ:</Text>
            <TextInput
              onChangeText={text => {
                setData04_PLII({...data04_PLII, diachithuytruong: text});
              }}
              value={data04_PLII?.diachithuytruong}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>
      <TableKiemTraHoSo />
      <TableKiemTraThucTe />
    </View>
  );
};

export default TableForm04PL2;
