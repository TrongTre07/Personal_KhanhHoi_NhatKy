import { View, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native'
import React, { useContext, useEffect } from 'react';

import Form04_PLIII_03 from '../Form04_PLIII_03/Form04_PLIII_03';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Form04_PLIII_03Diary from '../Form04_PLIII_03/Form04_PLIII_03Diary';
import styles from './styles';
import Storage from '../../utils/storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {UserContext} from '../../contexts/UserContext';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Form04_PLIII_03Navigation = () => {
  const navigation = useNavigation();
  const netInfo = useNetInfo();

  const {setData} = useContext(UserContext);

  const handleNavigateForm04_PLIII_03 = async () => {
    navigation.navigate('form04_PLIII_03');
  };

  const CustomIconBack = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
          setData({});
        }}>
        <Icon name="arrowleft" size={30} color="#000" />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.btnText, {color: 'red'}]}>
              Biên nhận thủy sản bốc dỡ qua cảng
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => handleNavigateForm04_PLIII_03()}>
                <View style={[styles.btn, {backgroundColor: '#33CC00'}]}>
                  <Text style={[styles.btnText, {color: '#fff'}]}>Tạo</Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{}} onPress={() => Storage.setItem('token','kH1diaZdjtBBvQWsqQb+lXKkzdsHZy38TDO4eMChYlQ=x')}>
                <View style={[styles.btn, { backgroundColor: '#33CC00' }]}>
                  <Text style={[styles.btnText, { color: '#fff' }]}>token</Text>
                </View>
              </TouchableOpacity> */}
            </View>
          ),
        }}
        name="form04_PLIII_03Diary"
        component={Form04_PLIII_03Diary}
      />

      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => <CustomIconBack />,
        }}
        name="form04_PLIII_03"
        component={Form04_PLIII_03}
      />
    </Stack.Navigator>
  );
};

export default Form04_PLIII_03Navigation;
