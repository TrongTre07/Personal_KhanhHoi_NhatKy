import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState,} from 'react';
import HeaderView from './item/HeaderView';
import TongCucThuySanView from './item/TongCucThuySanView';
import HoatDongKhaiThacThuySanView from './item/HoatDongKhaiThacThuySanView';
import HoatDongChuyenTaiView from './item/HoatDongChuyenTaiView';
import {FormContext} from '../../contexts/FormContext';
import {UserContext} from '../../contexts/UserContext';
import Spinner from 'react-native-loading-spinner-overlay';
import {useIsFocused} from '@react-navigation/native'

const Form01adx01 = ({navigation, route}) => {
  const {
    thuMua,
    setThuMua,
    thongTinTau,
    setThongTinTau,
    khaiThac,
    setKhaiThac,
  } = useContext(FormContext);

  const {postForm} = useContext(UserContext);
  const {isLoading, setIsLoading} = useContext(UserContext);
  const {isError, setIsError} = useContext(UserContext);

  const dateNow = new Date();

  React.useEffect(() => {
    if (isError) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra.', [
        {
          text: 'OK',
          onPress: () => {
            setIsError(false);
          },
        },
      ]);
    }
  }, [isError]);
  const id = route.params?.id;
  const {getDetailFormId,setData,data} = useContext(UserContext);
  const isFocus= useIsFocused();

  useEffect(()=>{
    setData({})
  },[!isFocus])


  useEffect(() => {
    getDetailFormId(id);
  }, []);

  const _renderActionView = () => {
    return (
      <View style={styles.action}>
        {id ? (
          <TouchableOpacity
            style={[styles.actionCreate, styles.button]}
            onPress={{}}>
            <Text style={styles.actionText}>Cập nhật</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.actionCreate, styles.button]}
            onPress={handleCreateForm}>
            <Text style={styles.actionText}>Tạo</Text>
          </TouchableOpacity>
        )}
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

  const handleCreateForm = () => {
    postForm(handleFormatObject());
  };

  const handleSaveForm = () => {
    console.log('Save');
  };

  const handleDownloadForm = () => {
    console.log(handleFormatObject());
  };

  const handleExportPDF = () => {
    // setIsLoading(true);
    console.log('DATA: ', handleFormatObject());
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
      <HoatDongKhaiThacThuySanView id={id} />
      <HoatDongChuyenTaiView />
      {_renderActionView()}
      <Spinner
        visible={isLoading}
        textContent={'Đang tải...'}
        color="blue"
        textStyle={styles.spinnerText}
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
