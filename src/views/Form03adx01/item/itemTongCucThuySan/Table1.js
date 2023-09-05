import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React, { useState, useMemo, useContext, useEffect } from 'react';
import styles from './styles';


import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import { dateNowFormat } from '../../../others/formatdate';
import CustomDatePicker from '../../../others/CustomDatePicker';

import { UserContext } from '../../../../contexts/UserContext';
import { useNetInfo } from '@react-native-community/netinfo';
import Storage from '../../../../utils/storage';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
const Table1 = ({ }) => {
  //data
  const { dataInfShip, setData0301, data0301, setDataInfShip } = useContext(UserContext);
  const netInfo = useNetInfo();

  const [checked, setChecked] = useState({
    vinh_bac_bo: false, trung_bo: false, dong_nam_bo: false, tay_nam_bo: false, giua_bien_dong: false
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
        <View style={[styles.row, { height: 'auto' }]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu/Thuyền trưởng:</Text>
          <TextInput
            onChangeText={text => {
              setData0301({ ...data0301, ten_chutau: text });
            }}
            value={data0301?.ten_chutau}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>

      </View>

      <View style={[styles.row, { height: 'auto' }]}>
        <Text style={styles.text}>2. Địa chỉ:</Text>
        <TextInput
          onChangeText={text => {
            setData0301({ ...data0301, ten_thuyentruong: text });
          }}
          value={data0301?.ten_thuyentruong}
          style={[styles.input, styles.text]}
        />
      </View>

      <View style={[styles.row, { height: 'auto' }]}>
        <View style={[styles.row, { width: '50%', height: 'auto' }]}>
          <View style={[styles.row, { width: '40%' }]}>
            <Text style={[styles.text]}>3. Số đăng ký tàu</Text>
            <Text style={{ color: 'red' }}>*</Text>
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

        <View style={[styles.row, { width: '50%', height: 'auto' }]}>
          <Text style={[styles.text, { width: '60%' }]}>
            4. Tổng công xuất máy chính:
          </Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0301({ ...data0301, tau_tongcongsuatmaychinh: text });
            }}
            value={data0301?.tau_tongcongsuatmaychinh}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>CV</Text>
        </View>
      </View>

      <View style={[styles.row, { height: 'auto' }]}>
        <Text style={[styles.text,]}>
          5. Chiều dài lớn nhất của tàu:
        </Text>
        <TextInput
          // editable={false}
          onChangeText={text => {
            setData0301({ ...data0301, tau_chieudailonnhat: text });
          }}
          value={data0301?.tau_chieudailonnhat}
          style={[styles.input, styles.text]}
        />
        <Text style={styles.text}>m; </Text>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>
            6. Nghề khai thác thuỷ sản:
          </Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0301({ ...data0301, gpkt_so: text });
            }}
            value={data0301?.gpkt_so}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>

        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>7 Tổng số lao động:</Text>
          <TextInput
            onChangeText={text => {
              // setData0301({...data, gpkt_thoihan: text});
            }}
            value={data0301.gpkt_thoihan}
            style={[styles.input, styles.text]}
          // editable={false}
          />
          <Text style={styles.text}>người</Text>

        </View>


      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>
            8. Nghề khai thác thuỷ sản:
          </Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0301({ ...data0301, gpkt_so: text });
            }}
            value={data0301?.gpkt_so}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>

        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>9. Tổng số lao động:</Text>
          <TextInput
            onChangeText={text => {
              // setData0301({...data, gpkt_thoihan: text});
            }}
            value={data0301.gpkt_thoihan}
            style={[styles.input, styles.text]}
          // editable={false}
          />

        </View>


      </View>

      <View style={[styles.row, { height: 'auto' }]}>
        <Text style={[styles.text,]}>
          10. Ngư trường khai thác chính:
        </Text>
      </View>
      <View style={[styles.row, { height: 'auto', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap',}]}>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <Text style={[styles.text, { flexDirection: 'row' }]}>
            Vịnh Bắc Bộ
          </Text>
          <CheckBox
            value={checked.vinh_bac_bo}
            onValueChange={value => setChecked({ ...checked, vinh_bac_bo: value })}
            tintColors={{ true: 'gray', false: 'gray' }}
          />
        </View>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <Text style={[styles.text, { flexDirection: 'row' }]}>
            Trung Bộ
          </Text>
          <CheckBox
            value={checked.trung_bo}
            onValueChange={value => setChecked({ ...checked, trung_bo: value })}
            tintColors={{ true: 'gray', false: 'gray' }}
          />
        </View>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <Text style={[styles.text, { flexDirection: 'row' }]}>
            Đông Nam Bộ
          </Text>
          <CheckBox
            value={checked.dong_nam_bo}
            onValueChange={value => setChecked({ ...checked, dong_nam_bo: value })}
            tintColors={{ true: '#gray', false: 'gray' }}
          />
        </View>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <Text style={[styles.text, { flexDirection: 'row' }]}>
            Tây Nam Bộ
          </Text>
          <CheckBox
            value={checked.tay_nam_bo}
            onValueChange={value => setChecked({ ...checked, tay_nam_bo: value })}
            tintColors={{ true: 'gray', false: 'gray' }}
          />
        </View>
        <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'flex-start' }}>
          <Text style={[styles.text, { flexDirection: 'row' }]}>
            Giữa Biển Đông
          </Text>
          <CheckBox
            value={checked.giua_bien_dong}
            onValueChange={value => setChecked({ ...checked, giua_bien_dong: value })}
            tintColors={{ true: 'gray', false: 'gray' }}
          />
        </View>
      </View>

        <View style={[styles.row, { height: 'auto' }]}>
          <Text style={[styles.text,]}>
            11. Tổng sản lượng khai thác thuỷ sản:
          </Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              setData0301({ ...data0301, tau_chieudailonnhat: text });
            }}
            value={data0301?.tau_chieudailonnhat}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>kg </Text>
        </View>

      </View>
      );
};

      export default Table1;
