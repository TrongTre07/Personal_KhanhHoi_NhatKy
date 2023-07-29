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
import AppNavigation from './src/views/Navigations/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form01adx01 from './src/views/Form01adx01/Form01adx01';

const AppNav = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);
  // if(AsyncStorage.getItem('token'))
  //   setIsLoggedIn(true)
  // else
  // setIsLoggedIn(false)

  return (
  <NavigationContainer>
    <AppNavigation/>
</NavigationContainer>)
}

const App = () => {

  return (
  //   <UserProvider>
  //   <FormProvider>
  //     <View style={styles.container}>
  //       {/* <AppNav /> */}
  //       <PDF/>
  //     </View>
  //   </FormProvider>
  // </UserProvider>
 
    <UserProvider>
      <FormProvider>
        <View style={styles.container}>
          {/* <MyScreen /> */}
          <AppNav/>
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
