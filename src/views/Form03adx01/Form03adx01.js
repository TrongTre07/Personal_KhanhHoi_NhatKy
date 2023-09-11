import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useContext} from 'react';
import TongCucThuySanView from './item/TongCucThuySanView';
import {UserContext} from '../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';
import ChiTietNhomKhaiThac from './item/itemTongCucThuySan/ChiTietNhomKhaiThac';
const Form03ad01 = ({route}) => {
  const {
    getDetailForm0201Id,
    setData0301,
    data0301,
    goBackAlert,
    setGoBackAlert,
  } = useContext(UserContext);
  const netInfo = useNetInfo();

  let titleForm0201 = '';

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
    titleForm0201 = tieuDe;
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
        await postForm0201(modifyThongTinTauDCThumua(objectPost));
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
    if (id != undefined) {
      if (netInfo.isConnected) getDetailForm0201Id(id);
      else getDataLocal();
    } else {
      setData0201(data0201Empty);
    }
  }, [netInfo, id]);

  // render data local to form
  const getDataLocal = async () => {
    const result = await Storage.getItem('form02adx01');
    if (result !== null) {
      const data = JSON.parse(result);
      // if (data.length > 0) setData0201(data[id]);
    }
  };

  const modifyThongTinTauDCThumua = data0201 => {
    // Modify thumua array
    const modifiedThumua = data0201.thumua.map(item => {
      if (!item.hasOwnProperty('isdelete')) {
        // Item has isdelete field with a value of 1, update id to 0
        return {...item, id: 0};
      }
      return item;
    });

    // Modify thongtintaudc_thumua array
    const modifiedThongTinTauDCThumua = data0201.thongtintaudc_thumua.map(
      item => {
        if (item.thongtinhoatdong) {
          const modifiedThongTinHoatDong = item.thongtinhoatdong.map(
            subItem => {
              if (!subItem.hasOwnProperty('isdelete')) {
                return {...subItem, id: 0};
              }
              return subItem;
            },
          );
          item = {...item, thongtinhoatdong: modifiedThongTinHoatDong};
        }

        if (!item.hasOwnProperty('isdelete')) {
          // Item has isdelete field with a value of 1, update id to 0
          item = {...item, id: 0};
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

  // check ko có wifi thì update local
  const handleUpdateDiaryLocal = async () => {
    const dataForm = {...data0201};
    dataForm.dairy_name = titleForm0201;
    const result = await Storage.getItem('form02adx01');
    if (result !== null) {
      const data = JSON.parse(result);
      data[id] = dataForm;
      await Storage.setItem('form02adx01', JSON.stringify(data));
    }
    ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
    setData0201(data0201Empty);
    setGoBackAlert(true);
  };

  React.useEffect(() => {
    const backAction = () => {
      setData0201(data0201Empty);
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

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
          // onPress={() => {
          //   navigation.navigate('ViewPDF', {
          //     id: id,
          //     data: handleFormatObject(),
          //   });
          // }}
        >
          <Text style={styles.actionText}>Xem mẫu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionExportPDF, styles.button]}
          // onPress={() => ExportPDF(handleFormatObject())}
        >
          <Text style={styles.actionText}>Tải Mẫu</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <TongCucThuySanView />
      <ChiTietNhomKhaiThac />
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

export default Form03ad01;

const styles = StyleSheet.create({});
