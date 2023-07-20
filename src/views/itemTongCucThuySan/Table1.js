
import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const Table1 = ({
  nameOwner,
  namePilot,
  numberShip,
  longMaxShip,
  sumEngine,
  numberSeafood,
  dateSeafood,
  sideJob1,
  sideJob2,
}) => {
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

  return (
    <View>
      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>1. Họ và tên chủ tàu:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, nameOwner: text })}
            value={inputValue.nameOwner}
            style={[styles.input,styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>2. Họ và tên thuyền trưởng:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, namePilot: text })}
            value={inputValue.namePilot}
            style={[styles.input,styles.text]}
          />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '33%' }]}>
          <Text style={styles.text}>3. Số đăng ký tàu *:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, numberShip: text })}
            value={inputValue.numberShip}
            style={[styles.input,styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '33%' }]}>
          <Text style={styles.text}>4. Chiều dài lớn nhất của tàu:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, longMaxShip: text })}
            value={inputValue.longMaxShip}
            style={[styles.input,styles.text]}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, { width: '33%' }]}>
          <Text style={styles.text}>5. Tổng công xuất máy chính:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, sumEngine: text })}
            value={inputValue.sumEngine}
            style={[styles.input,styles.text]}
          />
          <Text style={styles.text}>CV</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>6. Số giấy phép khai thác thuỷ sản:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, numberSeafood: text })}
            value={inputValue.numberSeafood}
            style={[styles.input,styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>Thời gian đến:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, dateSeafood: text })}
            value={inputValue.dateSeafood}
            style={[styles.input,styles.text]}
          />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>7. Ngề phụ 1:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, sideJob1: text })}
            value={inputValue.sideJob1}
            style={[styles.input,styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text style={styles.text}>8. Nghề phụ 2:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, sideJob2: text })}
            value={inputValue.sideJob2}
            style={[styles.input,styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
