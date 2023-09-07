import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useContext} from 'react';
import TongCucThuySanView from './item/TongCucThuySanView';
import {UserContext} from '../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';

import KetQuaThuMua from './KetQuaThuMua';
import ThongTinVeCacTau from './item/ThongTinVeCacTau';
import ThongTinChiTietHoatDong from './item/B_ThongTinVeTauCa/ThongTinChiTietHoatDong';
import HeaderView from './item/HeaderView';
import AlertInputComponent from '../../utils/AlertInputComponent';
import Spinner from 'react-native-loading-spinner-overlay';
import {useState} from 'react';
import Storage from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';
const Form02ad01 = ({route}) => {
  const navigation = useNavigation();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [initialValue, setInitialValue] = useState('');
  const {isLoading} = useContext(UserContext);
  const {initialTitle} = useContext(UserContext);
  const {
    getDetailForm0201Id,
    setData0201,
    data0201,
    goBackAlert,
    setGoBackAlert,
    postForm0201,
    updateForm0201,
  } = useContext(UserContext);
  const netInfo = useNetInfo();

  const handleTriggerButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    if (goBackAlert) {
      navigation.pop();
      setGoBackAlert(false);
    }
  }, [goBackAlert, navigation, setGoBackAlert]);

  const handleDataSubmit = tieuDe => {
    if (data0201.id == undefined) {
      //neu la create thi field id khong ton tai
      handleCreateForm(tieuDe, 'create');
    } else {
      handleCreateForm(tieuDe, 'update');
    }
  };
  const handleUpdate = () => {
    setPopupVisible(true);
  };

  const handleCreateForm = async (tieuDe, string) => {
    let objectPost = {...data0201};
    objectPost.dairy_name = tieuDe;

    // console.log(JSON.stringify(objectPost, null, 2));

    const isConnect = netInfo.isConnected;

    // chưa có mạng thì lưu local
    if (!isConnect) {
      const dataForm = objectPost;
      const result = await Storage.getItem('form02adx01');
      if (!dataForm.id_tau) {
        Alert.alert('Lỗi', 'Bạn phải chọn tàu!', [
          {
            text: 'OK',
            onPress: () => {
              // setIsErrorPost(false);
            },
          },
        ]);
      } else if (result !== null) {
        const data = JSON.parse(result);
        data.push(dataForm);
        await Storage.setItem('form02adx01', JSON.stringify(data));
        ToastAndroid.show('Tạo thành công', ToastAndroid.SHORT);
        setGoBackAlert(true);
      } else {
        const data = [];
        data.push(dataForm);
        await Storage.setItem('form02adx01', JSON.stringify(data));
        ToastAndroid.show('Tạo thành công', ToastAndroid.SHORT);
        setGoBackAlert(true);
      }
    } else if (string == 'create') {
      if (!data0201.id_tau) {
        Alert.alert('Lỗi', 'Bạn phải chọn tàu!', [
          {
            text: 'OK',
            onPress: () => {
              // setIsErrorPost(false);
            },
          },
        ]);
      } else {
        await postForm0201(objectPost);
      }
    } else if (string == 'update') {
      await updateForm0201(modifyThongTinTauDCThumua(objectPost));
      if (!data0201.id_tau) {
        Alert.alert('Lỗi', 'Bạn phải chọn tàu!', [
          {
            text: 'OK',
            onPress: () => {
              // setIsErrorPost(false);
            },
          },
        ]);
      }
    }
  };

  const id = route?.params?.id;

  useEffect(() => {
    // console.log('id: ', id);

    if (id != undefined) {
      if (netInfo.isConnected) getDetailForm0201Id(id);
      else getDataLocal();
    } else {
      // setData0201({});
    }
  }, [netInfo, id]);

  // render data local to form
  const getDataLocal = async () => {
    const result = await Storage.getItem('form02adx01');
    if (result !== null) {
      const data = JSON.parse(result);
      if (data.length > 0) setData(data[id]);
    }
  };

  // const modifyThongTinTauDCThumua = (data0201) =>{
  //   const modifiedThumua = data0201.thumua.map(item => {
  //     if (!item.hasOwnProperty('isdelete')) {
  //       // Item has isdelete field, update id to 0
  //       return {...item, id: 0};
  //     }
  //     return item;
  //   });

  //   // Update data0201 with the modified thongtintaudc_thumua array
  //   const updatedData0201 = {
  //     ...data0201,
  //     thumua: modifiedThumua,
  //   };

  //   console.log('MODIFY:', JSON.stringify(updatedData0201, null, 2));

  //   return updatedData0201;
  // }

  const modifyThongTinTauDCThumua = data0201 => {
    // Modify thumua array
    const modifiedThumua = data0201.thumua.map(item => {
      if (item.hasOwnProperty('isdelete') && item.isdelete === 1) {
        // Item has isdelete field with a value of 1, update id to 0
        return {...item, id: 0};
      }
      return item;
    });

    // Modify thongtintaudc_thumua array
    const modifiedThongTinTauDCThumua = data0201.thongtintaudc_thumua.map(
      item => {
        if (item.hasOwnProperty('isdelete') && item.isdelete === 1) {
          // Item has isdelete field with a value of 1, update id to 0
          return {...item, id: 0};
        }
        // Check and modify thongtinhoatdong array if it exists
        if (item.thongtinhoatdong && Array.isArray(item.thongtinhoatdong)) {
          const modifiedThongTinHoatDong = item.thongtinhoatdong.map(
            subItem => {
              if (
                subItem.hasOwnProperty('isdelete') &&
                subItem.isdelete === 1
              ) {
                // Sub-item has isdelete field with a value of 1, update id to 0
                return {...subItem, id: 0};
              }
              return subItem;
            },
          );
          return {...item, thongtinhoatdong: modifiedThongTinHoatDong};
        }
        return item;
      },
    );

    // Update data0201 with the modified thumua and thongtintaudc_thumua arrays
    const updatedData0201 = {
      ...data0201,
      thumua: modifiedThumua,
      thongtintaudc_thumua: modifiedThongTinTauDCThumua,
    };

    console.log('MODIFY:', JSON.stringify(updatedData0201, null, 2));

    return updatedData0201;
  };

  const _renderActionView = () => {
    return (
      <View style={styles.action}>
        {id != undefined ? (
          <TouchableOpacity
            style={[styles.actionCreate, styles.button]}
            onPress={() => {
              netInfo.isConnected ? handleUpdate() : handleUpdateDiaryLocal();
            }}>
            <Text style={styles.actionText}>Cập nhật</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.actionCreate, styles.button]}
            onPress={handleTriggerButtonClick}>
            <Text style={styles.actionText}>Tạo</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.actionDownload, styles.button]}
          onPress={() => {
            navigation.navigate('ViewPDF', {
              id: id,
              data: handleFormatObject(),
            });
          }}>
          <Text style={styles.actionText}>Xem mẫu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionExportPDF, styles.button]}
          onPress={() => ExportPDF(handleFormatObject())}>
          <Text style={styles.actionText}>Tải Mẫu</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <HeaderView />
      <TongCucThuySanView />
      <KetQuaThuMua />
      <ThongTinVeCacTau />
      {_renderActionView()}
      <Spinner
        visible={isLoading}
        textContent={'Đang tải...'}
        color="blue"
        textStyle={styles.spinnerText}
      />
      <AlertInputComponent
        visible={isPopupVisible}
        onClose={handlePopupClose}
        onSubmit={tieuDe => {
          if (tieuDe == '') {
            Alert.alert('Lỗi', 'Bạn phải nhập tiêu đề!', [
              {
                text: 'OK',
                onPress: () => {
                  // setIsErrorPost(false);
                },
              },
            ]);
          } else handleDataSubmit(tieuDe);
        }}
        initialValue={initialTitle}
      />
    </ScrollView>
  );
};

export default Form02ad01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginRight: 8,
  },

  action: {
    flexDirection: 'row',
    marginVertical: 12,
  },

  actionText: {
    color: 'white',
    fontSize: 18,
  },

  actionTextDark: {
    color: 'black',
    fontSize: 18,
  },

  actionCreate: {
    backgroundColor: '#4CAF50',
    marginRight: 10,
  },

  actionSave: {
    backgroundColor: '#e5e7eb',
    marginRight: 10,
  },

  actionDownload: {
    backgroundColor: '#3b82f6',
    marginRight: 10,
  },
  actionExportPDF: {
    backgroundColor: '#FF9800',
    marginRight: 10,
  },
});
