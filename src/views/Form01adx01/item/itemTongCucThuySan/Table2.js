import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import {FormContext} from '../../../../contexts/FormContext';

const Table2 = ({jobCau, jobVayRe, jobChup, jobKeo, jobOther}) => {
  const [inputValue, setInputValue] = useState({
    jobCau,
    jobVayRe,
    jobChup,
    jobKeo,
    jobOther,
  });

  const {thongTinTau, setThongTinTau} = useContext(FormContext);

  const handleChieuDaiVangCau = value => {
    setInputValue({...inputValue, jobCau: {...jobCau, size: value}});
    setThongTinTau({...thongTinTau, ncau_chieudaivangcau: value});
  };

  const handleSoLuoiCau = value => {
    setInputValue({...inputValue, jobCau: {...jobCau, number: value}});
    setThongTinTau({...thongTinTau, ncau_soluoicau: value});
  };

  const handleChieuDaiLuoiVay = value => {
    setInputValue({
      ...inputValue,
      jobVayRe: {...jobVayRe, size: value},
    });
    setThongTinTau({...thongTinTau, nluoivay_chieudailuoi: value});
  };

  const handleChieuCaoLuoiVay = value => {
    setInputValue({
      ...inputValue,
      jobVayRe: {...jobVayRe, number: value},
    });
    setThongTinTau({...thongTinTau, nluoivay_chieucaoluoi: value});
  };

  const handleChuViMiengLuoiChup = value => {
    setInputValue({...inputValue, jobChup: {...jobChup, size: value}});
    setThongTinTau({...thongTinTau, nluoichup_chuvimiengluoi: value});
  };

  const handleChieuCaoLuoiChup = value => {
    setInputValue({
      ...inputValue,
      jobChup: {...jobChup, number: value},
    });
    setThongTinTau({...thongTinTau, nluoichup_chieucaoluoi: value});
  };

  const handleChieuDaiGiengPhaoKeo = value => {
    setInputValue({...inputValue, jobKeo: {...jobKeo, size: value}});
    setThongTinTau({...thongTinTau, nluoikeo_chieudaigiengphao: value});
  };

  const handleChieuCaoLuoiKeo = value => {
    setInputValue({...inputValue, jobKeo: {...jobKeo, number: value}});
    setThongTinTau({...thongTinTau, nluoikeo_chieudaitoanboluoi: value});
  };

  const handleNgheKhac = value => {
    setInputValue({...inputValue, jobOther: value});
    setThongTinTau({...thongTinTau, nkhac: value});

    // const updatedThongTinTau = {...thongTinTau};
    // updatedThongTinTau.nkhac = value;
    // console.log('NGHE KHAC: ', updatedThongTinTau);
  };

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
            style={[styles.input, styles.text]}
            onChangeText={handleChieuDaiVangCau}
            // value={inputValue.jobCau?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Số lưỡi câu:</Text>
          <TextInput
            style={[styles.input, styles.text]}
            onChangeText={handleSoLuoiCau}
            // value={inputValue.jobCau?.number}
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
            style={[styles.input, styles.text]}
            onChangeText={handleChieuDaiLuoiVay}
            // value={inputValue.jobVayRe?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            style={[styles.input, styles.text]}
            onChangeText={handleChieuCaoLuoiVay}
            // value={inputValue.jobVayRe?.number}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '65%'}]}>
          <Text style={styles.text}>c. Nghề lưới chụp: Chu vi miệng lưới</Text>
          <TextInput
            style={[styles.input, styles.text]}
            onChangeText={handleChuViMiengLuoiChup}
            // value={inputValue.jobChup?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            style={[styles.input, styles.text]}
            onChangeText={handleChieuCaoLuoiChup}
            // value={inputValue.jobChup?.number}
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
            style={[styles.input, styles.text]}
            onChangeText={handleChieuDaiGiengPhaoKeo}
            // value={inputValue.jobKeo?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row, {width: '35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput
            style={[styles.input, styles.text]}
            onChangeText={handleChieuCaoLuoiKeo}
            // value={inputValue.jobKeo?.number}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '100%'}]}>
          <Text style={styles.text}>e. Nghề khác:</Text>
          <TextInput
            onChangeText={handleNgheKhac}
            // value={inputValue.jobOther}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Table2;
