// LoginContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';
import instance from '../axios/instance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const login = async (username, password) => {
    // user: 'abc' pass: '123456'
    try {
      const payload = {userName_: username, pass_: password};

      const response = await instance.post('home/login', payload);
      await AsyncStorage.setItem('token', response.data);
      console.log('ASYNC: ', await AsyncStorage.getItem('token'));
      console.log('RES: ', response.data);
      if (response.data != null) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsError(true);
      console.error('Error fetching data or saving token:', error);
    }
  };

  const postForm = async obj => {
    try {
      const payload = obj;
      const response = await instance.post(
        'api/FormAppendix/0101/create',
        payload,
      );
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
      return response.data;
    } catch (error) {
      console.log('POST ERROR: ', error);
    }
  };

  const deleteFormId = async id => {
    try {
      const response = await instance.post(`api/FormAppendix/0101/del/${id}`);
      console.log('delete', response.data);
    } catch (error) {
      console.log('POST ERROR: ', error);
    }
  };

  const contextValues = {
    isLoggedIn,
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
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
