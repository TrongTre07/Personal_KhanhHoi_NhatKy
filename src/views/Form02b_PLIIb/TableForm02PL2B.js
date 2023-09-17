import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import {UserContext} from '../../contexts/UserContext';

const TableForm02PL2B = () => {
  const {data02b_PLIIb, setData02b_PLIIb} = useContext(UserContext);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={[
          styles.row,
          {
            height: 70,
            marginTop: 5,
            borderWidth: 1,
            borderColor: '#0099FF',
          },
        ]}>
        <Text style={[styles.text, {marginLeft: 10}]}>
          Số chứng nhận/Document number:
        </Text>
        <TextInput
          onChangeText={text => {
            setData02b_PLIIb({...data02b_PLIIb, sochungnhan: text});
          }}
          value={data02b_PLIIb?.sochungnhan}
          style={[styles.input, styles.text, {marginTop: 10}]}
        />
        <Text style={[styles.text, {marginRight: 10}]}>;</Text>
      </View>
      <View
        style={[
          styles.row,
          {
            height: 140,
            borderWidth: 1,
            borderColor: '#0099FF',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            1. Quốc gia xuất khẩu/Country of Exportation:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, quocgiaxuatkhau: text});
            }}
            value={data02b_PLIIb?.quocgiaxuatkhau}
            style={[styles.input, styles.text, {marginTop: 10}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Cảng/sân bay/địa điểm xuất phát khác {'\n'}Port/airport/other place
            of departure:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, diadiemxuatphat: text});
            }}
            value={data02b_PLIIb?.diadiemxuatphat}
            style={[styles.input, styles.text, {marginTop: 10}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            height: 420,
            borderWidth: 1,
            borderColor: '#0099FF',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Tên tàu/nước treo cờ/Vessel name/flag:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, tentau: text});
            }}
            value={data02b_PLIIb?.tentau}
            style={[styles.input, styles.text, {marginTop: 10}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Số chuyến/số vận đơn đường biển {'\n'} Voyage No./Bill of landing
            No:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, sochuyen: text});
            }}
            value={data02b_PLIIb?.sochuyen}
            style={[styles.input, styles.text, {marginTop: 15}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Số chuyến bay/Số vận đơn hàng không {'\n'} Flight number/Airway bill
            number:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, sochuyenbay: text});
            }}
            value={data02b_PLIIb?.sochuyenbay}
            style={[styles.input, styles.text, {marginTop: 10}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Quốc tịch xe và số đăng ký {'\n'} Truck nationality and registration
            number:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, quoctichxevasodangky: text});
            }}
            value={data02b_PLIIb?.quoctichxevasodangky}
            style={[styles.input, styles.text, {marginTop: 10}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Số vận đơn đơn đường sắt {'\n'}Railway bill number:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, sovanndonduongsat: text});
            }}
            value={data02b_PLIIb?.sovanndonduongsat}
            style={[styles.input, styles.text, {marginTop: 10}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Các giấy tờ vận tải khác {'\n'} Other transport documents:
          </Text>
          <TextInput
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, giaytovantaikhac: text});
            }}
            value={data02b_PLIIb?.giaytovantaikhac}
            style={[styles.input, styles.text, {marginTop: 10}]}
          />
          <Text style={[styles.text, {marginRight: 10}]}>;</Text>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            height: 90,
            borderWidth: 1,
            borderColor: '#0099FF',
          },
        ]}>
        <Text style={[styles.text, {marginLeft: 10}]}>
          2. Chữ ký của tàu chủ hàng xuất khẩu {'\n'} Exporter Signature
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View
          style={[
            styles.row,
            {
              height: 180,
              borderWidth: 1,
              borderColor: '#0099FF',
              width: '25%',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            },
          ]}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Số công-ten-nơ, xem danh sách kèm theo {'\n'} Container number (s),
            see list below
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              height: 180,
              borderWidth: 1,
              borderColor: '#0099FF',
              width: '25%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={[styles.text, {marginLeft: 10}]}>
            Tên của nhà xuất khẩu {'\n'} Name of Exporter
          </Text>
          <TextInput
            style={[
              styles.input,
              styles.text,
              {marginBottom: 10, width: '90%', marginHorizontal: '15'},
            ]}
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, tennhaxuatkhau: text});
            }}
            value={data02b_PLIIb?.tennhaxuatkhau}
          />
        </View>
        <View
          style={[
            styles.row,
            {
              height: 180,
              borderWidth: 1,
              borderColor: '#0099FF',
              width: '25%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={[styles.text, {marginLeft: 10}]}>Địa chỉ/Address</Text>
          <TextInput
            style={[
              styles.input,
              styles.text,
              {marginBottom: 10, width: '90%', marginHorizontal: '15'},
            ]}
            onChangeText={text => {
              setData02b_PLIIb({...data02b_PLIIb, diachi: text});
            }}
            value={data02b_PLIIb?.diachi}
          />
        </View>
        <View
          style={[
            styles.row,
            {
              height: 180,
              borderWidth: 1,
              borderColor: '#0099FF',
              width: '25%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={[styles.text, {marginLeft: 10}]}>Chữ ký/Signature</Text>
        </View>
      </View>
    </View>
  );
};

export default TableForm02PL2B;
