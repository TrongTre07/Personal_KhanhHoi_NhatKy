import React, {createContext, useContext, useState} from 'react';

const UserForm0201Context = createContext();

const UserForm0201Provider = ({children}) => {
  const [dataForm0201, setDataForm0201] = useState([]);

  const login = async (username, password) => {

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
};
export {UserForm0201Context, UserForm0201Provider};
