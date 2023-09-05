import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Table3 from './itemTongCucThuySan/Table3';
import Table1 from './itemThongTinChungVeTauCa/Table1';

const ThongTinVeCacTau = () => {
  const [pressedItem, setPressedItem] = useState();

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
      id: 1,
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
  ]);

  const handleItemPress = id => {
    console.log('ID: ', id);
    // Check if the item is already pressed
    if (id === pressedItem) {
    } else {
      // If it's not pressed, set it as the pressed item
      setPressedItem(id);
    }
  };

  const handleDeleteButton = id => {
    const updatedThongTinHoatDong = thongTinHoatDong.filter(
      item => item.id !== id,
    );
    setThongTinHoatDong(updatedThongTinHoatDong);
  };

  const handleAddButton = () => {
    const obj = {
      id: thongTinHoatDong.length + 1,
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
    const newArray = [...thongTinHoatDong, obj];
    setThongTinHoatDong(newArray);
  };

  const renderButton = (item, index) => {
    const isPressed = index === pressedItem;
    return (
      <TouchableOpacity
        style={[
          styles.container,
          isPressed ? {backgroundColor: '#0ea5e9'} : {backgroundColor: 'grey'},
        ]}
        onPress={() => handleItemPress(index)}>
        <Text style={styles.text}>{`B.${index + 1}`}</Text>
        <TouchableOpacity
          onPress={() => handleDeleteButton(item.id)}
          style={styles.circle}>
          <Text style={styles.minus}>-</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          lineHeight: 28,
          color: 'black',
        }}>
        B. THÔNG TIN VỀ CÁC TÀU ĐÃ ĐƯỢC THU MUA, CHUYỂN TẢI *
      </Text>
      <ScrollView style={{marginBottom: 35}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <FlatList
            data={thongTinHoatDong}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => renderButton(item, index)}
            keyExtractor={item => item.id.toString()}
          />
          <TouchableOpacity onPress={handleAddButton} style={styles.container}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <Table1 />
      </ScrollView>
    </View>
  );
};

export default ThongTinVeCacTau;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    top: -13,
    right: -10,
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  minus: {
    fontSize: 40,
    fontWeight: 'bold',
    top: -10,
    color: 'white',
  },
  plus: {
    fontSize: 40,
    color: 'white',
  },
});
