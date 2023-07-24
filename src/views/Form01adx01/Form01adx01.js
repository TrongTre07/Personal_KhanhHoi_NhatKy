import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useContext} from 'react';
import HeaderView from './item/HeaderView';
import TongCucThuySanView from './item/TongCucThuySanView';
import HoatDongKhaiThacThuySanView from './item/HoatDongKhaiThacThuySanView';
import HoatDongChuyenTaiView from './item/HoatDongChuyenTaiView';
import {FormContext} from '../../contexts/FormContext';
import { UserContext } from '../../contexts/UserContext';
import Storage from '../../utils/storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
const Form01adx01 = () => {
  const {
    thuMua,
    setThuMua,
    thongTinTau,
    setThongTinTau,
    khaiThac,
    setKhaiThac,
  } = useContext(FormContext);

  const  {postForm} = useContext(UserContext)

  const netInfo = useNetInfo();
  const navigation = useNavigation();
  

//===

  const dateNow = new Date();
  const dateNowFormat =
    dateNow.getDate() +
    '/' +
    (dateNow.getMonth() + 1) +
    '/' +
    dateNow.getFullYear();

  const [inputHoatDongChuyenTai, setInputHoatDongChuyenTai] = React.useState([
    {
      date: dateNowFormat,
      shipRegisterNumber: '',
      miningLicenseNumbewr: '',
      latitude: '',
      longitude: '',
      speciesName: '',
      weight: '',
    },
  ]);

  const [inputHoatDongKhaiThacThuySan, setInputHoatDongKhaiThacThuySan] =
    React.useState([
      {
        timeTha: '',
        viDoTha: '',
        kinhDoTha: '',
        timeThu: '',
        viDoTha: '',
        kinhDoThu: '',
      },
    ]);

  const [inputLoaiCa, setInputLoaiCa] = React.useState([{}]);

  // React.useEffect(() => {
  //   console.log(inputHoatDongChuyenTai);
  // }, [inputHoatDongChuyenTai]);

///====

  const _renderActionView = () => {
    return (
      <View style={styles.action}>
        <TouchableOpacity
          style={[styles.actionCreate, styles.button]}
          onPress={handleCreateForm}>
          <Text style={styles.actionText}>Tạo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionSave, styles.button]}
          onPress={handleSaveForm}>
          <Text style={styles.actionTextDark}>Lưu bản nháp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionDownload, styles.button]}
          onPress={handleDownloadForm}>
          <Text style={styles.actionText}>Tải mẫu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionExportPDF, styles.button]}
          onPress={handleExportPDF}>
          <Text style={styles.actionText}>Xuất File</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleCreateForm = async () => {

    const isConnect = netInfo.isConnected;
    if (!isConnect) {
      const dataForm = handleFormatObject();
      const result = await Storage.getItem('bieumau_array');

      if (result !== null) {

        const data = JSON.parse(result);
        data.push(dataForm);
        await Storage.setItem('bieumau_array', JSON.stringify(data));

      } else {

        const data = [];
        data.push(dataForm);
        await Storage.setItem('bieumau_array', JSON.stringify(data));

      }
    } 
    else {
      await postForm(handleFormatObject());
    }

    ToastAndroid.show('Tạo thành công', ToastAndroid.SHORT);
    navigation.goBack();



  };

  const handleSaveForm = async () => {
  };

  const handleDownloadForm = () => {
    postForm(handleFormatObject());
  };

  const handleExportPDF = () => {
    console.log('Export');
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
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <HeaderView />
      <TongCucThuySanView />
      <HoatDongKhaiThacThuySanView />
      <HoatDongChuyenTaiView
        textInput={inputHoatDongChuyenTai}
        setTextInput={setInputHoatDongChuyenTai}
      />
      {_renderActionView()}
    </ScrollView>
  );
};

export default Form01adx01;

const styles = StyleSheet.create({
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
