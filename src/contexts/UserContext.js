// LoginContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';
import instance from '../axios/instance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const UserContext = createContext();

const UserProvider = ({children}) => {
  // const navigation = useNavigation();
  
  const [data, setData] = useState([]);
  const [dataInfShip, setDataInfShip] = useState([]);
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const login = async (username, password) => {
    // user: 'abc' pass: '123456'
    try {
      const payload = {userName_: username, pass_: password};

      const response = await instance.post('home/login', payload);
      if (!(await AsyncStorage.getItem('token')))
        await AsyncStorage.setItem('token', response.data);

      if (response.data != null) {
        console.log(response.data);
        setIsLoggedIn(true);
        // navigation.goBack();
      }
    } catch (error) {
      setIsError(true);
      console.error('Error fetching data or saving token:', error);
    }
  };

  //check login token
  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('token');
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
      console.log('RES: ', response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log('POST ERROR: ', error);
    }
  };

  const getDiaryForm = async () => {
    try {
      const response = await instance.get('api/FormAppendix/getall_0101');
      setData(await response.data);
      const dataship = await instance.get('api/FormAppendix/getallship');
      setDataInfShip(await dataship.data);
      return response.data;
    } catch (error) {
      console.log('GET ERROR: ', error);
    }
  };

  const deleteFormId = async id => {
    try {
      await instance.post(`api/FormAppendix/0101/del/${id}`);
    } catch (error) {
      console.log('Delete ERROR: ', error);
    }
  };

  const getDetailFormId = async id => {
    try {
      console.log("ID: ", id)
      const response = await instance.get(
        `/api/FormAppendix/getdetail_0101_byid/${id}`,
      );

      console.log('RES: ', response.data);
      setData(await response.data)
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  const contextValues = {
    isLoggedIn,
    setIsLoggedIn,
    login,
    token,
    setToken,
    postForm,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    getDiaryForm,
    deleteFormId,
    dataInfShip,
    data,
    setData,
    getDetailFormId,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
