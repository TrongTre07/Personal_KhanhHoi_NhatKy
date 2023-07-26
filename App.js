import { ScrollView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { UserContext, UserProvider } from './src/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/views/login/Login';
import 'react-native-gesture-handler';
import Form01adx01 from './src/views/Form01adx01/Form01adx01';
import AppNavigation from './src/views/Navigations/AppNavigation';
import Datepicker from './src/utils/Datepicker';
import { FormProvider } from './src/contexts/FormContext';
import Menu from './src/views/Home/Menu';
import HoatDongChuyenTaiView from './src/views/Form01adx01/item/HoatDongChuyenTaiView';
import TongCucThuySanView from './src/views/Form01adx01/item/TongCucThuySanView';
import OpenPDF from './src/views/OpenPDF';
import ExportPDF from './src/views/ExportPDF';
import ViewPDF from './src/views/ViewPDF';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppNav = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <Login /> : < AppNavigation />}
    </NavigationContainer>)
}

const App = () => {
  return (
    // <NavigationContainer>
    //    <Stack.Navigator>
    //     <Stack.Screen name="OpenPDF" component={OpenPDF} />
    //     <Stack.Screen name="ViewPDF" component={ViewPDF} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <UserProvider>
      <FormProvider>
        <View style={styles.container}>
          {/* <AppNav /> */}
          <ViewPDF/>
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
