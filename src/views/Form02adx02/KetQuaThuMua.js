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

const widthTT = 60;
const widthSoDkTauca = 200;
const widthThoiGian = 200;
const widthToaDo = 150;
const widthLoai = 100;
const widthTongKhoiLuong = 200;
const widthTongKhoiLuongTong =
  widthToaDo * 2 + widthTT + widthSoDkTauca + widthThoiGian;

const KetQuaThuMua = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [inputValue, setInputValue] = useState('');
  const [thumua, setThumua] = useState([
    {
      id: 6,
      dairy_id: 1,
      ngaythang: '2023-08-23',
      id_tau: '0',
      tau_bs: 'abc',
      tm_ct_vt_vido: '12',
      tm_ct_vt_kinhdo: '106',
      loai_1: 'ca',
      loai_2: 'tom',
      loai_3: '',
      loai_4: '',
      loai_5: '',
      loai_6: '',
      loai_1_kl: '23',
      loai_2_kl: '123',
      loai_3_kl: '',
      loai_4_kl: '',
      loai_5_kl: '',
      loai_6_kl: '',
      tongsanluong: '146',
      who_create: 0,
      isdelete: 0,
    },
    {
      id: 7,
      dairy_id: 1,
      ngaythang: '2023-08-26',
      id_tau: '0',
      tau_bs: '',
      tm_ct_vt_vido: '',
      tm_ct_vt_kinhdo: '',
      loai_1: 'ca',
      loai_2: 'tom',
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
      who_create: 0,
      isdelete: 0,
    },
    {
      id: 111,
      dairy_id: 1,
      ngaythang: '2023-08-26',
      id_tau: '0',
      tau_bs: '',
      tm_ct_vt_vido: '',
      tm_ct_vt_kinhdo: '',
      loai_1: 'ca',
      loai_2: 'tom',
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
      who_create: 0,
      isdelete: 0,
    },
  ]);

  const handleThemDong = () => {
    const objectAdd = {
      id: thumua.length,
      dairy_id: 0,
      ngaythang: '2023-09-04',
      id_tau: '',
      tau_bs: '',
      tm_ct_vt_vido: '',
      tm_ct_vt_kinhdo: '',
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

    // Add objectAdd to the thumua array
    const updatedThumua = thumua.concat(objectAdd);
    // Set the updated array as the new thumua state
    setThumua(updatedThumua); // Assuming you have a state variable for thumua
  };

  const handleXoaDong = () => {
    const itemToRemove = thumua[selectedItemIndex];

    if (itemToRemove) {
      const updated = thumua.filter(item => item.id !== itemToRemove.id);
      setThumua(updated);
    } else {
      Alert.alert('Cần chọn dòng', '', [{text: 'OK'}]);
    }
  };

  const handleChonItem = index => {
    setSelectedItemIndex(index);
  };

  const handleChangeViDo = (text, id) => {
    const updatedThumua = thumua.map(item => {
      if (item.id === id) {
        return {...item, tm_ct_vt_vido: text};
      }
      return item;
    });
    setThumua(updatedThumua);
  };

  const handleChangeKinhDo = (text, id) => {
    const updatedThumua = thumua.map(item => {
      if (item.id === id) {
        return {...item, tm_ct_vt_kinhdo: text};
      }
      return item;
    });
    setThumua(updatedThumua);
  };

  const handleChangeKhoiLuongLoai = (text, id, loai) => {
    const updatedThumua = thumua.map(item => {
      if (item.id === id) {
        // Calculate the new tongsanluong by adding the value of loai to the existing tongsanluong
        const newTongSanLuong =
          (parseFloat(item.tongsanluong) || 0) + (parseFloat(text) || 0);

        // Update the item with the new values
        return {
          ...item,
          [loai]: text,
          tongsanluong: newTongSanLuong.toString(), // Convert back to string if needed
        };
      }
      return item;
    });

    setThumua(updatedThumua);
  };

  const handleChangeLoai = (text, loai) => {
    const updatedThumua = thumua.map(item => {
      return {
        ...item,
        [loai]: text,
      };
    });
    setThumua(updatedThumua);
  };

  const calculateTongKhoiLuong = fieldName => {
    let total = 0;

    thumua.forEach(item => {
      if (item[fieldName]) {
        total += parseFloat(item[fieldName]); // Convert to float to ensure proper addition
      }
    });

    return total;
  };

  const KetQuaThuMuaItem = ({item, index}) => {
    const isSelected = selectedItemIndex === index;

    return (
      <Pressable
        key={index}
        onPress={() => handleChonItem(index)}
        style={[
          {flexDirection: 'row'},
          isSelected && {backgroundColor: 'lightblue'}, // Change the background color as needed
        ]}>
        <Text style={styles.textTT}>{index + 1}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textSoDkTauCa}
          value={item.ngaythang}></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.textNgayThang}
          value={item.ngaythang}></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputToaDo}
          defaultValue={item.tm_ct_vt_vido}
          onChangeText={text => handleChangeViDo(text, item.id)}></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputToaDo}
          defaultValue={item.tm_ct_vt_kinhdo}
          onChangeText={text => handleChangeKinhDo(text, item.id)}></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_1_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_1_kl')
          }></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_2_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_2_kl')
          }></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_3_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_3_kl')
          }></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_4_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_4_kl')
          }></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_5_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_5_kl')
          }></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.inputKhoiLuongLoai}
          value={item.loai_6_kl}
          onChangeText={text =>
            handleChangeKhoiLuongLoai(text, item.id, 'loai_6_kl')
          }></TextInput>
        <Text style={styles.textTongKhoiLuong}>{item.tongsanluong}</Text>
      </Pressable>

      //   <View
      //     style={[
      //       {flexDirection: 'row'},
      //       isSelected && {backgroundColor: 'lightblue'}, // Change the background color as needed
      //     ]}>
      //     <Text style={styles.textTT}>{item.id}</Text>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.textSoDkTauCa}
      //       value={item.ngaythang}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.textNgayThang}
      //       value={item.ngaythang}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputToaDo}
      //       value={item.tm_ct_vt_vido}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputToaDo}
      //       value={item.tm_ct_vt_kinhdo}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputKhoiLuongLoai}
      //       value={item.loai_1_kl}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputKhoiLuongLoai}
      //       value={item.loai_2_kl}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputKhoiLuongLoai}
      //       value={item.loai_3_kl}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputKhoiLuongLoai}
      //       value={item.loai_4_kl}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputKhoiLuongLoai}
      //       value={item.loai_5_kl}></TextInput>
      //     <TextInput
      //       keyboardType="numeric"
      //       style={styles.inputKhoiLuongLoai}
      //       value={item.loai_6_kl}></TextInput>
      //     <Text style={styles.textTongKhoiLuong}>{item.tongsanluong}</Text>
      //   </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text>A. KẾT QUẢ THU MUA, CHUYỂN TẢI CẢU CHUYẾN BIỂN</Text>
      <ScrollView>
        <ScrollView horizontal={true} style={{}}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#0ACEF5',
              }}>
              <Text style={styles.textTT}>TT</Text>

              <Text style={styles.textSoDkTauCa}>Số đăng ký tàu cá</Text>
              <Text style={styles.textNgayThang}>
                Thời gian {'\n'} (ngày, tháng, năm)
              </Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textViTriThuMua}>
                  Vị trí thu mua, chuyển tải
                </Text>
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
                      value={thumua[0].loai_1}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_1')
                      }></TextInput>
                  </View>
                  {/* View Loài 2 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thumua[0].loai_2}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_2')
                      }></TextInput>
                  </View>
                  {/* View Loài 3 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thumua[0].loai_3}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_3')
                      }></TextInput>
                  </View>
                  {/* View Loài 4 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thumua[0].loai_4}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_4')
                      }></TextInput>
                  </View>
                  {/* View Loài 5 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thumua[0].loai_5}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_5')
                      }></TextInput>
                  </View>
                  {/* View Loài 6 */}
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textKhoiLuong}>Loài</Text>
                    <TextInput
                      style={styles.inputKhoiLuong}
                      value={thumua[0].loai_6}
                      onChangeText={text =>
                        handleChangeLoai(text, 'loai_6')
                      }></TextInput>
                  </View>
                </View>
              </View>
              <Text style={styles.textTongKhoiLuong}>Tổng khối lượng (kg)</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              {thumua.map((item, index) => (
                <KetQuaThuMuaItem item={item} index={index} key={index} />
              ))}
            </View>

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

export default KetQuaThuMua;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    color: 'black',
    textAlign: 'center', // Center text horizontally
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
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: widthLoai,
    height: 40,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textKhoiLuongTong: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: widthLoai,
    height: 50,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textKhoiLuongThuySanDaMua: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: 600,
    height: 40,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textViTriThuMua: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: 300,
    height: 80,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textToaDo: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: widthToaDo,
    height: 50,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textNgayThang: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: widthSoDkTauca,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTT: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: widthTT,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textSoDkTauCa: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: widthSoDkTauca,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTongKhoiLuong: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
    width: widthTongKhoiLuong,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTongKhoiLuongTong: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    borderColor: 'blue',
    borderWidth: 0.2,
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
    width: 100,
    borderWidth: 0.2,
    borderColor: 'blue',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputToaDo: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    backgroundColor: 'white',
    width: widthToaDo,
    borderWidth: 0.2,
    borderColor: 'blue',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputKhoiLuongLoai: {
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 25,
    backgroundColor: 'white',
    width: widthLoai,
    borderWidth: 0.2,
    borderColor: 'blue',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
