
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React, { useState, useMemo ,useContext} from 'react';
import styles from './styles';
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';
import { dateNowFormat } from './formatdate';
import CustomDatePicker from './CustomDatePicker';

import { UserContext } from '../../../../contexts/UserContext';

const Table1 = ({
  ten_chutau,
  ten_thuyentruong,
  id_tau,
  tau_bs,
  tau_chieudailonnhat,
  tau_tongcongsuatmaychinh,
  gpkt_so,
  gpkt_thoihan,
  nghephu1,
  nghephu2,
}) => {

  //data
  const  {dataInfShip} = useContext(UserContext)

  console.log('tau',dataInfShip)
  // const [data, setData] = useState([
  //   {
  //     "idShip": 1,
  //     "tentau": "HC-1234-TS1",
  //     "date_create": "2023-07-12T15:57:07",
  //     "isActive": true,
  //     "gpkt": "HAGPKT",
  //     "chutau": "abc",
  //     "gpkt_thoihan": "12/2/2022",
  //     "chieudailonnhat": 12,
  //     "congsuat": 12,
  //   },
  //     {
  //       "idShip": 4,
  //       "tentau": "TC-1234-TS",
  //       "date_create": "2023-07-19T10:24:18",
  //       "isActive": true,
  //       "gpkt": "HAGPKT",
  //       "chutau": "abc",
  //       "gpkt_thoihan": "12/2/2022",
  //       "chieudailonnhat": 12,
  //       "congsuat": 12
  //     }
  // ])


  //data[]
  const [inputValue, setInputValue] = useState({
    ten_chutau,
    ten_thuyentruong,
    id_tau,
    tau_bs,
    tau_chieudailonnhat,
    tau_tongcongsuatmaychinh,
    gpkt_so,
    gpkt_thoihan,
    nghephu1,
    nghephu2,
  });


  

  console.log(inputValue)
  return (
    <View>
      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, ten_chutau: text })}
            value={inputValue.ten_chutau}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>2. Họ và tên thuyền trưởng:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, ten_thuyentruong: text })}
            value={inputValue.ten_thuyentruong}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>

      <View style={[styles.row, { height: 'auto' }]}>
        <View style={[styles.row, { width: '33%', height: 'auto' }]}>
          <View style={[styles.row, { width: '40%' }]}>
            <Text style={[styles.text,]}>3. Số đăng ký tàu</Text>
            <Text style={{ color: 'red' }}>*</Text>
            <Text style={[styles.text,]}>:</Text>
          </View>
          <Picker
            selectedValue={inputValue.tau_bs}
            style={[styles.input]}
            onValueChange={(itemValue, itemIndex) => {
              //tau_bs và tentau là 1
              const dataInf = dataInfShip.find(item => itemValue === item.tentau);
              setInputValue({...inputValue, 
                tau_bs: dataInf.tentau,
                gpkt_so: dataInf.gpkt,
                gpkt_thoihan: dataInf.gpkt_thoihan,
              })}
            }
          >
            <Picker.Item style={styles.text} label="- Chọn tàu -" value="" />
            {              
              dataInfShip.map((value,key) => (
                  <Picker.Item 
                    key={key} 
                    style={styles.text}
                    label={value.tentau}
                    value={value.tentau} />
                ))
              }
          </Picker>
          {/* <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, numberShip: text })}
            value={inputValue.numberShip}
            style={[styles.input, styles.text]}
          /> */}
          {/* <Text style={styles.text}>; </Text> */}
        </View>
        <View style={[styles.row, { width: '33%', height: 'auto' }]}>
          <Text style={[styles.text, { width: '65%' }]}>4. Chiều dài lớn nhất của tàu:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, tau_chieudailonnhat: text })}
            value={inputValue.tau_chieudailonnhat}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>m; </Text>
        </View>
        <View style={[styles.row, { width: '34%', height: 'auto' }]}>
          <Text style={[styles.text, { width: '60%' }]}>5. Tổng công xuất máy chính:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, tau_tongcongsuatmaychinh: text })}
            value={inputValue.tau_tongcongsuatmaychinh}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>CV</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>6. Số giấy phép khai {'\n'} thác thuỷ sản:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, gpkt_so: text })}
            value={inputValue.gpkt_so}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>Thời hạn đến:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, gpkt_thoihan: text })}
            value={inputValue.gpkt_thoihan}
            style={[styles.input, styles.text]}
          />
          {/* <Pressable onPress={() => setOpen(true)}>
            <Image style={{ width: 16, height: 16 }} source={require('../../../../assets/images/calendar.png')} />
          </Pressable> */}
          <CustomDatePicker 
            onDateChange={(date) => 

                      setInputValue({
                        ...inputValue, gpkt_thoihan:dateNowFormat(date,"string")
                    })}
          />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>7. Ngề phụ 1:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, nghephu1: text })}
            value={inputValue.nghephu1}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>8. Nghề phụ 2:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, nghephu2: text })}
            value={inputValue.nghephu2}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
