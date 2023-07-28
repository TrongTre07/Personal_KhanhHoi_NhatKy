import React, {useState, useContext,useEffect} from 'react';
import {View, TextInput, Alert, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {UserProvider, UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {login,isLoggedIn} = useContext(UserContext);

  const handleLogin = async () => {
    login(username, password);

  };
  if(isLoggedIn){
    navigation.goBack();
    ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.loginText}>Đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'gray'}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'gray'}
            secureTextEntry={showPassword}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.passwordIconContainer}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="gray"
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.input, styles.button]}
          onPress={() => handleLogin()}>
          <Text style={{color: 'white', textAlign: 'center'}}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
