import {ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {UserContext, UserProvider} from './src/contexts/UserContext';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';


import {FormProvider} from './src/contexts/FormContext';
import AppNavigation from './src/views/Navigations/AppNavigation';

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
