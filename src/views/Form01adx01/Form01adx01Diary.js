import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {ExportPDF} from './pdfForm01/ExportPDF';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import Storage from '../../utils/storage';
import {PrintfPDF} from './pdfForm01/PrintfPDF';
import moment from 'moment';
const Form01adx01Diary = ({navigation}) => {
  const [dataDiary, setDataDiary] = useState([]);

  const {
    getDiaryForm0101,
    deleteFormId,
    dataInfShip,
    isLoggedIn,
    postForm,
    getDetailFormId,
    data,
    setData,
    checkViewPDF,
    setCheckViewPDF,
  } = useContext(UserContext);

  const netInfo = useNetInfo();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setDataDiary([]);
    }
  }, [isLoggedIn]);

  // check neu co wifi thi post file o local len server
  useFocusEffect(
    React.useCallback(() => {
      if (netInfo.isConnected) {
        autoPostForm();
      }
    }, [netInfo.isConnected]),
  );

  const autoPostForm = async () => {
    const form = await Storage.getItem('form01adx01');
    if (form !== null) {
      let data = JSON.parse(form);
      const newData = [];

      for (const item of data) {
        const result = await postForm(item);
        if (result) {
        } else {
          newData.push(item);
        }
      }
      await Storage.setItem('form01adx01', JSON.stringify(newData));
      setDataDiary(newData);
    }
  };

  const fetchdata = async () => {
    //sap xep lai danh sach theo thoi gian update
    setRefreshing(true);
    const rawDiary = await getDiaryForm0101();
    try {
      if (rawDiary != undefined) {
        await rawDiary.sort(sortListForm);
      }
      setDataDiary(rawDiary);
      setRefreshing(false);
    } catch (error) {}
  };

  const sortListForm = (a, b) => {
    const dateA = new Date(a.date_modified);
    const dateB = new Date(b.date_modified);
    return dateA - dateB;
  };

  //tranh goi ham nhieu lan khi o ben ngoai
  // const [template, setTemplate] = useState(false);
  // const handleGeneratePDF = id => {
  //   getDetailFormId(id);

  //   if (netInfo.isConnected) {
  //     setTemplate(true);
  //   } else {
  //     // Handle PDF generation locally without internet
  //     const formIndex = dataDiary.findIndex(item => item.id === id);
  //     if (formIndex !== -1) {
  //       const formData = dataDiary[formIndex];
  //       ExportPDF(formData); // Assuming ExportPDF generates the PDF
  //     }
  //   }
  // };
  // let checkForm=false;
  // const [checkForm, setCheckForm] = useState(false);
  // useEffect(() => {
  //   if (data && template) {
  //     let dataTemp = data;
  //     if(checkForm==true){
  //       dataTemp= {...data, dairy_name: 'filemau'};
  //       setCheckForm(false);
  //       setTimeout(() => {
  //         navigation.navigate('ViewPDF');
  //       }, 2000);
  //     }
  //     ExportPDF(dataTemp);
  //     setTemplate(false);

  //   }
  //   // checkForm=false;
  // }, [data, setTemplate]);

  // // dùng useEffect data để in
  //   const [printf, setPrintf] = useState(false);
  //   const handerlePrintPDF = (id) => {
  //     getDetailFormId(id);
  //     setPrintf(true);
  //   };

  //   useEffect(() => {
  //     if (data && printf) {
  //       PrintfPDF(data);
  //       setPrintf(false);
  //     }
  //   }, [data, setPrintf]);

  const getDataLocal = async () => {
    const result = await Storage.getItem('form01adx01');
    if (result !== null) {
      const data = JSON.parse(result);
      setDataDiary(data);
    }
  };

  // nếu có wifi, gọi app lấy danh sách từ server
  // nếu không có wifi, lấy data từ local
  useFocusEffect(
    React.useCallback(() => {
      if (netInfo.isConnected) fetchdata();
      else getDataLocal();
    }, [netInfo.isConnected]),
  );

  const handleDelete = id => {
    Alert.alert(
      'Xác nhận xoá',
      'Bạn có chắc chắn muốn xoá dữ liệu này?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xoá',
          onPress: async () => {
            await deleteFormId(id);
            fetchdata();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleDeleteFormLocal = index => {
    Alert.alert(
      'Xác nhận xoá',
      'Bạn có chắc chắn muốn xoá dữ liệu này?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xoá',
          onPress: async () => {
            // delete object at index
            const newData = [...dataDiary];
            newData.splice(index, 1);
            await Storage.setItem('form01adx01', JSON.stringify(newData)); // update lại data vừa xoá
            setDataDiary(newData);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const elementButton = (id, index) => (
    <View style={styles.boxbtn}>
      <TouchableOpacity
        // disabled={true}
        onPress={async () => {
          let dataTemp;
          if (netInfo.isConnected) {
            dataTemp = await getDetailFormId(id);
            dataTemp.dairy_name = 'filemau';
          } else {
            const result = await Storage.getItem('form01adx01');
            if (result !== null) {
              const dataLocal = JSON.parse(result);
              dataTemp = dataLocal[index];
              dataTemp.dairy_name = 'filemau';
            }
          }
          const result = await ExportPDF(dataTemp);
          result
            ? navigation.navigate('ViewPDF')
            : Alert.alert('Thất bại', `không thể xem file pdf`);
          // setCheckForm(true);
          // handleGeneratePDF(id);
        }}>
        <View style={[styles.btn, {backgroundColor: '#99FF33'}]}>
          <Text style={styles.btnText}>Xem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('form01adx01', {
            id: !netInfo.isConnected ? index : id,
          })
        }>
        <View style={[styles.btn, {backgroundColor: '#00FFFF'}]}>
          <Text style={styles.btnText}>Sửa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          let tempData;
          if (netInfo.isConnected) {
            tempData = await getDetailFormId(id);
          } else {
            const result = await Storage.getItem('form01adx01');
            if (result !== null) {
              const dataLocal = JSON.parse(result);
              tempData = dataLocal[index];
            }
          }
          ExportPDF(tempData);
        }}>
        <View style={[styles.btn, {backgroundColor: '#FF99FF'}]}>
          <Text style={styles.btnText}>Tải xuống</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          !netInfo.isConnected
            ? handleDeleteFormLocal(index)
            : handleDelete(id);
        }}>
        <View style={[styles.btn, {backgroundColor: '#FF3333'}]}>
          <Text style={styles.btnText}>Xoá</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          // if(!netInfo.isConnected){
          //   ToastAndroid.show('Vui lòng kết nối internet.', ToastAndroid.SHORT);
          //   return;
          // }
          // handerlePrintPDF(id)

          let tempData;
          if (netInfo.isConnected) {
            tempData = await getDetailFormId(id);
          } else {
            const result = await Storage.getItem('form01adx01');
            if (result !== null) {
              const dataLocal = JSON.parse(result);
              tempData = dataLocal[index];
            }
          }
          // console.log('tempData: ', tempData);
          if (tempData) PrintfPDF(tempData);
          else Alert.alert('Thất bại', `không thể in file pdf`);
        }}>
        <View style={[styles.btn, {backgroundColor: '#C0C0C0'}]}>
          <Text style={styles.btnText}>In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  //data
  const selectedData = dataDiary?.map((item, index) => [
    index,
    item.dairy_name,
    item.tau_bs,
    item.ten_thuyentruong,
    item.chuyenbien_so,
    moment(item.date_create).format('DD/MM/YYYY HH:mm'),
    !item.date_modified
      ? ''
      : moment(item.date_modified).format('DD/MM/YYYY HH:mm'),
    elementButton(item.id, index),
  ]);

  //colum
  let state = {
    tableHead: [
      'STT',
      'Tên',
      'Số tàu',
      'Thuyền trưởng',
      'Chuyến biển số',
      'Ngày tạo',
      'Sửa đổi lần cuối',
      'Thao tác',
    ],
    tableColum: selectedData,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        // onRefresh={fetchdata}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchdata()}
          />
        }>
        <Table borderStyle={{borderWidth: 1}}>
          <Row
            data={state.tableHead}
            flexArr={[0.8, 1, 2, 1.5, 1.5, 2, 2, 3.5]}
            style={styles.head}
            textStyle={styles.textHead}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={state.tableColum}
              flexArr={[0.8, 1, 2, 1.5, 1.5, 2, 2, 3.5]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </ScrollView>
    </View>
  );
};

export default Form01adx01Diary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    backgroundColor: '#3333FF',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  text: {
    textAlign: 'center',
    padding: 3,
    fontSize: 11,
    color: '#000',
  },
  textHead: {
    textAlign: 'center',
    alignSelf: 'center',
    padding: 3,
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
  },
  btn: {
    borderRadius: 8,
    margin: 3,
  },
  boxbtn: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 3,
  },
  btnText: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
});
