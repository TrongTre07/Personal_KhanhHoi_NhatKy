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
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { UserContext } from '../../contexts/UserContext';
import  {ExportPDF}  from './pdfForm0201/ExportPDF';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import Storage from '../../utils/storage';
import { PrintfPDF } from './pdfForm0201/PrintfPDF';
import moment from 'moment';
const Form02adx01Diary = ({ navigation }) => {
  const [dataDiary, setDataDiary] = useState([]);

  const {
    getDiaryForm0201,
    deleteForm0201Id,
    dataInfShip,
    isLoggedIn,
    postForm0201,
    getDetailForm0201Id,
    data0201,
    setData0201,
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
    const form = await Storage.getItem('form02adx01');
    if (form !== null) {
      let data = JSON.parse(form);
      const newData = [];
  
      for (const item of data) {
        const result = await postForm0201(item);
        if (result) {
        } else {
          newData.push(item);
        }
      }
      await Storage.setItem('form02adx01', JSON.stringify(newData));
      setDataDiary(newData);
    }
  };

  const fetchdata = async () => {
    //sap xep lai danh sach theo thoi gian update
    setRefreshing(true);
    const rawDiary = await getDiaryForm0201();
    try {
      if (rawDiary != undefined) {
        await rawDiary.sort(sortListForm);
      }
      setDataDiary(rawDiary);
      setRefreshing(false);
    } catch (error) { }
  };

  const sortListForm = (a, b) => {
    const dateA = new Date(a.date_modified);
    const dateB = new Date(b.date_modified);
    return dateA - dateB;
  };


  //tranh goi ham nhieu lan khi o ben ngoai
  const [template, setTemplate] = useState(false);
  const handleGeneratePDF = id => {
    getDetailForm0201Id(id);
    
    if (netInfo.isConnected) {
      setTemplate(true);
    } else {
      // Handle PDF generation locally without internet
      const formIndex = dataDiary.findIndex(item => item.id === id);
      if (formIndex !== -1) {
        const formData = dataDiary[formIndex];
        ExportPDF(formData); // Assuming ExportPDF generates the PDF
      }
    }  
  };
  // let checkForm=false;
  const [checkForm, setCheckForm] = useState(false);
  useEffect(() => {
    if (data0201 && template) {
      let dataTemp = data0201;
      if(checkForm==true){
        console.log('dataTemp: ', dataTemp);

        dataTemp= {...data0201, dairy_name: 'filemau'};
        setCheckForm(false);
        setTimeout(() => {
          navigation.navigate('ViewPDF');
        }, 2000);
      }
      ExportPDF(dataTemp);
      setTemplate(false);

    }
    // checkForm=false;
  }, [data0201, setTemplate]);

  // useEffect(() => {
  //   if(checkViewPDF){
  //     setCheckViewPDF(false);

  //   }
  // }, [checkViewPDF]);


// dùng useEffect data để in
  const [printf, setPrintf] = useState(false);
  const handerlePrintPDF = (id) => {
    getDetailForm0201Id(id);
    setPrintf(true);
  };

  useEffect(() => {
    console.log('data0201: ', data0201);
    if (data0201 && printf) {
      PrintfPDF(data0201);
      setPrintf(false);
    }
  }, [data0201, setPrintf]);

  const getDataLocal = async () => {
    const result = await Storage.getItem('form02adx01');
    if (result !== null) {
      const data = JSON.parse(result);
      setDataDiary(data);
    }
  };

  // nếu có wifi, gọi app lấy danh sách từ server
  // nếu không có wifi, lấy data từ local
  useFocusEffect(
    React.useCallback(() => {
      if (netInfo.isConnected)
         fetchdata();
      else 
         getDataLocal();

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
            await deleteForm0201Id(id);
            fetchdata();
          },
        },
      ],
      { cancelable: false },
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
            await Storage.setItem('form02adx01', JSON.stringify(newData)); // update lại data vừa xoá
            setDataDiary(newData);
          },
        },
      ],
      { cancelable: false },
    );

  };

  const elementButton = (id, index) => (
    <View style={styles.boxbtn}>
      <TouchableOpacity
        // disabled={true}
        onPress={() => {
          if(!netInfo.isConnected){
            ToastAndroid.show('Vui lòng kết nối internet.', ToastAndroid.SHORT);
            return; 
          }
          setCheckForm(true);
          handleGeneratePDF(id);
        }}>
        <View style={[styles.btn, { backgroundColor: '#99FF33' }]}>
          <Text style={styles.btnText}>Xem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('form02adx01', { id: !netInfo.isConnected ? index : id })}>
        <View style={[styles.btn, { backgroundColor: '#00FFFF' }]}>
          <Text style={styles.btnText}>Sửa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if(!netInfo.isConnected){
            ToastAndroid.show('Vui lòng kết nối internet.', ToastAndroid.SHORT);
            return; 
          }
          handleGeneratePDF(id);
        }}>
        <View style={[styles.btn, { backgroundColor: '#FF99FF' }]}>
          <Text style={styles.btnText}>Tải xuống</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { !netInfo.isConnected ? handleDeleteFormLocal(index) : handleDelete(id) }}>
        <View style={[styles.btn, { backgroundColor: '#FF3333' }]}>
          <Text style={styles.btnText}>Xoá</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
          if(!netInfo.isConnected){
            ToastAndroid.show('Vui lòng kết nối internet.', ToastAndroid.SHORT);
            return; 
          }
          handerlePrintPDF(id)
      } }>
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
    !item.date_create?'':moment(item.date_create).format('DD/MM/YYYY HH:mm'),
    !item.date_modified?'':moment(item.date_modified).format('DD/MM/YYYY HH:mm'),
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
          <RefreshControl refreshing={refreshing} onRefresh={()=>fetchdata()} />
        }>
        <Table borderStyle={{ borderWidth: 1 }}>
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

export default Form02adx01Diary;

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
    fontSize: 16,
    fontWeight: '600',
  },
});
