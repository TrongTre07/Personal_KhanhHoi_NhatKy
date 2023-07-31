import { View, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native'
import Form01adx01 from '../Form01adx01/Form01adx01';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Form01adx01Diary from '../Form01adx01/Form01adx01Diary';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles';
import Storage from '../../utils/storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { UserContext } from '../../contexts/UserContext';
import React, { useContext, useEffect } from 'react';

const Stack = createStackNavigator();
const Form01Navigation = () => {
  const navigation = useNavigation();
  const netInfo = useNetInfo();
  const {setData} = useContext(UserContext);

  useEffect(()=>{
    setData({})
  },[])
  
  const handleNavigateForm01adx01 = async () => {
    if (!netInfo.isConnected) {
      const result = await Storage.getItem('form01adx01');
      console.log(result)
      if (result == null) {
        navigation.navigate('form01adx01');
      } else {
        ToastAndroid.show('Hiện có nhật ký chưa được lưu, vui lòng kết nối lại internet', ToastAndroid.SHORT);
      }
    } else {
      navigation.navigate('form01adx01');
    }
  }

  return (
    <Stack.Navigator >

      <Stack.Screen options={{
        headerTitle:
          () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
              <Text style={[styles.btnText, { color: 'red' }]}>Nhật ký khai thác thủy sản</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{}} onPress={() => {}}>
                  <View style={[styles.btn, { backgroundColor: '#777777' }]}>
                    <Text style={[styles.btnText, { color: '#fff' }]}>In</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{}} onPress={() => handleNavigateForm01adx01()}>
                  <View style={[styles.btn, { backgroundColor: '#33CC00' }]}>
                    <Text style={[styles.btnText, { color: '#fff' }]}>Tạo</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          ),
      }} name="form01adx01Diary" component={Form01adx01Diary} />

      <Stack.Screen
        options={{
          headerTitle: ''
        }}
        name="form01adx01" component={Form01adx01} />
    </Stack.Navigator>
  );
}

export default Form01Navigation