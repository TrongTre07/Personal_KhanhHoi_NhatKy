import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './styles';
// import DatePicker from 'react-native-date-picker'
import CustomDatePicker from './CustomDatePicker';
import {dateNowFormat, convertStringToDate} from './formatdate';
import {FormContext} from '../../../../contexts/FormContext';

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
    setThongTinTau({...thongTinTau, cang_di: value});

  const handleCangVe = value => {
    setInputValue(prevState => ({
        ...prevState,
        arrivalPort: { ...prevState.arrivalPort, text: value },
      }));
    setThongTinTau({...thongTinTau, cang_ve: value});
  };

    //date
    const handleDateChange = (name, date) => {
        switch (name) {
            case 'departurePort':
                setInputValue({
                    ...inputValue,
                    ngay_di: dateNowFormat(date,"date")
                    },
                );
                break;
            case 'arrivalPort':
                setInputValue({
                    ...inputValue,
                    ngay_ve: dateNowFormat(date,"date"),
                
                });
                break;
            case 'diary':
                setInputValue({
                    ...inputValue,
                    ngaynop: dateNowFormat(date,"date"),
                });
                break;
        }
    };
    console.log(inputValue)

  const handleNgayVe = value => {
    handleDateChange('arrivalPort', value);
    setThongTinTau({...thongTinTau, ngay_ve: dateNowFormat(value, 'date')});
  };
  const handleNgayNop = value => {
    handleDateChange('diary', value);
    setThongTinTau({...thongTinTau, ngaynop: dateNowFormat(value, 'date')});
  };

  const handleVaoSoSo = value => {
    setInputValue({...inputValue, diary: {...diary, text: value}});
    setThongTinTau({...thongTinTau, vaoso_so: value});
    const updatedThongTinTau = {...thongTinTau};
    updatedThongTinTau.vaoso_so = value;
    console.log('UPDATED: ', updatedThongTinTau);
  };



  
  // console.log(inputValue)

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
              onChangeText={handleChuyenBienSo}
              //   value={inputValue.changeNumber}
            />
          </View>
        </View>
        <View style={[styles.row, {width: '67%'}]}>
          <View style={[styles.row]}>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> 10. Cảng đi:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={handleCangDi}
                // value={inputValue.departurePort?.text}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                editable={false}
                style={[styles.input, styles.text]}
                onChangeText={handleNgayDi}
                value={convertStringToDate(inputValue.departurePort?.date)}
              />
              <CustomDatePicker
                value={departurePort.date}
                onDateChange={handleNgayDi}
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
                onChangeText={handleCangVe}
                
                // value={inputValue.arrivalPort?.text}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text =>
                  setInputValue({
                    ...inputValue,
                    arrivalPort: {...arrivalPort, date: text},
                  })
                }
                editable={false}
                value={convertStringToDate(inputValue.arrivalPort?.date)}
              />
              <CustomDatePicker
                value={arrivalPort.date}
                onDateChange={handleNgayVe}
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
                onChangeText={text =>
                  setInputValue({...inputValue, diary: {...diary, date: text}})
                }
                value={convertStringToDate(inputValue.diary?.date)}
              />
              <CustomDatePicker
                value={arrivalPort.date}
                onDateChange={handleNgayNop}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Vào Sổ số:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={handleVaoSoSo}
                // value={inputValue.diary?.text}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Table3;
