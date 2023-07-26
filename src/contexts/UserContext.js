// LoginContext.js
import React, {createContext, useEffect, useState} from 'react';
import instance from '../axios/instance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [dataInfShip, setDataInfShip] = useState([]);
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
        setIsLoggedIn(true);
        const dataship= await instance.get('api/FormAppendix/getallship');
        setDataInfShip(await dataship.data);
      }
    } catch (error) {
      console.error('Error fetching data or saving token:', error);
    }
  };
  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('token');
      if (userToken) {
        // Kiểm tra hợp lệ token ở đây (ví dụ: kiểm tra thời gian hết hạn)
        // Nếu token còn hạn, đánh dấu người dùng đã đăng nhập
        setIsLoggedIn(true);
      } else {
        // Nếu không có token, đánh dấu người dùng chưa đăng nhập
        setIsLoggedIn(false);
      }
    } catch (error) {
      // Xử lý lỗi nếu cần
      console.log('Error checking login status:', error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const postForm = async (obj) =>{
    try {
      const payload = obj;
      console.log("ASYNC POST: ", await AsyncStorage.getItem('token'))
      
      const response = await instance.post('api/FormAppendix/0101/create', payload)      
      console.log("RES: ", response.data)
      return response.data;
    } catch (error) {
      console.log("POST ERROR: ", error)
    }
  }

  const getDiaryForm = async () =>{
    try {
      const response = await instance.get('api/FormAppendix/getall_0101');
      return response.data;
    } catch (error) {
      console.log("GET ERROR: ", error)
    }
  }

  const deleteFormId = async (id) =>{
    try {
      const response = await instance.post(`api/FormAppendix/0101/del/${id}`);
      console.log('delete',response.data);
    } catch (error) {
      console.log("Delete ERROR: ", error)
    }
  }

  const getFormId = async (id) =>{
    try {
      const response = await instance.post(`api/FormAppendix/0101/del/${id}`);
      console.log('delete',response.data);
    } catch (error) {
      console.log("GET ERROR: ", error)
    }
  }

  const contextValues = {
    isLoggedIn,
    setIsLoggedIn,
    login,
    token,
    setToken,
    postForm,
    getDiaryForm,
    deleteFormId,getFormId,dataInfShip,
    };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
