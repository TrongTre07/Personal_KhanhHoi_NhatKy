import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import HeaderView from './item/HeaderView';
import TongCucThuySanView from './item/TongCucThuySanView';
import HoatDongKhaiThacThuySanView from './item/HoatDongKhaiThacThuySanView';
import HoatDongChuyenTaiView from './item/HoatDongChuyenTaiView';
import { FormContext } from '../../contexts/FormContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { useIsFocused } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import Storage from '../../utils/storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import AlertInputComponent from '../../utils/AlertInputComponent';
import { ExportPDF } from '../ExportPDF';
const Form01adx01 = ({ route}) => {
  const {
    thuMua,
    setThuMua,
    thongTinTau,

    setThongTinTau,
    khaiThac,
    setKhaiThac,
  } = useContext(FormContext);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [receivedData, setReceivedData] = useState('');
  const [initialValue, setInitialValue] = useState('');

  const { postForm, updateForm } = useContext(UserContext);
  const { isLoading, setIsLoading } = useContext(UserContext);
  const { isErrorPost, setIsErrorPost, isErrorShip, setIsErrorShip, isErrorUpdate, setIsErrorUpdate } = useContext(UserContext);
  const { initialTitle, setInitialTitle } = useContext(UserContext)

  const netInfo = useNetInfo();
  const navigation = useNavigation();

  const [checkLocalEmpty, setCheckLocalEmpty] = useState();


  const id = route.params?.id;
  const { getDetailFormId, setData, data,goBackAlert,setGoBackAlert } = useContext(UserContext);
  const isFocus = useIsFocused();

  useEffect(() => {
    setData({});
  }, [!isFocus]);

  useEffect(() => {
    if (netInfo.isConnected) 
      getDetailFormId(id);
    else
      getDataLocal();
  }, [netInfo]);

  //data local
  const getDataLocal = async () => {
    const result = await Storage.getItem('form01adx01');
    setCheckLocalEmpty(result);
    if (result !== null) {
      const data = JSON.parse(result);
      setData(data[0]);
    }
  };

  //goback
  useEffect(() => {
    if (goBackAlert) {
      navigation.goBack();
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
    console.log("VALUE: ", value)
    if (value == '') {
      Alert.alert('Lỗi', 'Bạn phải nhập tiêu đề', [
        {
          text: 'OK',
          onPress: () => {
            // setIsErrorPost(false);
          },
        },
      ]);
      return
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
        {id || checkLocalEmpty != null ? (
          <TouchableOpacity
            style={[styles.actionCreate, styles.button]}
            onPress={() => {
              netInfo.isConnected ? handleUpdate() : handleUpdateDiary()
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
        {/* <TouchableOpacity
          style={[styles.actionSave, styles.button]}
          onPress={handleSaveForm}>
          <Text style={styles.actionTextDark}>Lưu bản nháp</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[styles.actionDownload, styles.button]}
          onPress={handleDownloadForm}>
          <Text style={styles.actionText}>Tải mẫu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionExportPDF, styles.button]}
          onPress={()=> ExportPDF(handleFormatObject())}>
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

      if (result !== null) {
        ToastAndroid.show(
          'Hiện đang có form chưa được lưu',
          ToastAndroid.SHORT,
        );
      } else {
        const data = [];
        data.push(dataForm);
        await Storage.setItem('form01adx01', JSON.stringify(data));
        ToastAndroid.show('Tạo thành công', ToastAndroid.SHORT);
        setGoBackAlert(true);

      }
    } else if (string == 'create') {
      console.log('CREATE');
      await postForm(objectPost);
      
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

  const handleSaveForm = async () => {
    await Storage.removeItem('form01adx01');
  };

  const handleDownloadForm = () => {
    console.log(handleFormatObject());
  };

 
  const handleExportPDF = () => {
    // setIsLoading(true);
    console.log('DATA: ', handleFormatObject());
  };

  // check ko có wifi thì update local
  const handleUpdateDiary = async () => {
    if (!netInfo.isConnected) {
      const dataForm = handleFormatObject();
      // xoá local cũ
      await Storage.removeItem('form01adx01');

      // lưu local mới
      const data = [];
      data.push(dataForm);
      await Storage.setItem('form01adx01', JSON.stringify(data));

      ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
      setGoBackAlert(true);

    } else {
      // do something
    }
  };

  const handleFormatObject = () => {
    return {
      ...thongTinTau,
      ...khaiThac,
      ...thuMua,
    };
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
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
          } else handleDataSubmit(value)
        }}
        initialValue={initialTitle}
      // Pass the initial value as a prop
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
