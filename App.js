import {ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {UserContext, UserProvider} from './src/contexts/UserContext';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Login from './src/views/login/Login';
import 'react-native-gesture-handler';

import {FormProvider} from './src/contexts/FormContext';
import Menu from './src/views/Home/Menu';
import HoatDongKhaiThacThuySanView from './src/views/Form01adx01/item/HoatDongKhaiThacThuySanView';
import HoatDongChuyenTaiView from './src/views/Form01adx01/item/HoatDongChuyenTaiView';
import TongCucThuySanView from './src/views/Form01adx01/item/TongCucThuySanView';

const AppNav = () => {
  const {isLoggedIn} = useContext(UserContext);

  return (
  <NavigationContainer>
    {!isLoggedIn ? <Login /> : <AppNavigation/>}
</NavigationContainer>)
}

const App = () => {
  return (
    <UserProvider>
      <FormProvider>
        <View style={styles.container}>
          {/* <MyScreen /> */}
          <Form01adx01/>
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
