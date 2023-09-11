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
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
const Table1 = ({}) => {
  //data
  const {dataInfShip, setDataInfShip} = useContext(UserContext);
  const netInfo = useNetInfo();
  const {data0301, setData0301} = useContext(UserContext);
  // const [data0301, setData0301] = useState({
  //   tau_tongcongsuatmaychinh: 12,
  //   tau_chieudailonnhat: 12,
  //   dairyname: 'BaoCaoKhaiThacThuySan_11092023',
  //   denngay: '2023-09-11',
  //   tblreport_0301_ls: [
  //     {
  //       id: 0,
  //       tenloai: '1111',
  //       sanluong: 12,
  //     },
  //     {
  //       id: new Date(),
  //       tenloai: '2222',
  //       sanluong: 11,
  //     },
  //   ],
  //   chuyenbien_so: 0,
  //   nam: 0,
  //   tungay: '0001-01-01',
  //   ten_chutau_thuyentruong: 'abc',
  //   diachi: 'aaaa',
  //   tau_bs: 'HC-1234-TS1',
  //   nghekhaithac: '',
  //   tongsolaodong: 0,
  //   songaykhaithac: 0,
  //   so_meluoi: 0,
  //   ngutruong_vinhbacbo: false,
  //   ngutruong_trungbo: true,
  //   ngutruong_dongnambo: false,
  //   ngutruong_taynambo: false,
  //   ngutruong_giuabiendong: true,
  //   tongsanluong: 10,
  // });

  const [checked, setChecked] = useState({
    vinh_bac_bo: false,
    trung_bo: false,
    dong_nam_bo: false,
    tay_nam_bo: false,
    giua_bien_dong: false,
  });

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
    <View>
      <View style={[styles.row]}>
        <View style={[styles.row, {height: 'auto'}]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu/Thuyền trưởng:</Text>
          <TextInput
            onChangeText={text => {
              setData0301({...data0301, ten_chutau_thuyentruong: text});
            }}
            value={data0301?.ten_chutau}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <Text style={styles.text}>2. Địa chỉ:</Text>
        <TextInput
          onChangeText={text => {
            setData0301({...data0301, diachi: text});
          }}
          value={data0301?.diachi}
          style={[styles.input, styles.text]}
        />
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <View style={[styles.row, {width: '50%', height: 'auto'}]}>
          <View style={[styles.row, {width: '40%'}]}>
            <Text style={[styles.text]}>3. Số đăng ký tàu</Text>
            <Text style={{color: 'red'}}>*</Text>
            <Text style={[styles.text]}>:</Text>
          </View>
          <Picker
            selectedValue={data0301?.tau_bs}
            style={[styles.input]}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue) {
                const dataInf = dataInfShip[itemIndex - 1];
                setData0301({
                  ...data0301,
                  ten_chutau: dataInf?.chutau,
                  tau_bs: dataInf?.tentau,
                  id_tau: dataInf?.idShip.toString(),
                  tau_chieudailonnhat: dataInf?.chieudailonnhat + '',
                  tau_tongcongsuatmaychinh: dataInf?.congsuat + '',
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

        <View style={[styles.row, {width: '50%', height: 'auto'}]}>
          <Text style={[styles.text, {width: '60%'}]}>
            4. Tổng công xuất máy chính:
          </Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0301({...data0301, tau_tongcongsuatmaychinh: text});
            }}
            value={data0301?.tau_tongcongsuatmaychinh.toString()}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>CV</Text>
        </View>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <Text style={[styles.text]}>5. Chiều dài lớn nhất của tàu:</Text>
        <TextInput
          // editable={false}
          onChangeText={text => {
            setData0301({...data0301, tau_chieudailonnhat: text});
          }}
          value={data0301?.tau_chieudailonnhat.toString()}
          style={[styles.input, styles.text]}
        />
        <Text style={styles.text}>m; </Text>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>6. Nghề khai thác thuỷ sản:</Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0301({...data0301, nghekhaithac: text});
            }}
            value={data0301?.nghekhaithac}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>

        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>7 Tổng số lao động:</Text>
          <TextInput
            onChangeText={text => {
              setData0301({...data0301, tongsolaodong: text});
            }}
            value={data0301?.tongsolaodong.toString()}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          <Text style={styles.text}>người</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>8. Số ngày thực tế khai thác:</Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0301({...data0301, songaykhaithac: text});
            }}
            value={data0301?.songaykhaithac.toString()}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>

        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>9. Số mẻ lưới trong chuyến:</Text>
          <TextInput
            onChangeText={text => {
              setData0301({...data0301, so_meluoi: text});
            }}
            value={data0301.so_meluoi.toString()}
            style={[styles.input, styles.text]}
            // editable={false}
          />
        </View>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <Text style={[styles.text]}>10. Ngư trường khai thác chính:</Text>
      </View>
      <View
        style={[
          styles.row,
          {
            height: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {flexDirection: 'row'}]}>Vịnh Bắc Bộ</Text>
          <CheckBox
            value={data0301.ngutruong_vinhbacbo}
            onValueChange={value =>
              setData0301({...data0301, ngutruong_vinhbacbo: value})
            }
            tintColors={{true: 'gray', false: 'gray'}}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {flexDirection: 'row'}]}>Trung Bộ</Text>
          <CheckBox
            value={data0301.ngutruong_trungbo}
            onValueChange={value =>
              setData0301({...data0301, ngutruong_trungbo: value})
            }
            tintColors={{true: 'gray', false: 'gray'}}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {flexDirection: 'row'}]}>Đông Nam Bộ</Text>
          <CheckBox
            value={data0301.ngutruong_dongnambo}
            onValueChange={value =>
              setData0301({...data0301, ngutruong_dongnambo: value})
            }
            tintColors={{true: '#gray', false: 'gray'}}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {flexDirection: 'row'}]}>Tây Nam Bộ</Text>
          <CheckBox
            value={data0301.ngutruong_taynambo}
            onValueChange={value =>
              setData0301({...data0301, ngutruong_taynambo: value})
            }
            tintColors={{true: 'gray', false: 'gray'}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text style={[styles.text, {flexDirection: 'row'}]}>
          Giữa Biển Đông
        </Text>
        <CheckBox
          value={data0301.ngutruong_giuabiendong}
          onValueChange={value =>
            setData0301({...data0301, ngutruong_giuabiendong: value})
          }
          tintColors={{true: 'gray', false: 'gray'}}
        />
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <Text style={[styles.text]}>
          11. Tổng sản lượng khai thác thuỷ sản:
        </Text>
        <TextInput
          // editable={false}
          onChangeText={text => {
            setData0301({...data0301, tongsanluong: text});
          }}
          value={data0301?.tongsanluong.toString()}
          style={[styles.input, styles.text]}
        />
        <Text style={styles.text}>kg </Text>
      </View>
    </View>
  );
};

export default Table1;
