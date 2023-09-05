import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomDatePicker from '../../../others/CustomDatePicker';
import moment from 'moment';

const widthTT = 60;
const widthSoDkTauca = 200;
const widthThoiGian = 200;
const widthToaDo = 150;
const widthLoai = 100;
const widthTongKhoiLuong = 200;
const widthTongKhoiLuongTong = widthToaDo * 4 + widthTT + widthThoiGian * 2;

const ThongTinChiTietHoatDong = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const [thongTinHoatDong, setThongTinHoatDong] = useState([
    {
      id: 0,
      dairy_id: 0,
      methu: '1',
      thoidiem_tha: '2023-09-05T09:33',
      vido_tha: '',
      kinhdo_tha: '',
      thoidiem_thu: '2023-09-05T09:33',
      vido_thu: '',
      kinhdo_thu: '',
      loai_1: '',
      loai_2: '',
      loai_3: '',
      loai_4: '',
      loai_5: '',
      loai_6: '',
      loai_1_kl: '',
      loai_2_kl: '',
      loai_3_kl: '',
      loai_4_kl: '',
      loai_5_kl: '',
      loai_6_kl: '',
      tongsanluong: '',
    },
    {
      id: 2,
      dairy_id: 0,
      methu: '2',
      thoidiem_tha: '2023-09-05T09:33',
      vido_tha: '',
      kinhdo_tha: '',
      thoidiem_thu: '2023-09-05T09:33',
      vido_thu: '',
      kinhdo_thu: '',
      loai_1: '',
      loai_2: '',
      loai_3: '',
      loai_4: '',
      loai_5: '',
      loai_6: '',
      loai_1_kl: '',
      loai_2_kl: '',
      loai_3_kl: '',
      loai_4_kl: '',
      loai_5_kl: '',
      loai_6_kl: '',
      tongsanluong: '',
    },
  ]);

  const handleThemDong = () => {
    const objectAdd = {
      id: 0,
      dairy_id: 0,
      methu: '1',
      thoidiem_tha: '2023-09-05T09:33',
      vido_tha: '',
      kinhdo_tha: '',
      thoidiem_thu: '2023-09-05T09:33',
      vido_thu: '',
      kinhdo_thu: '',
      loai_1: '',
      loai_2: '',
      loai_3: '',
      loai_4: '',
      loai_5: '',
      loai_6: '',
      loai_1_kl: '',
      loai_2_kl: '',
      loai_3_kl: '',
      loai_4_kl: '',
      loai_5_kl: '',
      loai_6_kl: '',
      tongsanluong: '',
    };

    const updatedThongTinHoatDong = thongTinHoatDong.concat(objectAdd);
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleXoaDong = () => {
    const itemToRemove = thongTinHoatDong[selectedItemIndex];

    if (itemToRemove) {
      const updated = thongTinHoatDong.filter(
        item => item.id !== itemToRemove.id,
      );
      setThongTinHoatDong(updated);
    } else {
      Alert.alert('Cần chọn dòng', '', [{text: 'OK'}]);
    }
  };

  const handleChonItem = index => {
    setSelectedItemIndex(index);
  };

  const handleChangeViDoTha = (text, id) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      if (item.id === id) {
        return {...item, vido_tha: text};
      }
      return item;
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleChangeKinhDoTha = (text, id) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      if (item.id === id) {
        return {...item, kinhdo_tha: text};
      }
      return item;
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleChangeViDoThu = (text, id) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      if (item.id === id) {
        return {...item, vido_thu: text};
      }
      return item;
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleChangeKinhDoThu = (text, id) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      if (item.id === id) {
        return {...item, kinhdo_thu: text};
      }
      return item;
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleChangeKhoiLuongLoai = (khoiluong, id, loai) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      if (item.id === id) {
        if (loai == 'loai_1_kl') {
          item.loai_1_kl = khoiluong;
        } else if (loai == 'loai_2_kl') {
          item.loai_2_kl = khoiluong;
        } else if (loai == 'loai_3_kl') {
          item.loai_3_kl = khoiluong;
        } else if (loai == 'loai_4_kl') {
          item.loai_4_kl = khoiluong;
        } else if (loai == 'loai_5_kl') {
          item.loai_5_kl = khoiluong;
        } else if (loai == 'loai_6_kl') {
          item.loai_6_kl = khoiluong;
        }
        const newTongSanLuong =
          (parseInt(item.loai_1_kl) || 0) +
          (parseInt(item.loai_2_kl) || 0) +
          (parseInt(item.loai_3_kl) || 0) +
          (parseInt(item.loai_4_kl) || 0) +
          (parseInt(item.loai_5_kl) || 0) +
          (parseInt(item.loai_6_kl) || 0);
        return {
          ...item,
          [loai]: khoiluong,
          tongsanluong: newTongSanLuong.toString(),
        };
      }
      return item;
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleChangeLoai = (text, loai) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      return {
        ...item,
        [loai]: text,
      };
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleChangeDateTha = (date, id) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      if (item.id === id) {
        // return {...item, ngaythang: date};
        return {...item, ngaythang: moment(date).format('YYYY-MM-DD')};
      }
      return item;
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleChangeDateThu = (date, id) => {
    const updatedThongTinHoatDong = thongTinHoatDong.map(item => {
      if (item.id === id) {
        // return {...item, ngaythang: date};
        return {...item, ngaythang: moment(date).format('YYYY-MM-DD')};
      }
      return item;
    });
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const calculateTongKhoiLuong = fieldName => {
    let total = 0;

    thongTinHoatDong.forEach(item => {
      if (item[fieldName]) {
        total += parseFloat(item[fieldName]); // Convert to float to ensure proper addition
      }
    });

    return total;
  };
  const ThongTinHoatDongItem = ({item, index}) => {
    const isSelected = selectedItemIndex === index;

    return (
      <Pressable
        key={index}
        onPress={() => handleChonItem(index)}
        style={[
          {flexDirection: 'row', backgroundColor: 'white'},
          isSelected && {backgroundColor: 'lightblue'},
        ]}>
        <Text style={styles.textTT}>{index + 1}</Text>

        <View
          style={[
            styles.inputNgay,
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            },
          ]}>
          <TextInput
            style={styles.text}
            value={item.thoidiem_tha.toString()}
            onChangeText={text => handleChangeDateTha(text, item.id)}
          />
          <CustomDatePicker
            onDateChange={date => handleChangeDateTha(date, item.id)}
          />
        </View>
        <TextInput
          keyboardType="numeric"
          style={styles.inputToaDo}
          value={item.vido_tha}
          onChangeText={text => handleChangeViDoTha(text, item.id)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputToaDo}
          value={item.kinhdo_tha}
          onChangeText={text => handleChangeKinhDoTha(text, item.id)}
        />
        <View
          style={[
            styles.inputNgay,
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            },
          ]}>
          <TextInput
            style={styles.text}
            value={item.thoidiem_thu.toString()}
            onChangeText={text => handleChangeDateThu(text, item.id)}
          />
          <CustomDatePicker
            onDateChange={date => handleChangeDateThu(date, item.id)}
          />
        </View>
        <TextInput
          keyboardType="numeric"
          style={styles.inputToaDo}
          value={item.vido_thu}
          onChangeText={text => handleChangeViDoThu(text, item.id)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputToaDo}
          value={item.kinhdo_thu}
          onChangeText={text => handleChangeKinhDoThu(text, item.id)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_1_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_1_kl')
          }
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_2_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_2_kl')
          }
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_3_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_3_kl')
          }
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_4_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_4_kl')
          }
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_5_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_5_kl')
          }
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_6_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_6_kl')
          }
        />
        <Text style={styles.textTongKhoiLuong}>{item.tongsanluong}</Text>
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          lineHeight: 28,
          color: 'black',
          marginVertical: 15,
        }}>
        II. THÔNG TIN CHI TIẾT VỀ HOẠT ĐỘNG KHAI THÁC THỦY SẢN LIÊN QUAN ĐẾN SẢN
        PHẨM THU MUA, CHUYỂN TẢI
      </Text>
      <ScrollView>
        <ScrollView horizontal={true} style={{}}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#0ACEF5',
              }}>
              <Text style={styles.textTT}>Mẻ thứ</Text>

              <Text style={styles.textNgayThang}>
                Thời điểm thả {'\n'} (giờ, phút, ngày, tháng)
              </Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textViTriThuMua}>Vị trí thả</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textToaDo}>Vĩ độ</Text>
                  <Text style={styles.textToaDo}>Kinh độ</Text>
                </View>
              </View>
              <Text style={styles.textNgayThang}>
                Thời điểm thu {'\n'} (giờ, phút, ngày, tháng)
              </Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textViTriThuMua}>Vị trí thu</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textToaDo}>Vĩ độ</Text>
                  <Text style={styles.textToaDo}>Kinh độ</Text>
                </View>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textKhoiLuongThuySanDaMua}>
                  Khối lượng loài thủy sản đã thu mua, chuyển tải (kg)
                </Text>
                <View style={{flexDirection: 'row'}}>
                  {/* View Loai 1 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thongTinHoatDong[0].loai_1}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_1')
                      }></TextInput>
                  </View>
                  {/* View Loài 2 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thongTinHoatDong[0].loai_2}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_2')
                      }></TextInput>
                  </View>
                  {/* View Loài 3 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thongTinHoatDong[0].loai_3}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_3')
                      }></TextInput>
                  </View>
                  {/* View Loài 4 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thongTinHoatDong[0].loai_4}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_4')
                      }></TextInput>
                  </View>
                  {/* View Loài 5 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thongTinHoatDong[0].loai_5}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_5')
                      }></TextInput>
                  </View>
                  {/* View Loài 6 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thongTinHoatDong[0].loai_6}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_6')
                      }></TextInput>
                  </View>
                </View>
              </View>
              <Text style={styles.textTongKhoiLuong}>Tổng khối lượng (kg)</Text>
            </View>
            {/* <View style={{flexDirection: 'column'}}>
                {thumua.map((item, index) => (
                  <View key={item.id}>
                    <KetQuaThuMuaItem item={item} index={index} key={index} />
                  </View>
                ))}
              </View> */}
            <FlatList
              data={thongTinHoatDong}
              renderItem={ThongTinHoatDongItem}
              keyExtractor={item => item.id}
            />
            <View style={{flexDirection: 'row', height: 50}}>
              <Text style={styles.textTongKhoiLuongTong}>Tổng khối lượng</Text>
              <Text style={styles.textKhoiLuongTong}>
                {calculateTongKhoiLuong('loai_1_kl')}
              </Text>
              <Text style={styles.textKhoiLuongTong}>
                {calculateTongKhoiLuong('loai_2_kl')}
              </Text>
              <Text style={styles.textKhoiLuongTong}>
                {calculateTongKhoiLuong('loai_3_kl')}
              </Text>
              <Text style={styles.textKhoiLuongTong}>
                {calculateTongKhoiLuong('loai_4_kl')}
              </Text>
              <Text style={styles.textKhoiLuongTong}>
                {calculateTongKhoiLuong('loai_5_kl')}
              </Text>
              <Text style={styles.textKhoiLuongTong}>
                {calculateTongKhoiLuong('loai_6_kl')}
              </Text>
              <Text style={styles.textTongKhoiLuong}>
                {calculateTongKhoiLuong('tongsanluong')}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={styles.btnThemDong}
            onPress={() => handleThemDong()}>
            <Text style={styles.textBtn}>Thêm dòng</Text>
          </Pressable>
          <Pressable style={styles.btnXoaDong} onPress={() => handleXoaDong()}>
            <Text style={styles.textBtn}>Xóa dòng</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ThongTinChiTietHoatDong;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnThemDong: {
    backgroundColor: '#3b82f6',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    borderWidth: 0.1,
    borderRadius: 10,

    margin: 10,
  },
  btnXoaDong: {
    backgroundColor: '#ef4444',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    borderWidth: 0.1,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textBtn: {
    fontWeight: '200',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  textKhoiLuong: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: widthLoai,
    height: 40,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textKhoiLuongTong: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: widthLoai,
    height: 50,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textKhoiLuongThuySanDaMua: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: 600,
    height: 40,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textViTriThuMua: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: 300,
    height: 80,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textToaDo: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: widthToaDo,
    height: 50,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textNgayThang: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: widthSoDkTauca,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTT: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: widthTT,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textSoDkTauCa: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: widthSoDkTauca,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTongKhoiLuong: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: widthTongKhoiLuong,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTongKhoiLuongTong: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 1,
    width: widthTongKhoiLuongTong,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  inputKhoiLuong: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    backgroundColor: 'white',
    color: 'black',
    width: 100,
    borderWidth: 0.6,
    borderColor: '#0099FF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputToaDo: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    backgroundColor: 'white',
    color: 'black',
    width: widthToaDo,
    borderWidth: 0.6,
    borderColor: '#0099FF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputKhoiLuongLoai: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    backgroundColor: 'white',
    color: 'black',
    width: widthLoai,
    borderWidth: 0.6,
    borderColor: '#0099FF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputNgay: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    backgroundColor: 'white',
    color: 'black',
    width: widthSoDkTauca,
    borderWidth: 0.6,
    borderColor: '#0099FF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
