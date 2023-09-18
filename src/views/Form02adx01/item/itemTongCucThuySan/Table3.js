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
import CustomDatePicker from '../../../others/CustomDatePicker';
import {dateNowFormat, convertStringToDate} from '../../../others/formatdate';
import {UserContext} from '../../../../contexts/UserContext';
import Moment from 'moment';
import moment from 'moment';
const Table3 = ({}) => {
  const {data0201, setData0201} = useContext(UserContext);

  //date
  const handleDateChange = (name, date) => {
    switch (name) {
      case 'departurePort':
        setData0201({
          ...data0201,
          ngay_di: Moment(date).format('YYYY-MM-DD'),
        });
        break;
      case 'arrivalPort':
        setData0201({
          ...data0201,
          ngay_ve: Moment(date).format('YYYY-MM-DD'),
        });
        break;
      case 'diary':
        setData0201({
          ...data0201,
          ngaynop: Moment(date).format('YYYY-MM-DD'),
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
                setData0201({...data0201, chuyenbien_so: text});
              }}
              value={data0201?.chuyenbien_so}
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
                  setData0201({...data0201, cang_di: text});
                }}
                value={data0201?.cang_di}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setData0201({
                    ...data0201,
                    ngay_di: moment(text).format('YYYY-MM-DDTHH:mm'),
                  });
                }}
                value={
                  data0201?.ngay_di === undefined
                    ? ''
                    : moment(data0201?.ngay_di).format('DD/MM/YYYY')
                }
              />
              <CustomDatePicker
                value={data0201?.ngay_di}
                onDateChange={date =>
                  setData0201({
                    ...data0201,
                    ngay_di: moment(date).format('YYYY-MM-DDTHH:mm'),
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
                  setData0201({...data0201, cang_ve: text});
                }}
                value={data0201?.cang_ve}
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Thời gian:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setData0201({
                    ...data0201,
                    ngay_ve: moment(text).format('YYYY-MM-DDTHH:mm'),
                  });
                }}
                value={
                  data0201?.ngay_ve === undefined
                    ? ''
                    : moment(data0201?.ngay_ve).format('DD/MM/YYYY')
                }
              />
              <CustomDatePicker
                value={data0201?.ngay_ve}
                onDateChange={date =>
                  setData0201({
                    ...data0201,
                    ngay_ve: moment(date).format('YYYY-MM-DDTHH:mm'),
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
                  setData0201({
                    ...data0201,
                    ngaynop: moment(text).format('YYYY-MM-DDTHH:mm'),
                  });
                }}
                value={
                  data0201?.ngaynop === undefined
                    ? ''
                    : moment(data0201?.ngaynop).format('DD/MM/YYYY')
                }
              />
              <CustomDatePicker
                value={data0201?.ngaynop}
                onDateChange={date =>
                  setData0201({
                    ...data0201,
                    ngaynop: moment(date).format('YYYY-MM-DDTHH:mm'),
                  })
                }
              />
            </View>
            <View style={[styles.row, {width: '50%'}]}>
              <Text style={styles.text}> Vào Sổ số:</Text>
              <TextInput
                style={[styles.input, styles.text]}
                onChangeText={text => {
                  setData0201({...data0201, vaoso_so: text});
                }}
                value={data0201?.vaoso_so}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Table3;
