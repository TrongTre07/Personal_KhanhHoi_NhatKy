import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import styles from './styles';
// import DatePicker from 'react-native-date-picker'
import CustomDatePicker from './CustomDatePicker';
import {FormContext} from '../../../../contexts/FormContext';
import {dateNowFormat, convertStringToDate} from './formatdate';
import {UserContext} from '../../../../contexts/UserContext';

const Table3 = ({
}) => {


  const {thongTinTau, setThongTinTau} = useContext(FormContext);
  const {data,setData} = useContext(UserContext);

  //date
  const handleDateChange = (name, date) => {
    switch (name) {
      case 'departurePort':
        setData({
          ...data,
          ngay_di: dateNowFormat(date, 'date'),
        });
        setThongTinTau({...thongTinTau, ngay_di: dateNowFormat(date, 'date')});
        break;
      case 'arrivalPort':
        setData({
          ...data,
          ngay_ve: dateNowFormat(date, 'date'),
        });
        setThongTinTau({...thongTinTau, ngay_ve: dateNowFormat(date, 'date')});

        break;
      case 'diary':
        setData({
          ...data,
          ngaynop: dateNowFormat(date, 'date'),
        });
        setThongTinTau({...thongTinTau, ngaynop: dateNowFormat(date, 'date')});

        break;
    }
  };

  return (
    <View style={[{borderColor: '#0099FF', borderTopWidth: 0.6}]}>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '33%'}, styles.lineRight]}>
          <View style={[styles.row, {width: '100%'}]}>
            <Text style={[styles.text, {fontWeight: '600'}]}>
              Chuyển biển số:
            </Text>
            <TextInput
              style={[styles.input, styles.text, {fontWeight: '600'}]}
              onChangeText={text => {
                setThongTinTau({...thongTinTau, chuyenbien_so: text});
                setData({...data, chuyenbien_so: text});
              }}
              value={data.chuyenbien_so}
            />
          </View>
        </View>
        <View style={[styles.row, {width: '67%'}]}>
          <View style={[styles.row]}>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> 10. Cảng đi:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, cang_di: text});
                  setData({...data, cang_di: text});
                }}
                value={data.cang_di}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, ngay_di: text});
                  setData({...data, ngay_di: text});
                }}
                value={convertStringToDate(data.ngay_di)}
              />
              <CustomDatePicker
                value={data.ngay_di}
                onDateChange={date => handleDateChange('departurePort', date)}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '33%'}, styles.lineRight]}>
          <View style={[styles.row, {width: '100%', justifyContent: 'center'}]}>
            <Text style={styles.text}>(Ghi chuyến biển số mấy trong năm)</Text>
          </View>
        </View>
        <View style={[styles.row, {width: '67%'}]}>
          <View style={[styles.row]}>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> 11. Cảng về:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, cang_ve: text});
                  setData({...data, cang_ve: text});
                }}
                value={data.cang_ve}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, ngay_ve: text});
                  setData({...data, ngay_ve: text});
                }}
                value={convertStringToDate(data.ngay_ve)}
              />
              <CustomDatePicker
                value={data.ngay_ve}
                onDateChange={date => handleDateChange('arrivalPort', date)}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, {width: '33%'}, styles.lineRight]}>
          <View style={[styles.row, {width: '100%'}]}></View>
        </View>

        <View style={[styles.row, {width: '67%'}]}>
          <View style={[styles.row]}>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> 12. Nộp nhật ký</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, ngaynop: text});
                  setData({...data, ngaynop: text});
                }}
                value={convertStringToDate(data.ngaynop)}
              />
              <CustomDatePicker
                value={data.ngaynop}
                onDateChange={date => handleDateChange('diary', date)}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Vào Sổ số:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, vaoso_so: text});

                  setData({...data, vaoso_so: text});
                }}
                value={data.vaoso_so}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Table3;
