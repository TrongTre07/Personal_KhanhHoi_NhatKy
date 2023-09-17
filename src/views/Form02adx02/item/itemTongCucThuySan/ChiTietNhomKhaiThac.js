import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../../../contexts/UserContext';
import data0202Empty from '../../models/data0202';
const ChiTietNhomKhaiThac = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const { data0202, setData0202 } = useContext(UserContext);

  const handleThemDong = () => {
    try {
      let objAdd = data0202Empty.cangca_ds_denghi[0];
      // console.log('objAdd okokokokoko: ', objAdd);
      let updatedData0202 = { ...data0202 };
      // objAdd = {...objAdd, id: Math.random(1,9)};
      // if (updatedData0202.cangca_ds_denghi) {
      //   updatedData0202.cangca_ds_denghi.push(objAdd);
      // }
      updatedData0202.cangca_ds_denghi.push({...objAdd})
      setData0202(updatedData0202);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleXoaDong = () => {
    try {
      let lastObject = data0202.cangca_ds_denghi.length;
      if (lastObject == 1) {
        Alert.alert('Không thể xóa hết thông tin', '', [{ text: 'OK' }]);
        return;
      }

      data0202.cangca_ds_denghi.map(item => {
        if (item.hasOwnProperty('isdelete') && item.isdelete == true) {
          lastObject -= 1;
        }
      });
      if (lastObject == 1) {
        Alert.alert('Không thể xóa hết thông tin', '', [{ text: 'OK' }]);
        return;
      }

      let itemToRemove = data0202.cangca_ds_denghi[selectedItemIndex];
      if (itemToRemove) {
        if (itemToRemove.hasOwnProperty('isdelete')) {
          itemToRemove.isdelete = true;
          // Update data0202 with the modified itemToRemove
          let tempData= {...data0202};
          tempData.cangca_ds_denghi[selectedItemIndex] = itemToRemove;
          // const updatedData0202 = {
          //   ...data0202,
          //   cangca_ds_denghi: data0202.cangca_ds_denghi.map(item =>
          //     item.id === itemToRemove.id ? itemToRemove : item,
          //   ),
          // };
          // const updatedData0202 = tempData;
          setData0202(tempData);
        } 
        // else {
        //   // Item doesn't have isdelete field, remove it by filtering
        //   const updatedKhaiThac = data0202.cangca_ds_denghi.filter(
        //     item => item.id !== itemToRemove.id,
        //   );

        //   const updatedData0202 = {
        //     ...data0202,
        //     cangca_ds_denghi: updatedKhaiThac,
        //   };

        //   setData0202(updatedData0202);
        // }
      } else {
        Alert.alert('Cần chọn dòng', '', [{ text: 'OK' }]);
      }
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const calculateTongKhoiLuong = sanluong => {
    try {
      let total = 0;

      data0202.cangca_ds_denghi.forEach(item => {
        if (item[sanluong] && item.isdelete != true) {
          total += parseFloat(item[sanluong]); // Convert to float to ensure proper addition
        }
      });

      return total;
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleChonItem = index => {
    console.log('index; ', index);
    setSelectedItemIndex(index);
  };

  const TenLoaiThuySanItem = ({ item, index }) => {
    // console.log("data0202", data0202);

    let countIsDelete = 0;
    let rootIndex = index;
    let checkIsDeleted;
    if (item?.isdelete == true) {
      checkIsDeleted = true;
    } else {
      for (i = 0; i <= index; i++) {
        if (
          data0202.cangca_ds_denghi[i].isdelete 
        ) {
          countIsDelete++;
        }
      }
      rootIndex -= countIsDelete;
    }

    const isSelected = selectedItemIndex === index;
    if (checkIsDeleted) {
      return null;
    }

    return (
      <Pressable
        key={index}
        onPress={() => handleChonItem(index)}
        style={[
          { flexDirection: 'row', backgroundColor: 'white' },
          isSelected && { backgroundColor: 'lightblue' },
        ]}>
        <Text style={styles.textTT}>{rootIndex + 1}</Text>

        <TextInput
          style={styles.textTenLoaiThuySan}
          value={item.tencang}
          // onChangeText={text => handleChangeTenLoai(text, item.id)}
          onChangeText={text => {
            let tempdata0202 = { ...data0202 };
            tempdata0202.cangca_ds_denghi[index].tencang = text;
            setData0202(tempdata0202);
          }}
        />

        <TextInput
          style={styles.textTenLoaiThuySan}
          value={item.loaicangca}
          // onChangeText={text => handleChangeTenLoai(text, item.id)}
          onChangeText={text => {
            let tempdata0202 = { ...data0202 };
            tempdata0202.cangca_ds_denghi[index].loaicangca = text;
            setData0202(tempdata0202);
          }}
        />
        <TextInput
          style={styles.textTenLoaiThuySan}
          value={item.diachi}
          // onChangeText={text => handleChangeTenLoai(text, item.id)}
          onChangeText={text => {
            let tempdata0202 = { ...data0202 };
            tempdata0202.cangca_ds_denghi[index].diachi = text;
            setData0202(tempdata0202);
          }}
        />
        <TextInput
          style={styles.textTenLoaiThuySan}
          value={item.dienthoai}
          // onChangeText={text => handleChangeTenLoai(text, item.id)}
          onChangeText={text => {
            let tempdata0202 = { ...data0202 };
            tempdata0202.cangca_ds_denghi[index].dienthoai = text;
            setData0202(tempdata0202);
          }}
        />
        <TextInput
          style={styles.textTenLoaiThuySan}
          value={item.soquyetdinhmocang}
          // onChangeText={text => handleChangeTenLoai(text, item.id)}
          onChangeText={text => {
            let tempdata0202 = { ...data0202 };
            tempdata0202.cangca_ds_denghi[index].soquyetdinhmocang = text;
            setData0202(tempdata0202);
          }}
        />
        <TextInput
          style={styles.textTenLoaiThuySan}
          value={item.ghichu}
          // onChangeText={text => handleChangeTenLoai(text, item.id)}
          onChangeText={text => {
            let tempdata0202 = { ...data0202 };
            tempdata0202.cangca_ds_denghi[index].ghichu = text;
            setData0202(tempdata0202);
          }}
        />


      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text
        style={{
          marginHorizontal: 25,
          fontWeight: 'bold',
          fontSize: 20,
          lineHeight: 28,
          color: 'black',
          marginVertical: 15,
        }}>
        1. Cảng cá đề nghị đưa vào danh sách cảng cá chỉ định:
      </Text>
      <ScrollView>
        <ScrollView horizontal={true} style={{}}>
          <View style={{ flexDirection: 'column' }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#0ACEF5',
              }}>
              <Text style={styles.textTT}>TT</Text>

              <Text style={styles.textTenLoaiThuySan}>Tên cảng cá</Text>
              <Text style={styles.textTenLoaiThuySan}>Cảng cá loại</Text>
              <Text style={styles.textTenLoaiThuySan}>Địa chỉ</Text>
              <Text style={styles.textTenLoaiThuySan}>Điện thoại</Text>
              <Text style={styles.textTenLoaiThuySan}>Số quyết định {`\n`} công bố mở cảng</Text>
              <Text style={styles.textTenLoaiThuySan}>Ghi chú</Text>
            </View>

            {/* <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={data0202.cangca_ds_denghi}
          renderItem={({item, index}) => TenLoaiThuySanItem({item, index})}
          keyExtractor={item => item.id}
        /> */}

            {data0202.cangca_ds_denghi.map((item, index) =>
              TenLoaiThuySanItem({ item, index }),
            )}
          </View>
        </ScrollView>
      </ScrollView>

      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.btnThemDong} onPress={() => handleThemDong()}>
          <Text style={styles.textBtn}>Thêm dòng</Text>
        </Pressable>
        <Pressable style={styles.btnXoaDong} onPress={() => handleXoaDong()}>
          <Text style={styles.textBtn}>Xóa dòng</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChiTietNhomKhaiThac;

const styles = StyleSheet.create({
  textTongKhoiLuongTong: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    borderColor: '#0099FF',
    borderWidth: 1,
    width: 60,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTT: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: 60,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTenLoaiThuySan: {
    fontWeight: '400',
    fontSize: 18,
    // lineHeight: 22,
    padding: 8,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: 220,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textSanLuong: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: 100,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
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
  textBtn: {
    fontWeight: '200',
    fontSize: 18,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
