// LoginContext.js
import React, {createContext, useEffect, useState} from 'react';
import instance from '../axios/instance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = async (username, password) => {
    // user: 'abc' pass: '123456'
    try {
      const payload = {userName_: username, pass_: password}; 

      const response = await instance.post('home/login', payload);
      await AsyncStorage.setItem('token', response.data)
      console.log("ASYNC: ", await AsyncStorage.getItem('token'))
      console.log('RES: ', response.data);
      if(response.data != null){
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error('Error fetching data or saving token:', error);
    }
  };

  const postForm = async (obj) =>{
    try {
      const payload = obj;
      console.log("ASYNC POST: ", await AsyncStorage.getItem('token'))
      
      const response = await instance.post('api/FormAppendix/0101/create', payload)      
      console.log("RES: ", response.data)
    } catch (error) {
      console.log("POST ERROR: ", error)
    }
  }

  const contextValues = {
    isLoggedIn,
    login,
    token,
    setToken,
    postForm
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
