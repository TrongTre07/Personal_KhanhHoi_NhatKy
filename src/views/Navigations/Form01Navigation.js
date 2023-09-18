import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useEffect} from 'react';

import Form01adx01 from '../Form01adx01/Form01adx01';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Form01adx01Diary from '../Form01adx01/Form01adx01Diary';
import styles from './styles';
import Storage from '../../utils/storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {UserContext} from '../../contexts/UserContext';
import Icon from 'react-native-vector-icons/AntDesign';
import data0101Empty from '../Form01adx01/models/data0101Empty';
import moment from 'moment';
import makeid  from '../others/makeid';
const Stack = createStackNavigator();
const Form01Navigation = () => {
  const navigation = useNavigation();
  const netInfo = useNetInfo();

  const {setData0101} = React.useContext(UserContext);

  const handleNavigateForm01adx01 = async () => {
    navigation.navigate('form01adx01');
  };

  const CustomIconBack = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
          setData0101({
            isdraft: false,
            dairy_name: '',
            nghechinh: '',
            ten_chutau: '',
            ten_thuyentruong: '',
            id_tau: '',
            tau_bs: '',
            tau_chieudailonnhat: '',
            tau_tongcongsuatmaychinh: '',
            gpkt_so: '',
            gpkt_thoihan: moment().format('DD/MM/YYYY'),
            nghephu1: '',
            nghephu2: '',
            ncau_chieudaivangcau: '',
            ncau_soluoicau: '',
            nluoivay_chieudailuoi: '',
            nluoivay_chieucaoluoi: '',
            nluoichup_chuvimiengluoi: '',
            nluoichup_chieucaoluoi: '',
            nluoikeo_chieudaigiengphao: '',
            nluoikeo_chieudaitoanboluoi: '',
            nkhac: '',
            chuyenbien_so: '',
            cang_di: '',
            ngay_di: moment().format('YYYY-MM-DD'),
            cang_ve: '',
            ngay_ve: moment().format('YYYY-MM-DD'),
            ngaynop: moment().format('YYYY-MM-DD'),
            vaoso_so: '',
            khaithac: [
              {
                id: makeid(7),
                methu: '1',
                thoidiem_tha: moment().format('YYYY-MM-DDTHH:mm'),
                vido_tha: '',
                kinhdo_tha: '',
                thoidiem_thu: moment().format('YYYY-MM-DDTHH:mm'),
                vido_thu: '',
                kinhdo_thu: '',
                loai_1: '',
                loai_2: '',
                loai_3: '',
                loai_4: '',
                loai_5: '',
                loai_6: '',
                loai_7: '',
                loai_8: '',
                loai_9: '',
                loai_1_kl: '',
                loai_2_kl: '',
                loai_3_kl: '',
                loai_4_kl: '',
                loai_5_kl: '',
                loai_6_kl: '',
                loai_7_kl: '',
                loai_8_kl: '',
                loai_9_kl: '',
                tongsanluong: '',
              },
            ],
            thumua: [
              {
                id: makeid(7),
                ngaythang: moment().format('YYYY-MM-DD'),
                tm_ct_bstau: '',
                tm_ct_gpkt: '',
                tm_ct_vt_vido: '',
                tm_ct_vt_kinhdo: '',
                daban_ct_loai: '',
                daban_ct_khoiluong: '',
                tm_ct_thuyentruong: '',
              },
            ],
          });
        }}>
        <Icon name="arrowleft" size={30} color="#000" />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.btnText, {color: 'red'}]}>
                Nhật ký khai thác thủy sản
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => handleNavigateForm01adx01()}>
                <View style={[styles.btn, {backgroundColor: '#33CC00'}]}>
                  <Text style={[styles.btnText, {color: '#fff'}]}>Tạo</Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{}} onPress={() => Storage.setItem('token','kH1diaZdjtBBvQWsqQb+lXKkzdsHZy38TDO4eMChYlQ=x')}>
                <View style={[styles.btn, { backgroundColor: '#33CC00' }]}>
                  <Text style={[styles.btnText, { color: '#fff' }]}>token</Text>
                </View>
              </TouchableOpacity> */}
            </View>
          ),
        }}
        name="form01adx01Diary"
        component={Form01adx01Diary}
      />

      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => <CustomIconBack />,
        }}
        name="form01adx01"
        component={Form01adx01}
      />
    </Stack.Navigator>
  );
};

export default Form01Navigation;
