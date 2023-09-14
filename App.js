import {ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {UserContext, UserProvider} from './src/contexts/UserContext';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {FormProvider} from './src/contexts/FormContext';
import AppNavigation from './src/views/Navigations/AppNavigation';

import Form02ad01 from './src/views/Form02adx01/Form02adx01';
import ThongTinVeCacTau from './src/views/Form02adx01/item/ThongTinVeCacTau';
import ThongTinChiTietHoatDong from './src/views/Form02adx01/item/B_ThongTinVeTauCa/ThongTinChiTietHoatDong';
import Form03ad01 from './src/views/Form03adx01/Form03adx01';
import ChiTietNhomKhaiThac from './src/views/Form03adx01/item/itemTongCucThuySan/ChiTietNhomKhaiThac';
import Form01ad02 from './src/views/Form01adx02/Form01adx02';
import ChiTietVeSanLuongThuySan from './src/views/Form02adx02/item/itemTongCucThuySan/ChiTietVeSanLuongThuySan';
import XacNhanKhoiLuongThuySanConLai from './src/views/Form02adx02/item/itemTongCucThuySan/XacNhanKhoiLuongThuySanConLai';
import Form02ad02 from './src/views/Form02adx02/Form02adx02';
import TongCucThuySanView from './src/views/Form03_PLII/TongCucThuySanView';
import TableForm03PL2 from './src/views/Form03_PLII/TableForm03PL2';
import KiemTraSanLuongKhaiThac from './src/views/Form03_PLII/KiemTraSanLuongKhaiThac';
const AppNav = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
  // if(AsyncStorage.getItem('token'))
  //   setIsLoggedIn(true)
  // else
  // setIsLoggedIn(false)

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <UserProvider>
      <FormProvider>
        <View style={styles.container}>
          <AppNav />
        </View>
      </FormProvider>
    </UserProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
});
