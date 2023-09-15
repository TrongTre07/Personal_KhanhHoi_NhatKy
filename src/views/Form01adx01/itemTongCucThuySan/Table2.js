import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import { UserContext } from '../../../contexts/UserContext';

const Table2 = ({}) => {
  const {data0101, setData0101} = useContext(UserContext);

  return (
    <View>
      <View>
        <Text style={styles.text}>
          9. Kích thước chủ yếu của ngư cụ {'('}ghi cụ thể theo nghề chính {')'}
          :
        </Text>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '65%'}]}>
          <Text style={styles.text}>
            a. Nghề câu: Chiều dài toàn bộ vàng câu
          </Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, ncau_chieudaivangcau: text});
            }}
            value={data0101?.ncau_chieudaivangcau}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Số lưỡi câu:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, ncau_soluoicau: text});
            }}
            value={data0101?.ncau_soluoicau}
          />
          <Text style={styles.text}>lưỡi</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '65%'}]}>
          <Text style={styles.text}>
            b. Nghề lưới vây, rê: Chiều dài toàn bộ lưới
          </Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, nluoivay_chieudailuoi: text});
            }}
            value={data0101?.nluoivay_chieudailuoi}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, nluoivay_chieucaoluoi: text});
            }}
            value={data0101?.nluoivay_chieucaoluoi}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '65%'}]}>
          <Text style={styles.text}>c. Nghề lưới chụp: Chu vi miệng lưới</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, nluoichup_chuvimiengluoi: text});
            }}
            value={data0101?.nluoichup_chuvimiengluoi}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, nluoichup_chieucaoluoi: text});
            }}
            value={data0101?.nluoichup_chieucaoluoi}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '65%'}]}>
          <Text style={styles.text}>
            d. Nghề lưới kéo: Chiều dài giềng phao
          </Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, nluoikeo_chieudaigiengphao: text});
            }}
            value={data0101?.nluoikeo_chieudaigiengphao}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setData0101({...data0101, nluoikeo_chieudaitoanboluoi: text});
            }}
            value={data0101?.nluoikeo_chieudaitoanboluoi}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '100%'}]}>
          <Text style={styles.text}>e. Nghề khác:</Text>
          <TextInput
            onChangeText={text => {
              setData0101({...data0101, nkhac: text});
            }}
            value={data0101?.nkhac}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table2;
