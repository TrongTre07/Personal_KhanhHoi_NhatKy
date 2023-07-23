import { View, Text } from 'react-native'
import React from 'react'
import Form01adx01 from '../Form01adx01/Form01adx01';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from '../Home/Menu';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitleStyle: {
          fontSize: 24, 
          color:'red'
        }
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="menu" component={Menu}
      />
      <Stack.Screen
         name="Form01adx01" 
         component={Form01adx01} 
         options={{ headerTitle: '01-PLI. Nhật ký khai thác thủy sản' ,}}
         />
      <Stack.Screen 
      name="form02adx02" 
      component={Form01adx01} 
      options={{ headerTitle: '02-PLI. Nhật ký thu mua, chuyên tải thủy sản<' ,}}
      
      />
      <Stack.Screen 
      name="form03adx03" 
      component={Form01adx01} 
      options={{ headerTitle: '04-PLI. Báo cáo thăm dò, tìm kiếm, dẫn dụ nguồn lợi thủy sản' ,}}
      
      />
    </Stack.Navigator>
  )
}

export default AppNavigation;
