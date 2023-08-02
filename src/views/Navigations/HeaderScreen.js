import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from 'react-native'
import React, {useContext} from 'react';

import {UserContext, UserProvider} from '../../contexts/UserContext';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderScreen = () => {
  const {isLoggedIn,setIsLoggedIn,dataInf} = useContext(UserContext);
  const navigation = useNavigation();

  const handleLogOut = () => {
    Alert.alert(
      'Xác nhận đăng xuất',
      'Bạn có chắc chắn muốn đăng xuất?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Đăng xuất',
          onPress: async () => {
            setIsLoggedIn(false);
            AsyncStorage.removeItem('token');
          }

        },
      ],
      { cancelable: false }
    );
  };
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-between',width:'100%',alignItems:'center'}}>
            <Image style={{width:170,height:100,resizeMode:'contain' }} source={require('../../img/logo-khanhhoi.png')} />
            
                {/* Nút Drawer sẽ mở menu khi người dùng nhấp vào */}
                {isLoggedIn?
            <TouchableOpacity onPress={()=>handleLogOut()}>

                <Text style={{ fontSize: 20, fontWeight: 'bold',color:'#000', marginLeft: 16 }}>Đăng xuất</Text>
                
            </TouchableOpacity>

                :
                <TouchableOpacity onPress={() => navigation.navigate('login') }>
            
                <Text style={{ fontSize: 20, fontWeight: 'bold',color:'#000', marginLeft: 16 }}>Đăng nhập</Text>
                </TouchableOpacity>
            
            }

        </View>
    )
}

export default HeaderScreen

const styles = StyleSheet.create({})