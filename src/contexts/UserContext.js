// LoginContext.js
import React, {createContext, useEffect, useState, useMemo} from 'react';
import instance from '../axios/instance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {ToastAndroid, Alert} from 'react-native';
import jwtDecode from 'jwt-decode';
import Storage from '../utils/storage';
import RNRestart from 'react-native-restart';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [data0201, setData0201] = useState({
    id: 0,
    dairy_name: 'ddddd',
    ten_chutau: 'nguyen bv',
    ten_thuyentruong: '',
    id_tau: '4',
    tau_bs: 'TC-1234-TS',
    tau_chieudailonnhat: '1',
    tau_tongcongsuatmaychinh: '12',
    gpkt_so: 'HAGPKT',
    gpkt_thoihan: '12/2/2022',
    chuyenbien_so: '',
    cang_di: '',
    ngay_di: '2023-09-06T00:00:00',
    cang_ve: '',
    ngay_ve: '2023-09-06T00:00:00',
    ngaynop: '2023-09-06T00:00:00',
    vaoso_so: '',
    date_create: '2023-09-06T12:01:54',
    thumua: [
      {
        id: 0,
        dairy_id: 0,
        ngaythang: '2023-09-06',
        id_tau: '',
        tau_bs: '',
        tm_ct_vt_vido: '',
        tm_ct_vt_kinhdo: '',
        loai_1: '',
        loai_2: '',
        loai_3: '',
        loai_4: '',
        loai_5: '',
        loai_6: '',
        loai_1_kl: '',
        loai_2_kl: '',
        loai_3_kl: '',
        loai_4_kl: '',
        loai_5_kl: '',
        loai_6_kl: '',
        tongsanluong: '',
      },
    ],
    thongtintaudc_thumua: [
      {
        id: '5e7c3de7-5e6e-4c88-b083-f788ff139dca',
        dairy_id: 0,
        id_tau: '',
        tau_bs: '',
        tau_chieudailonnhat: '',
        tau_tongcongsuatmaychinh: '',
        gpkt_so: '',
        gpkt_thoihan: '0001-01-01T00:00:00',
        nghekt: '6666666666',
        cang_di: '',
        ngay_di: '2023-09-06T00:00:00',
        tg_khaithac_tungay: '2023-09-06T00:00:00',
        tg_khaithac_denngay: '2023-09-06T00:00:00',
        thongtinhoatdong: [
          {
            id: 0,
            dairy_id: 0,
            methu: '1',
            thoidiem_tha: '2023-09-06T12:01',
            vido_tha: '',
            kinhdo_tha: '',
            thoidiem_thu: '2023-09-06T12:01',
            vido_thu: '',
            kinhdo_thu: '',
            loai_1: '',
            loai_2: '',
            loai_3: '',
            loai_4: '',
            loai_5: '',
            loai_6: '',
            loai_1_kl: '',
            loai_2_kl: '',
            loai_3_kl: '',
            loai_4_kl: '',
            loai_5_kl: '',
            loai_6_kl: '',
            tongsanluong: '',
          },
        ],
        selected: false,
      },
      {
        id: '3ee3d2a8-e61a-41bf-b554-40bc1356f0c8',
        dairy_id: 0,
        id_tau: '',
        tau_bs: '',
        tau_chieudailonnhat: '',
        tau_tongcongsuatmaychinh: '',
        gpkt_so: '',
        gpkt_thoihan: '0001-01-01T00:00:00',
        nghekt: '2222222222',
        cang_di: '',
        ngay_di: '2023-09-06T00:00:00',
        tg_khaithac_tungay: '2023-09-06T00:00:00',
        tg_khaithac_denngay: '2023-09-06T00:00:00',
        thongtinhoatdong: [
          {
            id: 0,
            dairy_id: 0,
            methu: '1',
            thoidiem_tha: '2023-09-06T12:01',
            vido_tha: '',
            kinhdo_tha: '',
            thoidiem_thu: '2023-09-06T12:01',
            vido_thu: '',
            kinhdo_thu: '',
            loai_1: '',
            loai_2: '',
            loai_3: '',
            loai_4: '',
            loai_5: '',
            loai_6: '',
            loai_1_kl: '',
            loai_2_kl: '',
            loai_3_kl: '',
            loai_4_kl: '',
            loai_5_kl: '',
            loai_6_kl: '',
            tongsanluong: '',
          },
          {
            id: 0,
            dairy_id: 0,
            methu: '2',
            thoidiem_tha: '2023-09-06T12:01',
            vido_tha: '',
            kinhdo_tha: '',
            thoidiem_thu: '2023-09-06T12:01',
            vido_thu: '',
            kinhdo_thu: '',
            loai_1: '',
            loai_2: '',
            loai_3: '',
            loai_4: '',
            loai_5: '',
            loai_6: '',
            loai_1_kl: '',
            loai_2_kl: '',
            loai_3_kl: '',
            loai_4_kl: '',
            loai_5_kl: '',
            loai_6_kl: '',
            tongsanluong: '',
          },
        ],
        selected: false,
      },
      {
        id: 'f45e7ae3-fef4-4c0b-8b2f-80fa8e0dea7f',
        dairy_id: 0,
        id_tau: '',
        tau_bs: '',
        tau_chieudailonnhat: '',
        tau_tongcongsuatmaychinh: '',
        gpkt_so: '',
        gpkt_thoihan: '0001-01-01T00:00:00',
        nghekt: '1111111111',
        cang_di: '',
        ngay_di: '2023-09-06T00:00:00',
        tg_khaithac_tungay: '2023-09-06T00:00:00',
        tg_khaithac_denngay: '2023-09-06T00:00:00',
        thongtinhoatdong: [
          {
            id: 0,
            dairy_id: 0,
            methu: '1',
            thoidiem_tha: '2023-09-06T12:01',
            vido_tha: '',
            kinhdo_tha: '',
            thoidiem_thu: '2023-09-06T12:01',
            vido_thu: '',
            kinhdo_thu: '',
            loai_1: '',
            loai_2: '',
            loai_3: '',
            loai_4: '',
            loai_5: '',
            loai_6: '',
            loai_1_kl: '',
            loai_2_kl: '',
            loai_3_kl: '',
            loai_4_kl: '',
            loai_5_kl: '',
            loai_6_kl: '',
            tongsanluong: '',
          },
        ],
        selected: true,
      },
    ],
    isdraft: false,
  });
  const [data0301, setData0301] = useState([]);
  const [dataInfShip, setDataInfShip] = useState([]);
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorPost, setIsErrorPost] = useState(false);
  const [initialTitle, setInitialTitle] = useState('');
  const [goBackAlert, setGoBackAlert] = useState(false);

  const login = async (username, password) => {
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

  //gọi check login lần đầu
  useEffect(() => {
    checkLoginStatus();
  }, []);

  //form 0101
  //tạo form
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
              setGoBackAlert(true);
            },
          },
        ]);
      }
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      setIsErrorPost(true);

      if (error.response.status === 401) {
        getAlert401();
      } else
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

  //getDi
  const getDiaryForm = async () => {
    try {
      if (await Storage.getItem('token')) {
        const response = await instance.get('api/FormAppendix/getall_0101');
        // setData(await response.data);

        //api getShip
        const dataship = await instance.get('api/FormAppendix/getallship');
        setDataInfShip(await dataship.data);
        await Storage.setItem('dataInfShip', JSON.stringify(dataship.data));

        return response.data;
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
      }
    }
  };

  const deleteFormId = async id => {
    try {
      if (id) {
        await instance.post(`api/FormAppendix/0101/del/${id}`);
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
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
      if (error.response.status === 401) {
        getAlert401();
      }
      console.log('ERROR: ', error);
    }
  };

  const updateForm = async obj => {
    try {
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
    } catch (error) {
      console.log('ERROR UPDATE: ', error);
      if (error.response.status === 401) {
        getAlert401();
      } else
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
  //end

  //form 0201
  //get diary form
  const getDiaryForm0201 = async () => {
    try {
      if (await Storage.getItem('token')) {
        const response = await instance.get('api/FormAppendix/getall_0201');
        return response.data;
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
      }
    }
  };

  //delete form
  const deleteForm0201Id = async id => {
    try {
      if (id) {
        await instance.post(`api/FormAppendix/0201/del/${id}`);
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
      }
      console.log('Delete ERROR: ', error);
    }
  };

  //get form theo id
  const getDetailForm0201Id = async id => {
    try {
      if (!id) {
        setInitialTitle('');
      }
      if ((await Storage.getItem('token')) && id) {
        const response = await instance.get(
          `/api/FormAppendix/get_detail_0201_by_id/${id}`,
        );

        setInitialTitle(response.data.dairy_name);
        setData0201(await response.data);
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
      }
      console.log('ERROR: ', error);
    }
  };
  //end

  //form 0301
  //get diary form
  const getDiaryForm0301 = async () => {
    try {
      if (await Storage.getItem('token')) {
        const response = await instance.get('api/FormAppendix/0301/getall');
        return response.data;
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
      }
    }
  };

  //delete form
  const deleteForm0301Id = async id => {
    try {
      if (id) {
        await instance.post(`api/FormAppendix/0301/del/${id}`);
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
      }
      console.log('Delete ERROR: ', error);
    }
  };

  //get form theo id
  const getDetailForm0301Id = async id => {
    try {
      if (!id) {
        setInitialTitle('');
      }
      if ((await Storage.getItem('token')) && id) {
        const response = await instance.get(
          `/api/FormAppendix/0301/getbyid/${id}`,
        );

        setInitialTitle(response.data.dairy_name);
        setData0201(await response.data);
      }
    } catch (error) {
      if (error.response.status === 401) {
        getAlert401();
      }
      console.log('ERROR: ', error);
    }
  };
  //end

  //check token
  const getAlert401 = () => {
    Alert.alert('Đã hết phiên đăng nhập!', 'Vui lòng đăng nhập lại', [
      {
        text: 'ok',
        onPress: () => {
          setIsLoggedIn(false);
          Storage.removeItem('token');
        },
      },
    ]);
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

      getDiaryForm0201,
      deleteForm0201Id,
      getDetailForm0201Id,
      data0201,
      setData0201,

      getDiaryForm0301,
      deleteForm0301Id,
      getDetailForm0301Id,
      data0301,
      setData0301,
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

      getDiaryForm0201,
      deleteForm0201Id,
      getDetailForm0201Id,
      data0201,
      setData0201,

      getDiaryForm0301,
      deleteForm0301Id,
      getDetailForm0301Id,
      data0301,
      setData0301,
    ],
  );

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
