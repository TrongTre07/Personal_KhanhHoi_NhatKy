import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState,useCallback } from 'react'
import { UserContext } from '../../contexts/UserContext';
import {ExportPDF} from '../ExportPDF';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DocumentPicker, { types } from 'react-native-document-picker';
import FileViewer from "react-native-file-viewer";
import { StatusBar } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Storage from '../../utils/storage';

const Form01adx01Diary = ({navigation}) => {


  const [dataDiary, setDataDiary] = useState([]);
  
  // console.log('-------------------------------------------', data);
  // console.log('dataInfShip',dataInfShip);

  const {getDiaryForm, deleteFormId, dataInfShip,getDetailFormId, data} = useContext(UserContext);

  const netInfo = useNetInfo();
  const {postForm} = React.useContext(UserContext);

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
      const data = JSON.parse(form);
      console.log(data[0]);
      // check response true thi xoa form
      const result = await postForm(data[0]);
      console.log(result)
      if (result) {
        await Storage.removeItem('form01adx01');
      }
    }
  };

  const fetchdata = async () => {
    setDataDiary(await getDiaryForm());
   }
  useEffect( ()=>{
    fetchdata();
  },[])

  //tranh goi ham nhieu lan khi o ben ngoai
  const [template, setTemplate] = useState(false);
  const handleGeneratePDF = (id) => {
     getDetailFormId(id);
     setTemplate(true);
  }; 

  useEffect(() => {
    if(data&&template){
      ExportPDF(data); 
     setTemplate(false);

    }
  }, [data,setTemplate]);

  // const handerleViewPDF = (number) => {
  //   getDetailFormId(number);
  //   const id = data.dairy_name;
  //   navigation.navigate('ViewPDF',{id : id});
  // };

   const handleDelete = (id) => {
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
            console.log('iiiiiiiiiiiiiiiiiiiiii', id);
            await deleteFormId(id);
            fetchdata();
          },
        },
      ],
      {cancelable: false},
    );
  };
  const handleDocumentSelection = useCallback(async () => {

    try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        await FileViewer.open(res[0].uri);
      } catch (e) {
        console.log('error', e);
      }
}, []);

  const elementButton = (id) => (
    <View style={styles.boxbtn}>
      <TouchableOpacity onPress={()=>{ navigation.navigate('ViewPDF',{id : id,data: dataDiary});}}>
      <View style={[styles.btn,{backgroundColor:'#99FF33'}]}>
          <Text style={styles.btnText}>Xem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => navigation.navigate('form01adx01',{id:id})}
      >
        <View style={[styles.btn,{backgroundColor:'#00FFFF'}]}>
          <Text style={styles.btnText}>Sửa</Text>
        </View>
      </TouchableOpacity>      
      <TouchableOpacity  onPress={() => { handleGeneratePDF(id)}}>
        <View style={[styles.btn,{backgroundColor:'#FF99FF'}]}>
          <Text style={styles.btnText}>Tải xuống</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <View style={[styles.btn, {backgroundColor: '#FF3333'}]}>
          <Text style={styles.btnText}>Xoá</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
//data
    const selectedData = dataDiary?.map((item,index) => ([
      index,
      item.dairy_name,
      item.tau_bs,
      item.ten_thuyentruong,
      item.chuyenbien_so,
      item.date_create,
      item.date_create,elementButton(item.id) ]));


  //colum
  let state = {
    tableHead: ['STT', 'Tên', 'Số tàu', 'Thuyền trưởng', 'Chuyển biển số', 'Ngày tạo', 'Sửa đổi lần cuối', 'Thao tác'],
    tableColum: selectedData

  }
  

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
  row: {},
  text: {
    textAlign: 'center',
    padding: 3,
    fontSize: 13,
    color: '#000',
  },
  textHead: {
    textAlign: 'center',
    padding: 3,
    fontSize: 16,
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
