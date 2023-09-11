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
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserContext} from '../../../../contexts/UserContext';

const ChiTietNhomKhaiThac = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const {data0301, setData0301} = useContext(UserContext);
  //   const [data0301, setData0301] = useState({
  //     tau_tongcongsuatmaychinh: 12,
  //     tau_chieudailonnhat: 12,
  //     dairyname: 'BaoCaoKhaiThacThuySan_11092023',
  //     denngay: '2023-09-11',
  //     tblreport_0301_ls: [
  //       {
  //         id: 0,
  //         tenloai: '1111',
  //         sanluong: 12,
  //       },
  //       {
  //         id: new Date(),
  //         tenloai: '2222',
  //         sanluong: 11,
  //       },
  //     ],
  //     chuyenbien_so: 0,
  //     nam: 0,
  //     tungay: '0001-01-01',
  //     ten_chutau_thuyentruong: 'abc',
  //     diachi: '',
  //     tau_bs: 'HC-1234-TS1',
  //     nghekhaithac: '',
  //     tongsolaodong: 0,
  //     songaykhaithac: 0,
  //     so_meluoi: 0,
  //     ngutruong_vinhbacbo: false,
  //     ngutruong_trungbo: true,
  //     ngutruong_dongnambo: false,
  //     ngutruong_taynambo: false,
  //     ngutruong_giuabiendong: false,
  //     tongsanluong: 0,
  //   });

  const makeid = length => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const handleChangeTenLoai = (tenLoai, id) => {
    try {
      const updateData0301 = {...data0301};

      updateData0301.tblreport_0301_ls = updateData0301.tblreport_0301_ls.map(
        item => {
          if (item.id === id) {
            return {...item, tenloai: tenLoai};
          }
          return item;
        },
      );
      console.log(JSON.stringify(data0301, null, 2));
      setData0301(updateData0301);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleChangeKhoiLuong = (sanLuong, id) => {
    try {
      const updateData0301 = {...data0301};

      updateData0301.tblreport_0301_ls = updateData0301.tblreport_0301_ls.map(
        item => {
          if (item.id === id) {
            return {...item, sanluong: sanLuong};
          }
          return item;
        },
      );
      console.log(JSON.stringify(updateData0301, null, 2));
      setData0301(updateData0301);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleThemDong = () => {
    try {
      const objAdd = {
        id: makeid(7),
        tenloai: '',
        sanluong: '',
      };
      const updatedData0301 = {...data0301};
      if (updatedData0301.tblreport_0301_ls) {
        updatedData0301.tblreport_0301_ls.push(objAdd);
      }

      setData0301(updatedData0301);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleXoaDong = () => {
    try {
      let lastObject = data0301.tblreport_0301_ls.length;
      if (lastObject == 1) {
        Alert.alert('Không thể xóa hết thông tin', '', [{text: 'OK'}]);
        return;
      }

      data0301.tblreport_0301_ls.map(item => {
        if (item.hasOwnProperty('isdelete') && item.isdelete == 1) {
          lastObject -= 1;
        }
      });
      if (lastObject == 1) {
        Alert.alert('Không thể xóa hết thông tin', '', [{text: 'OK'}]);
        return;
      }

      const itemToRemove = data0301.tblreport_0301_ls[selectedItemIndex];
      if (itemToRemove) {
        if (itemToRemove.hasOwnProperty('isdelete')) {
          itemToRemove.isdelete = 1;
          // Update data0201 with the modified itemToRemove
          const updatedData0301 = {
            ...data0301,
            tblreport_0301_ls: data0301.tblreport_0301_ls.map(item =>
              item.id === itemToRemove.id ? itemToRemove : item,
            ),
          };
          setData0301(updatedData0301);
        } else {
          // Item doesn't have isdelete field, remove it by filtering
          const updatedKhaiThac = data0301.tblreport_0301_ls.filter(
            item => item.id !== itemToRemove.id,
          );

          const updatedData0301 = {
            ...data0301,
            tblreport_0301_ls: updatedKhaiThac,
          };

          setData0301(updatedData0301);
        }
      } else {
        Alert.alert('Cần chọn dòng', '', [{text: 'OK'}]);
      }
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const calculateTongKhoiLuong = sanluong => {
    try {
      let total = 0;

      data0301.tblreport_0301_ls.forEach(item => {
        if (item[sanluong] && item.isdelete != 1) {
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

  const TenLoaiThuySanItem = ({item, index}) => {
    let countIsDelete = 0;
    const rootIndex = index;
    let checkIsDeleted;
    if (item?.isdelete == 1) {
      checkIsDeleted = true;
    } else {
      for (i = 0; i <= index; i++) {
        if (
          data0301.tblreport_0301_ls[i].isdelete &&
          data0301.tblreport_0301_ls[i].isdelete == 1
        ) {
          countIsDelete++;
        }
      }
      index -= countIsDelete;
    }

    const isSelected = selectedItemIndex === rootIndex;
    if (checkIsDeleted) {
      return null;
    }

    return (
      <Pressable
        key={index}
        onPress={() => handleChonItem(rootIndex)}
        style={[
          {flexDirection: 'row', backgroundColor: 'white'},
          isSelected && {backgroundColor: 'lightblue'},
        ]}>
        <Text style={styles.textTT}>{index + 1}</Text>

        <TextInput
          style={styles.textTenLoaiThuySan}
          value={item.tenloai}
          onChangeText={text => handleChangeTenLoai(text, item.id)}
        />

        <TextInput
          keyboardType="numeric"
          style={styles.textSanLuong}
          value={item.sanluong.toString()}
          onChangeText={text => handleChangeKhoiLuong(text, item.id)}
        />
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: 22,
          lineHeight: 28,
          color: 'black',
          marginVertical: 15,
        }}>
        Chi tiết nhóm thủy sản khai thác chính
      </Text>
      {/* <ScrollView> */}
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#0ACEF5',
          }}>
          <Text style={styles.textTT}>TT</Text>

          <Text style={styles.textTenLoaiThuySan}>Tên loài thủy sản</Text>

          <Text style={styles.textSanLuong}>Sản lượng (kg)</Text>
        </View>

        {/* <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={data0301.tblreport_0301_ls}
          renderItem={({item, index}) => TenLoaiThuySanItem({item, index})}
          keyExtractor={item => item.id}
        /> */}

        {data0301.tblreport_0301_ls.map((item, index) =>
          TenLoaiThuySanItem({item, index}),
        )}

        <View style={{flexDirection: 'row', height: 50}}>
          <Text style={styles.textTongKhoiLuongTong}>Tổng khối lượng</Text>

          <Text style={styles.textSanLuong}>
            {calculateTongKhoiLuong('sanluong')}
          </Text>
        </View>
      </View>
      {/* </ScrollView> */}

      <View style={{flexDirection: 'row'}}>
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
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 1,
    width: '80%',
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
    width: '10%',
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textTenLoaiThuySan: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 0.6,
    width: '70%',
    height: 60,
    color: 'black',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center',
  },
  textSanLuong: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 25,
    borderColor: '#0099FF',
    borderWidth: 1,
    width: '20%',
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
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
