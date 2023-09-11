import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import HeaderView from './item/HeaderView';
import TongCucThuySanView from './item/TongCucThuySanView';
import HoatDongKhaiThacThuySanView from './item/HoatDongKhaiThacThuySanView';
import HoatDongChuyenTaiView from './item/HoatDongChuyenTaiView';
import {FormContext} from '../../contexts/FormContext';
import Spinner from 'react-native-loading-spinner-overlay';
import {UserContext} from '../../contexts/UserContext';
import Storage from '../../utils/storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import AlertInputComponent from '../../utils/AlertInputComponent';
import uploadFile from '../../axios/uploadFile';
import { ExportPDF } from './pdfForm01/ExportPDF';
const Form01adx01 = ({ route }) => {


  const {
    thuMua,
    setThuMua,
    thongTinTau,
    setThongTinTau,
    khaiThac,
    setKhaiThac,
  } = useContext(FormContext);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [initialValue, setInitialValue] = useState('');

  const {postForm, updateForm} = useContext(UserContext);
  const {isLoading} = useContext(UserContext);
  const {initialTitle} = useContext(UserContext);
  const {getDetailFormId, setData, data, goBackAlert, setGoBackAlert} =
    useContext(UserContext);

  const netInfo = useNetInfo();
  const navigation = useNavigation();

  const id = route.params?.id;

  useEffect(() => {
    console.log('id: ', id);
  }, [id]);

  useEffect(() => {
    if (id != undefined) {
      if (netInfo.isConnected) getDetailFormId(id);
      else getDataLocal();
    } else {
      setData({});
    }
  }, [netInfo, id, setData]);

  // render data local to form
  const getDataLocal = async () => {
    const result = await Storage.getItem('form01adx01');
    if (result !== null) {
      const data = JSON.parse(result);
      if (data.length > 0) setData(data[id]);
    }
  };

  //goback
  useEffect(() => {
    if (goBackAlert) {
      navigation.pop();
      setGoBackAlert(false);
    }
  }, [goBackAlert, navigation, setGoBackAlert]);

  //nghe chinh
  useEffect(() => {
    if (data.nghechinh) {
      setInitialValue(data.dairy_name);
    }
  }, [data]);

  const handleTriggerButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const handleDataSubmit = value => {
    if (value == '') {
      Alert.alert('Lỗi', 'Bạn phải nhập tiêu đề', [
        {
          text: 'OK',
          onPress: () => {
            // setIsErrorPost(false);
          },
        },
      ]);
      return;
    }

    if (thongTinTau.id == undefined) {
      //neu la create thi field id khong ton tai
      console.log('CREATE ACTIVATED');
      handleCreateForm(value, 'create');
    } else {
      console.log('UPDATE ACTIVATED');
      handleCreateForm(value, 'update');
    }
  };
  const handleUpdate = () => {
    setPopupVisible(true);
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
          onPress={() =>{
            let dataFix = handleFormatObject();
            dataFix.dairy_name = 'filemau';
            ExportPDF(dataFix);
            setTimeout(() => {
              navigation.navigate('ViewPDF')
            }, 1000);
          }

          }>
          <Text style={styles.actionText}>Xem mẫu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionExportPDF, styles.button]}
          onPress={() => {
            if(!netInfo.isConnected){
              ToastAndroid.show('Vui lòng kết nối internet.', ToastAndroid.SHORT);
              return;
            }
            let dataFix = handleFormatObject();
            dataFix.dairy_name = 'filemau';
            ExportPDF(dataFix);

            setTimeout(() => {
              uploadFile(`/storage/emulated/0/Android/data/com.khanhhoiapp/files/pdf/filemau.pdf`);
            }, 3000);
          }
            //data

          }
          
        >
          <Text style={styles.actionText}>Xuất File</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleCreateForm = async (value, string) => {
    let objectPost = handleFormatObject();
    objectPost.dairy_name = value;
    const isConnect = netInfo.isConnected;

    // chưa có mạng thì lưu local
    if (!isConnect) {
      const dataForm = objectPost;
      const result = await Storage.getItem('form01adx01');
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
        await Storage.setItem('form01adx01', JSON.stringify(data));
        ToastAndroid.show('Tạo thành công', ToastAndroid.SHORT);
        setGoBackAlert(true);
      } else {
        const data = [];
        data.push(dataForm);
        await Storage.setItem('form01adx01', JSON.stringify(data));
        ToastAndroid.show('Tạo thành công', ToastAndroid.SHORT);
        setGoBackAlert(true);
      }
    } else if (string == 'create') {
      console.log('CREATE');

      if (!thongTinTau.id_tau) {
        Alert.alert('Lỗi', 'Bạn phải chọn tàu!', [
          {
            text: 'OK',
            onPress: () => {
              // setIsErrorPost(false);
            },
          },
        ]);
      } else {
        setThongTinTau({});
        setThuMua({});
        setKhaiThac({});

        await postForm(objectPost);
      }
    } else if (string == 'update') {
      console.log('UPDATED');
      await updateForm(objectPost);
      if (!thongTinTau.id_tau) {
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

  // check ko có wifi thì update local
  const handleUpdateDiaryLocal = async () => {
    const dataForm = handleFormatObject();
    const result = await Storage.getItem('form01adx01');
    if (result !== null) {
      const data = JSON.parse(result);
      data[id] = dataForm;
      await Storage.setItem('form01adx01', JSON.stringify(data));
    }
    ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
    setData({});
    setGoBackAlert(true);
  };

  React.useEffect(() => {
    const backAction = () => {
      setData({});
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleFormatObject = () => {
    return {
      ...thongTinTau,
      ...khaiThac,
      ...thuMua,
    };
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <HeaderView />
      <TongCucThuySanView />
      <HoatDongKhaiThacThuySanView id={id} />
      <HoatDongChuyenTaiView />
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
        onSubmit={value => {
          if (value == '') {
            Alert.alert('Lỗi', 'Bạn phải nhập tiêu đề!', [
              {
                text: 'OK',
                onPress: () => {
                  // setIsErrorPost(false);
                },
              },
            ]);
          } else handleDataSubmit(value);
        }}
        initialValue={initialTitle}
      />
    </ScrollView>
  );
};

export default Form01adx01;

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
