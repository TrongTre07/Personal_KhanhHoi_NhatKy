// LoginContext.js
import React, {createContext, useEffect, useState,useMemo} from 'react';
import instance from '../axios/instance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {ToastAndroid, Alert} from 'react-native';
import jwtDecode from 'jwt-decode';
import Storage from '../utils/storage';
import RNRestart from 'react-native-restart';

const UserContext = createContext();

const UserProvider = ({children}) => {
  // const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [dataInfShip, setDataInfShip] = useState([]);
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorPost, setIsErrorPost] = useState(false);
  const [isErrorUpdate, setIsErrorUpdate] = useState(false);
  const [isErrorShip, setIsErrorShip] = useState(false);
  const [initialTitle, setInitialTitle] = useState('');
  const [goBackAlert, setGoBackAlert] = useState(false);

  const login = async (username, password) => {
    // user: 'abc' pass: '123456'
    try {
      const payload = {userName_: username, pass_: password};

      const response = await instance.post('home/login', payload);

      if (response.data != null) {
        await Storage.setItem('token', response.data);
        setIsLoggedIn(true);
        ToastAndroid.show('Đăng nhập thành công.', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(
          'Tài khoản hoặc mật khẩu không đúng.',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      setIsError(true);
      console.error('Error fetching data or saving token:', error);
      ToastAndroid.show(
        'Đăng nhập thất bại, vui lòng thử lại sau.',
        ToastAndroid.SHORT,
      );
    }
  };

  //check login token
  const checkLoginStatus = async () => {
    try {
      // có token thì true ko thì false
      const userToken = await Storage.getItem('token');
      if (userToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log('Error checking login status:', error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
  //
  const postForm = async obj => {
    try {
      const payload = obj;
      const response = await instance.post(
        'api/FormAppendix/0101/create',
        payload,
      );

      if (response.data == false) {
        setIsErrorPost(true);
      } else {
        Alert.alert('Thành công', 'Bạn đã tạo thành công!', [
          {
            text: 'OK',
            onPress: () => {
              // setIsErrorPost(false);
              // setIsLoading(false)
              setGoBackAlert(true);
            },
          },
        ]);
      }
      console.log('RESs: ', response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      setIsErrorPost(true);
      // ToastAndroid.show('Lỗi, vui lòng vào ứng dụng lại!', ToastAndroid.SHORT);
      if(error.response.status===401){
        Alert.alert('Đã hết phiên đăng nhập!','Vui lòng đăng nhập lại', [
          {
            text: 'ok',
            onPress: () => {
              setIsLoggedIn(false);
              Storage.removeItem('token');
            },
          },
        ]);
      }else 
      Alert.alert('Lỗi', 'vui lòng vào ứng dụng lại!', [
        {
          text: 'OK',
          onPress: () => {
            RNRestart.restart();
            // setIsErrorPost(false);
          },
        },
      ]);
      console.log('POST ERROR: ', error);
    }
  };

  const getDiaryForm = async () => {
    try {
      if (await Storage.getItem('token')) {
        
        const response = await instance.get('api/FormAppendix/getall_0101');
        setData(await response.data);

        //api getShip
        const dataship = await instance.get('api/FormAppendix/getallship');
        setDataInfShip(await dataship.data);
        await Storage.setItem(
          'dataInfShip',
          JSON.stringify(dataship.data),
        );
        console.log('GET diary: ');

        return response.data;
      }
    } catch (error) {
      if(error.response.status===401){
        Alert.alert('Đã hết phiên đăng nhập!','Vui lòng đăng nhập lại', [
          {
            text: 'ok',
            onPress: () => {
              setIsLoggedIn(false);
              Storage.removeItem('token');
            },
          },
        ]);
      }
    }
  };

  const deleteFormId = async id => {
    try {
      if (id) {
        await instance.post(`api/FormAppendix/0101/del/${id}`);
      }
    } catch (error) {
      if(error.response.status===401){
        Alert.alert('Đã hết phiên đăng nhập!','Vui lòng đăng nhập lại', [
          {
            text: 'ok',
            onPress: () => {
              setIsLoggedIn(false);
              Storage.removeItem('token');
            },
          },
        ]);
      }
      console.log('Delete ERROR: ', error);
    }
  };

  const getDetailFormId = async id => {
    try {
      if (!id) {
        setInitialTitle('');
      }
      if (await Storage.getItem('token')) {
        const response = await instance.get(
          `/api/FormAppendix/getdetail_0101_byid/${id}`,
        );

        setInitialTitle(response.data.dairy_name);
        setData(await response.data);
      }
    } catch (error) {
      if(error.response.status===401){
        Alert.alert('Đã hết phiên đăng nhập!','Vui lòng đăng nhập lại', [
          {
            text: 'ok',
            onPress: () => {
              setIsLoggedIn(false);
              Storage.removeItem('token');
            },
          },
        ]);
      }
      console.log('ERROR: ', error);
    }
  };

  const updateForm = async obj => {
    try {
      // console.log("OBJ: ", obj)
      const response = await instance.post(
        `/api/FormAppendix/0101/update`,
        obj,
      );
      if (response.data == true) {
        Alert.alert('Thành công', 'Bạn đã cập nhật thành công!', [
          {
            text: 'OK',
            onPress: () => {
              // setIsErrorPost(false);
              setGoBackAlert(true);
            },
          },
        ]);
      }
      // console.log('FORM: ', obj);
    } catch (error) {
      console.log('ERROR UPDATE: ', error);
      if(error.response.status===401){
        Alert.alert('Đã hết phiên đăng nhập!','Vui lòng đăng nhập lại', [
          {
            text: 'ok',
            onPress: () => {
              setIsLoggedIn(false);
              Storage.removeItem('token');
            },
          },
        ]);
      }else
      Alert.alert('Lỗi', 'Không thể cập nhật!', [
        {
          text: 'OK',
          onPress: () => {
            // setIsErrorPost(false);
          },
        },
      ]);
    }
  };

  const contextValues = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      login,
      token,
      setToken,
      postForm,
      isLoading,
      setIsLoading,
      isErrorPost,
      setIsErrorPost,
      isErrorShip,
      setIsErrorShip,
      isErrorUpdate,
      setIsErrorUpdate,
      getDiaryForm,
      deleteFormId,
      dataInfShip,
      data,
      setData,
      getDetailFormId,
      updateForm,
      initialTitle,
      setInitialTitle,
      setDataInfShip,
      goBackAlert,
      setGoBackAlert,
    }),
    [
      isLoggedIn,
      setIsLoggedIn,
      login,
      token,
      setToken,
      postForm,
      isLoading,
      setIsLoading,
      isErrorPost,
      setIsErrorPost,
      isErrorShip,
      setIsErrorShip,
      isErrorUpdate,
      setIsErrorUpdate,
      getDiaryForm,
      deleteFormId,
      dataInfShip,
      data,
      setData,
      getDetailFormId,
      updateForm,
      initialTitle,
      setInitialTitle,
      setDataInfShip,
      goBackAlert,
      setGoBackAlert,
    ]
  );

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
