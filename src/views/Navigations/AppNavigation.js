import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Form01adx01 from '../Form01adx01/Form01adx01';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Menu from '../Home/Menu';
import Form01adx01Diary from '../Form01adx01/Form01adx01Diary';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderScreen from './HeaderScreen';
import Form01Navigation from './Form01Navigation';
import Login from '../login/Login';
import Form02ad02 from '../Form02adx02/Form02ad02';
import ViewPDF from '../ViewPDF';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Form01Navigation"
        component={Form01Navigation}
        options={{
          drawerType: 'front',
          headerTitle: HeaderScreen,
          title: "Nhật ký khai thác thủy sản",

        }}
      />
      <Drawer.Screen
        name="2"
        component={Form02ad02}
        options={{
          drawerType: 'front',
          headerTitle: () => <Image style={{ width: 200, height: 100, resizeMode: 'contain' }} source={require('../../img/logo-khanhhoi.png')} />,
          title: "Nhật ký thu mua, chuyển tải thủy sản",

        }}
      />
      <Drawer.Screen
        name="3"
        component={Form02ad02}
        options={{
          drawerType: 'front',
          headerTitle: () => <Image style={{ width: 200, height: 100, resizeMode: 'contain' }} source={require('../../img/logo-khanhhoi.png')} />,
          title: "Báo cáo khai thác thuỷ sản",

        }}
      />

    </Drawer.Navigator>)

}

const AppNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator

     >
      <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="MainNavigation"
        component={MainNavigation}>
      </Stack.Screen>

      <Stack.Screen
        options={{
          title:''
        }}
        name="login"
        component={Login}>
      </Stack.Screen>


      <Stack.Screen
        options={{
          title:''
        }}
        name="ViewPDF"
        component={ViewPDF}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigation;



