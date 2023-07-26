import {ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {UserContext, UserProvider} from './src/contexts/UserContext';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Login from './src/views/login/Login';
import 'react-native-gesture-handler';

import {FormProvider} from './src/contexts/FormContext';
import Menu from './src/views/Home/Menu';
import AppNavigation from './src/views/Navigations/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNav = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);
  // if(AsyncStorage.getItem('token'))
  //   setIsLoggedIn(true)
  // else
  // setIsLoggedIn(false)

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
