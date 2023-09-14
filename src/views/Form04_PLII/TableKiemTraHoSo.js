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
const TableKiemTraHoSo = ({}) => {
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

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.textBold}>3. Kiểm tra hồ sơ:</Text>
          <TextInput style={[styles.deMuc, styles.text]} />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Giấy chứng nhận đăng ký tàu cá
            </Text>
            <CheckBox
              value={data04_PLII?.kt_chungnhantauca}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_chungnhantauca: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Sổ danh bạ thuyền viên tàu cá
            </Text>
            <CheckBox
              value={data04_PLII?.kt_sodanhbathuyvien}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_sodanhbathuyvien: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Giấy chứng nhận an toàn kỹ thuật tàu cá
            </Text>
            <CheckBox
              value={data04_PLII?.kt_antoankithuat}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_antoankithuat: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Văn bằng, chứng từ thuyền trưởng
            </Text>
            <CheckBox
              value={data04_PLII?.kt_chungtuthuyentruong}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_chungtuthuyentruong: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Giấy phép khai thác thủy sản
            </Text>
            <CheckBox
              value={data04_PLII?.kt_gpkt}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_gpkt: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Văn bằng, chứng từ thợ máy
            </Text>
            <CheckBox
              value={data04_PLII?.kt_chungtuthomay}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_chungtuthomay: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Nhật ký khai thác thủy sản
            </Text>
            <CheckBox
              value={data04_PLII?.kt_nhatkykhaithac}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_nhatkykhaithac: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '50%',

              height: 60,
              borderColor: '#0099FF',
              borderWidth: 1,
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>
              Văn bằng, chứng từ máy trưởng
            </Text>
            <CheckBox
              value={data04_PLII?.kt_chungtumaytruong}
              onValueChange={value =>
                setData04_PLII({...data04_PLII, kt_chungtumaytruong: value})
              }
              style={{marginRight: 20}}
              tintColors={{true: 'gray', false: 'gray'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TableKiemTraHoSo;
