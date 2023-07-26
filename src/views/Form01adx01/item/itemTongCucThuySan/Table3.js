import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
// import DatePicker from 'react-native-date-picker'
import CustomDatePicker from './CustomDatePicker';
import {dateNowFormat, convertStringToDate} from './formatdate';

const Table3 = ({
  chuyenbien_so,
  cang_di,
  ngay_di,
  cang_ve,
  ngay_ve,
  ngaynop,
  vaoso_so,
  who_create,
  dairy_name,
  date_create,
  isdraft,
  date_modified,
}) => {
  const [inputValue, setInputValue] = useState({
    chuyenbien_so,
    cang_di,
    ngay_di,
    cang_ve,
    ngay_ve,
    ngaynop,
    vaoso_so,
    who_create,
    dairy_name,
    date_create,
    isdraft,
    date_modified,
  });

  const {thongTinTau, setThongTinTau} = useContext(FormContext);

  //date
  const handleDateChange = (name, date) => {
    switch (name) {
      case 'departurePort':
        setInputValue({
          ...inputValue,
          ngay_di: dateNowFormat(date, 'date'),
        });
        setThongTinTau({...thongTinTau, ngay_di: dateNowFormat(date, 'date')});
        break;
      case 'arrivalPort':
        setInputValue({
          ...inputValue,
          ngay_ve: dateNowFormat(date, 'date'),
        });
        setThongTinTau({...thongTinTau, ngay_ve: dateNowFormat(date, 'date')});

        break;
      case 'diary':
        setInputValue({
          ...inputValue,
          ngaynop: dateNowFormat(date, 'date'),
        });
        setThongTinTau({...thongTinTau, ngaynop: dateNowFormat(date, 'date')});

        break;
    }
  };
  console.log(inputValue);

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
                setInputValue({...inputValue, chuyenbien_so: text});
              }}
              value={inputValue.chuyenbien_so}
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
                  setInputValue({...inputValue, cang_di: text});
                }}
                value={inputValue.cang_di}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, ngay_di: text});
                  setInputValue({...inputValue, ngay_di: text});
                }}
                value={convertStringToDate(inputValue.ngay_di)}
              />
              <CustomDatePicker
                value={ngay_di}
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
                  setInputValue({...inputValue, cang_ve: text});
                }}
                value={inputValue.cang_ve}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, ngay_ve: text});
                  setInputValue({...inputValue, ngay_ve: text});
                }}
                value={convertStringToDate(inputValue.ngay_ve)}
              />
              <CustomDatePicker
                value={ngay_ve}
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
                  setInputValue({...inputValue, ngaynop: text});
                }}
                value={convertStringToDate(inputValue.ngaynop)}
              />
              <CustomDatePicker
                value={ngaynop}
                onDateChange={date => handleDateChange('diary', date)}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Vào Sổ số:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setThongTinTau({...thongTinTau, vaoso_so: text});
                  setInputValue({...inputValue, vaoso_so: text});
                }}
                value={inputValue.vaoso_so}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Table3;
