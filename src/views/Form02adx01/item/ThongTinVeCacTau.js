import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Table3 from './itemTongCucThuySan/Table3';
import Table1 from './itemThongTinChungVeTauCa/Table1';
import ThongTinChiTietHoatDong from './B_ThongTinVeTauCa/ThongTinChiTietHoatDong';
import {useContext} from 'react';
import {UserContext} from '../../../contexts/UserContext';

const ThongTinVeCacTau = () => {

  const moment = require('moment');
  const currentDate = moment();
  const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm:ss');

  const [pressedItem, setPressedItem] = useState(0);

  const {data0201, setData0201} = useContext(UserContext);

  const handleItemPress = id => {
    if (id !== pressedItem) {
      setPressedItem(id);
    }
  };

  const handleDeleteButton = id => {
    const updatedData0201 = {...data0201};

    const indexToDelete = updatedData0201.thongtintaudc_thumua.findIndex(
      item => item.id === id,
    );

    if (indexToDelete !== -1) {
      updatedData0201.thongtintaudc_thumua.splice(indexToDelete, 1);
      setData0201(updatedData0201);
    } else {
      console.log('Item not found for deletion.');
    }
  };

  const handleAddButton = () => {
    const lastId = data0201.thongtintaudc_thumua.reduce((maxId, item) => {
      return item.id > maxId ? item.id : maxId;
    }, -1);

    const newId = lastId + 1;

    const obj = {
      id: newId,
      // dairy_id: data0201.id,
      id_tau: '',
      tau_bs: '',
      tau_chieudailonnhat: '',
      tau_tongcongsuatmaychinh: '',
      gpkt_so: '',
      gpkt_thoihan: formattedDate,
      nghekt: '',
      cang_di: '',
      ngay_di: formattedDate,
      tg_khaithac_tungay: formattedDate,
      tg_khaithac_denngay: formattedDate,
      thongtinhoatdong: [
        {
          id: 0,
          // dairy_id: 0,
          methu: '1',
          thoidiem_tha: formattedDate,
          vido_tha: '',
          kinhdo_tha: '',
          thoidiem_thu: formattedDate,
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
      ],
    };

    const newArray = {...data0201};
    newArray.thongtintaudc_thumua.push(obj);
    setData0201(newArray);
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
    <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          lineHeight: 28,
          color: 'black',
          marginVertical: 15,
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
            data={data0201.thongtintaudc_thumua}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => renderButton(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity onPress={handleAddButton} style={styles.container}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <Table1 selectedItem={pressedItem} />
        <ThongTinChiTietHoatDong selectedItem={pressedItem} />
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
