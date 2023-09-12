import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderScreen from './HeaderScreen';
import Form01Navigation from './Form01Navigation';
import Login from '../login/Login';
import Form02adx01 from '../Form02adx01/Form02adx01';
import Form02adx01Navigation from './Form02adx01Navigation';
import ViewPDF from '../Form01adx01/pdfForm01/ViewPDF';
import Form03adx01Navigation from './Form03adx01Navigation';
import Form04adx01Navigation from './Form04adx01Navigation';
import Form01adx02Navigation from './Form01adx02Navigation';
import Form02adx02Navigation from './Form02adx02Navigation';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Drawer.Navigator backBehavior="history">
      <Drawer.Screen
        name="Form01Navigation"
        component={Form01Navigation}
        options={{
          drawerType: 'front',
          headerTitle: HeaderScreen,
          title: () => (
            <Text style={styles.txt}>
              01-PLI. Nhật ký khai thác thủy sản
            </Text>),

        }}
      />
      <Drawer.Screen
        name="Form02adx01Navigation"
        component={Form02adx01Navigation}
        options={{
          drawerType: 'front',
          headerTitle: HeaderScreen,
          title: () => (
            <Text style={styles.txt}>
              02-PLI. Nhật ký thu mua, chuyên tải thủy sản
            </Text>),

        }}
      />
      <Drawer.Screen
        name="Form03adx01Navigation"
        component={Form03adx01Navigation}
        options={{
          drawerType: 'front',
          headerTitle: HeaderScreen,
          title: () => (
            <Text style={styles.txt}>
              03-PLI. Báo cáo khai thác thủy sản
            </Text>)

        }}
      />
      <Drawer.Screen
        name="Form04adx01Navigation"
        component={Form04adx01Navigation}
        options={{
          drawerType: 'front',
          headerTitle: HeaderScreen,
          title: () => (
            <Text style={styles.txt}>
              04-PLI. Báo cáo thăm dò, tìm kiếm, dẫn dụ nguồn lợi thủy sản
            </Text>)

        }}
      />

      <Drawer.Screen
        name="Form01adx02Navigation"
        component={Form01adx02Navigation}
        options={{
          drawerType: 'front',
          headerTitle: HeaderScreen,
          title: () => (
            <Text style={styles.txt}>
              01-PLII. Báo cáo kết quả rà soát cảng cá chỉ định có đủ hệ thống xác nhận nguồn gốc thủy sản từ khai thác
            </Text>)
        }}
      />

      <Drawer.Screen
        name="Form02adx02Navigation"
        component={Form02adx02Navigation}
        options={{
          drawerType: 'front',
          headerTitle: HeaderScreen,
          title: () => (
            <Text style={styles.txt}>
              02-PLII. Giấy biên nhận thủy sản bốc dỡ qua cảng
            </Text>)

        }}
      />

    </Drawer.Navigator>)

}

const AppNavigation = () => {

  return (
    <Stack.Navigator

    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainNavigation"
        component={MainNavigation}>
      </Stack.Screen>

      <Stack.Screen
        options={{
          title: ''
        }}
        name="login"
        component={Login}>
      </Stack.Screen>


      <Stack.Screen
        options={{
          title: ''
        }}
        name="ViewPDF"
        component={ViewPDF}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigation;

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#000',
  }
})


