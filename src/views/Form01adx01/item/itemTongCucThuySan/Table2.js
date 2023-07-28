import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import {FormContext} from '../../../../contexts/FormContext';
import {UserContext} from '../../../../contexts/UserContext';

const Table2 = ({}) => {


  const {thongTinTau, setThongTinTau} = useContext(FormContext);
  const {data,setData} = useContext(UserContext);

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
              setThongTinTau({...thongTinTau, ncau_chieudaivangcau: text});
              setData({...data, ncau_chieudaivangcau: text});
            }}
            value={data.ncau_chieudaivangcau}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Số lưỡi câu:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setThongTinTau({...thongTinTau, ncau_soluoicau: text});
              setData({...data, ncau_soluoicau: text});
            }}
            value={data.ncau_soluoicau}
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
              setThongTinTau({...thongTinTau, nluoivay_chieudailuoi: text});
              setData({...data, nluoivay_chieudailuoi: text});
            }}
            value={data.nluoivay_chieudailuoi}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setThongTinTau({...thongTinTau, nluoivay_chieucaoluoi: text});
              setData({...data, nluoivay_chieucaoluoi: text});
            }}
            value={data.nluoivay_chieucaoluoi}
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
              setThongTinTau({...thongTinTau, nluoichup_chuvimiengluoi: text});
              setData({...data, nluoichup_chuvimiengluoi: text});
            }}
            value={data.nluoichup_chuvimiengluoi}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setThongTinTau({...thongTinTau, nluoichup_chieucaoluoi: text});
              setData({...data, nluoichup_chieucaoluoi: text});
            }}
            value={data.nluoichup_chieudailuoi}
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
              setThongTinTau({
                ...thongTinTau,
                nluoikeo_chieudaigiengphao: text,
              });
              setData({...data, nluoikeo_chieudaigiengphao: text});
            }}
            value={data.nluoikeo_chieudaigiengphao}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, styles.text]}
            onChangeText={text => {
              setThongTinTau({
                ...thongTinTau,
                nluoikeo_chieudaitoanboluoi: text,
              });
              setData({...data, nluoikeo_chieudaitoanboluoi: text});
            }}
            value={data.nluoikeo_chieudaitoanboluoi}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '100%'}]}>
          <Text style={styles.text}>e. Nghề khác:</Text>
          <TextInput
            onChangeText={text => {
              setThongTinTau({...thongTinTau, nkhac: text});
              setData({...data, nkhac: text});
            }}
            value={data.nkhac}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table2;
