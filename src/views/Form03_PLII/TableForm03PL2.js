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
import KiemTraSanLuongKhaiThac from './KiemTraSanLuongKhaiThac';
const TableForm03PL2 = ({}) => {
  //data
  const {dataInfShip, setData03_PLII, data03_PLII, setDataInfShip} =
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
      setData03_PLII({
        ...data03_PLII,
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
      setData03_PLII({...data03_PLII, ngaybochang: ngayHocHang});
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const calculateTongKhoiLuong = khoiluong => {
    try {
      let total = 0;

      data03_PLII.ls0202ds.forEach(item => {
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
              setData03_PLII({...data03_PLII, tencangca: text});
            }}
            value={data03_PLII?.tencangca}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={[styles.row, {height: 'auto', marginVertical: 5}]}>
        <Text style={styles.text}>Địa chỉ:</Text>
        <TextInput
          onChangeText={text => {
            setData03_PLII({...data03_PLII, diachi: text});
          }}
          value={data03_PLII?.diachi}
          style={[styles.input, styles.text]}
        />
      </View>
      <View style={[styles.row, {width: '50%', marginVertical: 5}]}>
        <Text style={styles.text}>Thời gian:</Text>
        <TextInput
          onChangeText={text => {
            handleChangeThoiHanGPKT(text);
          }}
          value={moment(data03_PLII?.thoigiankt, 'YYYY-MM-DDTHH:mm:ss').format(
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
              setData03_PLII({...data03_PLII, donvikt: text});
            }}
            value={data03_PLII?.donvikt}
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
                setData03_PLII({...data03_PLII, kt1: text});
              }}
              value={data03_PLII?.kt1}
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
                setData03_PLII({...data03_PLII, cv1: text});
              }}
              value={data03_PLII?.cv1}
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
                setData03_PLII({...data03_PLII, kt2: text});
              }}
              value={data03_PLII?.kt2}
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
                setData03_PLII({...data03_PLII, cv2: text});
              }}
              value={data03_PLII?.cv2}
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
                setData03_PLII({...data03_PLII, kt3: text});
              }}
              value={data03_PLII?.kt3}
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
                setData03_PLII({...data03_PLII, cv3: text});
              }}
              value={data03_PLII?.cv3}
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
                setData03_PLII({...data03_PLII, kt4: text});
              }}
              value={data03_PLII?.kt4}
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
                setData03_PLII({...data03_PLII, cv4: text});
              }}
              value={data03_PLII?.cv4}
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
              setData03_PLII({...data03_PLII, tencangca: text});
            }}
            // value={data03_PLII?.tencangca}
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
                setData03_PLII({...data03_PLII, tentau: text});
              }}
              value={data03_PLII?.tentau}
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
                setData03_PLII({...data03_PLII, sodangkytau: text});
              }}
              value={data03_PLII?.sodangkytau}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.text}>Loại nghề khai thác thủy sản:</Text>
          <TextInput
            onChangeText={text => {
              setData03_PLII({...data03_PLII, nghekhaithac: text});
            }}
            value={data03_PLII?.nghekhaithac}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={{width: '50%'}}>
          <View style={[styles.row, {height: 'auto'}]}>
            <Text style={styles.text}>Họ tên chủ tàu:</Text>
            <TextInput
              onChangeText={text => {
                setData03_PLII({...data03_PLII, tenchutau: text});
              }}
              value={data03_PLII?.tenchutau}
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
                setData03_PLII({...data03_PLII, diachichutau: text});
              }}
              value={data03_PLII?.diachichutau}
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
                setData03_PLII({...data03_PLII, thuyentruong: text});
              }}
              value={data03_PLII?.thuyentruong}
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
                setData03_PLII({...data03_PLII, diachithuytruong: text});
              }}
              value={data03_PLII?.diachithuytruong}
              style={[styles.input, styles.text]}
            />
            <Text style={styles.text}>;</Text>
          </View>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.textBold}>3. Kiểm tra hồ sơ:</Text>
          <TextInput
            onChangeText={text => {
              setData03_PLII({...data03_PLII, tencangca: text});
            }}
            // value={data03_PLII?.tencangca}
            style={[styles.deMuc, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 5,
          justifyContent: 'space-around',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {flexDirection: 'row'}]}>
            Báo cáo khai thác thủy sản
          </Text>
          <CheckBox
            value={data03_PLII?.bckhaithac}
            onValueChange={value =>
              setData03_PLII({...data03_PLII, bckhaithac: value})
            }
            tintColors={{true: 'gray', false: 'gray'}}
          />
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={[styles.text, {flexDirection: 'row'}]}>
            Nhật ký khai thác thủy sản
          </Text>
          <CheckBox
            value={data03_PLII?.bcnhatky}
            onValueChange={value =>
              setData03_PLII({...data03_PLII, bcnhatky: value})
            }
            tintColors={{true: 'gray', false: 'gray'}}
          />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.textBold}>4. Kiểm tra sản lượng khai thác:</Text>
          <TextInput
            onChangeText={text => {
              setData03_PLII({...data03_PLII, tencangca: text});
            }}
            // value={data03_PLII?.tencangca}
            style={[styles.deMuc, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <KiemTraSanLuongKhaiThac />

      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.textBold}>5. Kết luận kiểm tra:</Text>
          <TextInput
            onChangeText={text => {
              setData03_PLII({...data03_PLII, ketluan: text});
            }}
            value={data03_PLII?.ketluan}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>
    </View>
  );
};

export default TableForm03PL2;
