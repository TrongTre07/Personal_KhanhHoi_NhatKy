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
import CustomDatePicker from '../../others/CustomDatePicker';
import {UserContext} from '../../../contexts/UserContext';
import moment from 'moment';

const Table3 = ({}) => {
  const {data0101, setData0101} = useContext(UserContext);

  //date
  const handleDateChange = (name, date) => {
    switch (name) {
      case 'departurePort':
        setData0101({
          ...data0101,
          ngay_di: dateNowFormat(date, 'date'),
        });
        break;
      case 'arrivalPort':
        setData0101({
          ...data0101,
          ngay_ve: dateNowFormat(date, 'date'),
        });

        break;
      case 'diary':
        setData0101({
          ...data0101,
          ngaynop: dateNowFormat(date, 'date'),
        });

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
                setData0101({...data0101, chuyenbien_so: text});
              }}
              value={data0101?.chuyenbien_so}
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
                  setData0101({...data0101, cang_di: text});
                }}
                value={data0101?.cang_di}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setData0101({
                    ...data0101,
                    ngay_di: moment(text).format('YYYY-MM-DD'),
                  });
                }}
                value={moment(data0101?.ngay_di).format('DD/MM/YYYY')}
              />
              <CustomDatePicker
                // value={data0101?.ngay_di}
                onDateChange={date =>
                  setData0101({
                    ...data0101,
                    ngay_di: moment(date).format('YYYY-MM-DD'),
                  })
                }
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
                  setData0101({...data0101, cang_ve: text});
                }}
                value={data0101?.cang_ve}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setData0101({
                    ...data0101,
                    ngay_ve: moment(text).format('YYYY-MM-DD'),
                  });
                }}
                value={moment(data0101?.ngay_ve).format('DD/MM/YYYY')}
              />
              <CustomDatePicker
                // value={moment(data0101?.ngay_ve).format('DD/MM/YYYY')}
                onDateChange={date =>
                  setData0101({
                    ...data0101,
                    ngay_ve: moment(date).format('YYYY-MM-DD'),
                  })
                }
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
                  setData0101({
                    ...data0101,
                    ngaynop: moment(text).format('YYYY-MM-DD'),
                  });
                }}
                value={moment(data0101?.ngaynop).format('DD/MM/YYYY')}
              />
              <CustomDatePicker
                // value={data0101?.ngaynop}
                onDateChange={date =>
                  setData0101({
                    ...data0101,
                    ngaynop: moment(date).format('YYYY-MM-DD'),
                  })
                }
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Vào Sổ số:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setData0101({...data0101, vaoso_so: text});
                }}
                value={data0101?.vaoso_so}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Table3;
