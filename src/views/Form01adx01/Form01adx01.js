import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import HeaderView from './item/HeaderView';
import TongCucThuySanView from './item/TongCucThuySanView';
import HoatDongKhaiThacThuySanView from './item/HoatDongKhaiThacThuySanView';
import HoatDongChuyenTaiView from './item/HoatDongChuyenTaiView';
import {FormContext} from '../../contexts/FormContext';
import { UserContext } from '../../contexts/UserContext';
import { GeneratePDF } from '../ExportPDF';

const Form01adx01 = ({navigation}) => {

  const {
    thuMua,
    setThuMua,
    thongTinTau,
    setThongTinTau,
    khaiThac,
    setKhaiThac,
  } = useContext(FormContext);

  const  {postForm} = useContext(UserContext)

  const dateNow = new Date();
  const dateNowFormat = () => {

    const day = dateNow.getDate().toString().padStart(2, '0');
    const month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
    const year = dateNow.getFullYear();
    return `${day}/${month}/${year}`;

  };

  const [inputHoatDongChuyenTai, setInputHoatDongChuyenTai] = React.useState([
    {
      date: dateNowFormat(),
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

  React.useEffect(() => {
    console.log(inputHoatDongChuyenTai);
  }, [inputHoatDongChuyenTai]);

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
          onPress={() => {handleGeneratePDF()}}>
          <Text style={styles.actionText}>Xuất File</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const handleGeneratePDF = (data,name) => {
    GeneratePDF(data,name);
  };
  const handleCreateForm = () => {
    console.log('Create');
  };

  const handleSaveForm = () => {
    console.log('Save');
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
