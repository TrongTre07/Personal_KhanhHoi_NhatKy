import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import {styles} from './itemHoatDongChuyenTai/style.js';
import CustomDatePicker from './itemTongCucThuySan/CustomDatePicker.js';
import {
  dateNowFormat,
  convertStringToDate,
} from './itemTongCucThuySan/formatdate.js';
import {UserContext} from '../../../contexts/UserContext.js';
import {FormContext} from '../../../contexts/FormContext.js';

const HoatDongChuyenTaiView = () => {
  const [listForm, setListForm] = React.useState([]);

  const [sumOfWeight, setSumOfWeight] = React.useState(0);
  const {thuMua, setThuMua} = useContext(FormContext);
  const {data} = useContext(UserContext);
  let counter = 1;

  const [textInput, setTextInput] = React.useState([
    {
      ngaythang: dateNowFormat(null),
      tm_ct_bstau: '',
      tm_ct_gpkt: '',
      tm_ct_vt_vido: '',
      tm_ct_vt_kinhdo: '',
      daban_ct_loai: '',
      daban_ct_khoiluong: '',
    },
  ]);

  useEffect(() => {
    if (data.thumua && data.thumua.length > 0) {
      setThuMua({thumua: data.thumua});
      setTextInput(data.thumua);
      let newValue = [];

      data.thumua.forEach((item, index) => {
        newValue.push(<_renderForm key={index} />);
        setListForm(newValue);
      });
      let sum = 0;
      data.thumua.forEach(item => {
        sum += Number(item.daban_ct_khoiluong);
      });
      setSumOfWeight(sum);
    } else {
      setThuMua({
        thumua: [
          {
            ngaythang: dateNowFormat(null),
            tm_ct_bstau: '',
            tm_ct_gpkt: '',
            tm_ct_vt_vido: '',
            tm_ct_vt_kinhdo: '',
            daban_ct_loai: '',
            daban_ct_khoiluong: '',
            tm_ct_thuyentruong: '',
          },
        ],
      });
    }
  }, [data.thumua]);

  React.useEffect(() => {
    if (listForm.length === 0) {
      const newListForm = [...listForm, <_renderForm key={listForm.length} />];
      setListForm(newListForm);
    }
  }, [listForm]);

  const handleDateChange = (index, date) => {
    try {
      const list = [...textInput];
      list[index].ngaythang = dateNowFormat(date, 'date');
      setTextInput(list);

      //handle context
      const updatedThuMua = {...thuMua};
      updatedThuMua.thumua[index].ngaythang = dateNowFormat(date, 'date');
      setThuMua(updatedThuMua);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const _renderForm = index => {
    const printCounter = counter;

    const checkCondition =
      textInput[index]?.isdelete != undefined &&
      textInput[index]?.isdelete == 1;
    if (!checkCondition) {
      counter++;
    }
    return checkCondition
      ? (() => <View></View>)()
      : (() => (
          <View style={styles.form}>
            <View style={[styles.view1, styles.flexRow, {width: '100%'}]}>
              <Text style={[styles.textTotal, styles.flex1]}>
                STT: {printCounter}
              </Text>
              <View style={[styles.flexRow, styles.flex1]}>
                <Text style={styles.textValue}>Ngày, tháng: </Text>
                <Text
                  key={textInput[index].ngaythang}
                  style={[styles.textValue, styles.mr8]}>
                  {convertStringToDate(textInput[index].ngaythang)}
                </Text>
                <CustomDatePicker
                  value={textInput[index].ngaythang} // Convert the string date to a Date object
                  onDateChange={date => handleDateChange(index, date)}
                />
              </View>
            </View>

            <View style={styles.view2}>
              <Text style={styles.title}>Thông tin tàu thu mua/chuyển tải</Text>
              <View style={[styles.flexRow, {width: '100%'}]}>
                <View style={[styles.flex1, styles.mr16]}>
                  <Text style={styles.textValue}>Số đăng ký tàu</Text>
                  <TextInput
                    value={textInput[index].tm_ct_bstau}
                    onChangeText={value =>
                      handleInputChangeSoDangKyTau(index, value)
                    }
                    style={[styles.input]}
                  />
                </View>
                <View style={[styles.flex1, styles.ml16]}>
                  <Text style={styles.textValue}>Số giấy phép khai thác</Text>
                  <TextInput
                    value={textInput[index].tm_ct_gpkt}
                    style={[styles.input]}
                    onChangeText={value =>
                      handleInputChangeSoGiayPhepKhaiThac(index, value)
                    }
                  />
                </View>
              </View>
            </View>

            <View style={styles.view2}>
              <Text style={styles.title}>Vị trí thu mua/chuyển tải</Text>
              <View style={[styles.flexRow, {width: '100%'}]}>
                <View style={[styles.flex1, styles.mr16]}>
                  <Text style={styles.textValue}>Vĩ độ</Text>
                  <TextInput
                    value={textInput[index].tm_ct_vt_vido}
                    style={[styles.input]}
                    keyboardType="numeric"
                    onChangeText={value => handleInputChangeViDo(index, value)}
                  />
                </View>
                <View style={[styles.flex1, styles.ml16]}>
                  <Text style={styles.textValue}>Kinh độ</Text>
                  <TextInput
                    value={textInput[index].tm_ct_vt_kinhdo}
                    style={[styles.input]}
                    keyboardType="numeric"
                    onChangeText={value =>
                      handleInputChangeKinhDo(index, value)
                    }
                  />
                </View>
              </View>
            </View>

            <View style={styles.view2}>
              <Text style={styles.title}>Đã bán/chuyển tải</Text>
              <View style={[styles.flexRow, {width: '100%'}]}>
                <View style={[styles.flex1, styles.mr16]}>
                  <Text style={styles.textValue}>Tên loài thủy sản</Text>
                  <TextInput
                    value={textInput[index].daban_ct_loai}
                    style={[styles.input]}
                    onChangeText={value =>
                      handleInputChangeTenLoaiThuySan(index, value)
                    }
                  />
                </View>
                <View style={[styles.flex1, styles.ml16]}>
                  <Text style={styles.textValue}>Khối lượng (kg)</Text>
                  <TextInput
                    value={textInput[index].daban_ct_khoiluong}
                    inputMode="numeric"
                    style={[styles.input]}
                    onChangeText={value =>
                      handleInputChangeKhoiLuong(index, value)
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        ))();
  };

  const _renderActionView = () => {
    return (
      <View style={styles.action}>
        <TouchableOpacity style={styles.addRow} onPress={handleAddRow}>
          <Text style={styles.rowActionText}>Thêm dòng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteRow} onPress={handleDeleteRow}>
          <Text style={styles.rowActionText}>Xoá dòng</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleAddRow = () => {
    try {
      const newListForm = [...listForm, <_renderForm key={listForm.length} />];
      setListForm(newListForm);

      const newThuMuaObject = {
        ngaythang: dateNowFormat(null),
        tm_ct_bstau: '',
        tm_ct_gpkt: '',
        tm_ct_vt_vido: '',
        tm_ct_vt_kinhdo: '',
        daban_ct_loai: '',
        daban_ct_khoiluong: '',
        tm_ct_thuyentruong: '',
      };

      if (data.thumua == undefined) {
        textInput.push(newThuMuaObject);
        setThuMua(prevState => ({
          ...prevState,
          thumua: [...prevState.thumua, newThuMuaObject],
        }));
      } else {
        const obj = newThuMuaObject;
        // obj.methu = (data.khaithac.length + 1).toString();

        const newTextinput = [...textInput];
        newTextinput.push(obj);
        setTextInput(newTextinput);

        const newThuMua = {...thuMua};
        newThuMua.thumua.push(obj);
        setThuMua(newThuMua);
      }
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleDeleteRow = () => {
    try {
      const newListForm = [...listForm];
      //khong cho xoa neu chi con 1 item
      if (newListForm.length > 1) {
        //kiem tra co phai la form update khong, khac undefined la form update
        if (data.thumua != undefined) {
          //kiem tra la item add trong form update thi xoa luon, khong can chinh isdelete = 1
          if (textInput[textInput.length - 1].isdelete == undefined) {
            const updatedThuMua = JSON.parse(JSON.stringify(thuMua.thumua));
            updatedThuMua.pop();
            setThuMua({
              ...thuMua,
              thumua: updatedThuMua,
            });
            const newInput = [...textInput];
            newInput.pop();
            setTextInput(newInput);

            newListForm.pop();
            setListForm(newListForm);

            let sum = 0;
            updatedThuMua.forEach(item => {
              sum += Number(item.daban_ct_khoiluong);
            });
            setSumOfWeight(sum);
          } else {
            //else nay la chinh status isdelete == 1
            let updatedThuMua = JSON.parse(JSON.stringify(thuMua.thumua));
            //gioi han item cuoi cung ko dc xoa
            for (let i = 0; i < updatedThuMua.length - 1; i++) {
              if (updatedThuMua[updatedThuMua.length - (i + 1)].isdelete == 0) {
                updatedThuMua[updatedThuMua.length - (i + 1)].isdelete = 1;
                break;
              }
            }
            setThuMua({
              ...thuMua,
              thumua: updatedThuMua,
            });
            setTextInput(updatedThuMua);

            let sum = 0;
            updatedThuMua.forEach(item => {
              if (item.isdelete == 0) sum += Number(item.daban_ct_khoiluong);
            });
            setSumOfWeight(sum);
          }
        } else {
          const updatedThuMua = JSON.parse(JSON.stringify(thuMua.thumua));
          updatedThuMua.pop();
          setThuMua({
            ...thuMua,
            thumua: updatedThuMua,
          });
          const newInput = [...textInput];
          newInput.pop();
          setTextInput(newInput);

          newListForm.pop();
          setListForm(newListForm);

          let sum = 0;
          updatedThuMua.forEach(item => {
            sum += Number(item.daban_ct_khoiluong);
          });
          setSumOfWeight(sum);
        }
      }
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeSoDangKyTau = (index, value) => {
    try {
      const list = [...textInput];
      list[index].tm_ct_bstau = value;
      setTextInput(list);

      //handle context

      const updatedThuMua = {...thuMua};
      updatedThuMua.thumua[index].tm_ct_bstau = value;
      setThuMua(updatedThuMua);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeSoGiayPhepKhaiThac = (index, value) => {
    try {
      const list = [...textInput];
      list[index].tm_ct_gpkt = value;
      setTextInput(list);

      //handle context

      const updatedThuMua = {...thuMua};
      updatedThuMua.thumua[index].tm_ct_gpkt = value;
      setThuMua(updatedThuMua);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeViDo = (index, value) => {
    try {
      const list = [...textInput];
      list[index].tm_ct_vt_vido = value;
      setTextInput(list);

      //handle context

      const updatedThuMua = {...thuMua};
      updatedThuMua.thumua[index].tm_ct_vt_vido = value;
      setThuMua(updatedThuMua);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeKinhDo = (index, value) => {
    try {
      const list = [...textInput];
      list[index].tm_ct_vt_kinhdo = value;
      setTextInput(list);

      //handle context
      const updatedThuMua = {...thuMua};
      updatedThuMua.thumua[index].tm_ct_vt_kinhdo = value;
      setThuMua(updatedThuMua);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeTenLoaiThuySan = (index, value) => {
    try {
      const list = [...textInput];
      list[index].daban_ct_loai = value;
      setTextInput(list);

      //handle context
      const updatedThuMua = {...thuMua};
      updatedThuMua.thumua[index].daban_ct_loai = value;
      setThuMua(updatedThuMua);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeKhoiLuong = (index, value) => {
    try {
      const list = [...textInput];
      list[index].daban_ct_khoiluong = value;
      setTextInput(list);

      let sum = 0;
      list.forEach(item => {
        if (item.isdelete == undefined || item.isdelete == 0) {
          if(item.daban_ct_khoiluong == '' || item.daban_ct_khoiluong == undefined){
            sum+=0
          }
        sum += Number(item.daban_ct_khoiluong);
        }
      });
      setSumOfWeight(sum);

      //handle context
      const updatedThuMua = {...thuMua};
      updatedThuMua.thumua[index].daban_ct_khoiluong = value;
      setThuMua(updatedThuMua);
    } catch (error) {
      console.log('ERROR ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={[styles.title, {marginTop: 24}]}>
          II. THÔNG TIN VỀ HOẠT ĐỘNG CHUYỂN TẢI (nếu có)
        </Text>

        {/* form */}
        {listForm.map((_form, index) => (
          <View key={index}>{_renderForm(index)}</View>
        ))}

        {/* sum of weight */}
        <Text style={[styles.title, {marginTop: 16}]}>
          Tổng khối lượng: {sumOfWeight} kg
        </Text>
        {/* action */}
        {_renderActionView()}
      </ScrollView>
    </View>
  );
};

export default HoatDongChuyenTaiView;