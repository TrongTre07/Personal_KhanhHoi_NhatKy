
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React, { useState, useMemo } from 'react';
import styles from './styles';
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';

const Table1 = ({
  nameOwner,
  namePilot,
  arrNumberShip,
  numberShip,
  longMaxShip,
  sumEngine,
  numberSeafood,
  dateSeafood,
  sideJob1,
  sideJob2,
}) => {

  //data[]
  const [inputValue, setInputValue] = useState({
    nameOwner,
    namePilot,
    numberShip,
    longMaxShip,
    sumEngine,
    numberSeafood,
    dateSeafood,
    sideJob1,
    sideJob2,
  });
  //data
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  // console.log(inputValue)
  return (
    <View>
      {open && (
        <DatePicker
          modal
          mode={"date"}
          open={open}
          date={date}
          onConfirm={(date) => {
            setInputValue({
              ...inputValue, dateSeafood:
                date.getDate() + '/' +
                Number(date.getMonth() + 1) + '/' +
                date.getFullYear()
            })
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      )}
      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, nameOwner: text })}
            value={inputValue.nameOwner}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>2. Họ và tên thuyền trưởng:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, namePilot: text })}
            value={inputValue.namePilot}
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
            selectedValue={inputValue.numberShip}
            style={[styles.input]}
            onValueChange={(itemValue, itemIndex) => setInputValue({...inputValue, numberShip:itemValue})}
          >
            <Picker.Item style={styles.text} label="- Chọn tàu -" value="" />
            {              
              arrNumberShip.map((value,key) => (
                  <Picker.Item 
                    key={key} 
                    style={styles.text}
                    label={value}
                    value={value} />
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
            onChangeText={(text) => setInputValue({ ...inputValue, longMaxShip: text })}
            value={inputValue.longMaxShip}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>m; </Text>
        </View>
        <View style={[styles.row, { width: '34%', height: 'auto' }]}>
          <Text style={[styles.text, { width: '60%' }]}>5. Tổng công xuất máy chính:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, sumEngine: text })}
            value={inputValue.sumEngine}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>CV</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>6. Số giấy phép khai {'\n'} thác thuỷ sản:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, numberSeafood: text })}
            value={inputValue.numberSeafood}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>Thời gian đến:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, dateSeafood: text })}
            value={inputValue.dateSeafood.toString()}
            style={[styles.input, styles.text]}
          />
          <Pressable onPress={() => setOpen(true)}>
            <Image style={{ width: 16, height: 16 }} source={require('../../img/iconDate.jpg')} />
          </Pressable>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>7. Ngề phụ 1:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, sideJob1: text })}
            value={inputValue.sideJob1}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>8. Nghề phụ 2:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, sideJob2: text })}
            value={inputValue.sideJob2}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
