import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {styles} from './itemHoatDongChuyenTai/style.js';
import CustomDatePicker from './itemTongCucThuySan/CustomDatePicker.js';
const HoatDongChuyenTaiView = ({textInput, setTextInput}) => {
  const [listForm, setListForm] = React.useState([]);

  const dateNow = new Date();

  const dateNowFormat =
    dateNow.getDate() +
    '/' +
    (dateNow.getMonth() + 1) +
    '/' +
    dateNow.getFullYear();

  const [sumOfWeight, setSumOfWeight] = React.useState(0);

  // date picker
  const [dateFormat, setDateFormat] = React.useState([dateNowFormat]);

  React.useEffect(() => {
    if (listForm.length === 0) {
      const newListForm = [...listForm, <_renderForm key={listForm.length} />];
      setListForm(newListForm);
    }
  }, [listForm]);


  const _renderForm = () => {
    return (
      <View style={styles.form}>
        <View style={[styles.view1, styles.flexRow, {width: '100%'}]}>
          <Text style={[styles.textValue, styles.flex1]}>
            STT: {listForm.length + 1}
          </Text>
          <View style={[styles.flexRow, styles.flex1]}>
            <Text style={styles.textValue}>Ngày, tháng: </Text>
            <Text key={textInput[listForm.length].date} style={[styles.textValue, styles.mr8]}>
              {textInput[listForm.length].date}
            </Text>
            <CustomDatePicker value={textInput[listForm.length].date} onDateChange={(date) => {
              const list = [...textInput];
              list[listForm.length].date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
              setTextInput(list);
            }} />
          </View>
        </View>

        <View style={styles.view2}>
          <Text style={styles.title}>Thông tin tàu thu mua/chuyển tải</Text>
          <View style={[styles.flexRow, {width: '100%'}]}>
            <View style={[styles.flex1, styles.mr16]}>
              <Text style={styles.textValue}>Số đăng ký tàu</Text>
              <TextInput
                onChangeText={value =>
                  handleInputChangeSoDangKyTau(listForm.length, value)
                }
                style={[styles.input]}
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Số giấy phép khai thác</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeSoGiayPhepKhaiThac(listForm.length, value)
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
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeViDo(listForm.length, value)
                }
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Kinh độ</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeKinhDo(listForm.length, value)
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
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeTenLoaiThuySan(listForm.length, value)
                }
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Khối lượng (kg)</Text>
              <TextInput
                inputMode="numeric"
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeKhoiLuong(listForm.length, value)
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
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
    const newListForm = [...listForm, <_renderForm key={listForm.length} />];
    setListForm(newListForm);
    textInput.push({
      date: dateNowFormat,
      shipRegisterNumber: '',
      miningLicenseNumbewr: '',
      latitude: '',
      longitude: '',
      speciesName: '',
      weight: 0,
    });
    setTextInput(textInput);
    console.log(textInput);

    // setDateFormat([...dateFormat, dateNowFormat]);
  };

  const handleDeleteRow = () => {
    const newListForm = [...listForm];
    if (newListForm.length > 1) {
      newListForm.pop();
      setListForm(newListForm);
      textInput.pop();
      setTextInput(textInput);
    }
  };

  const handleInputChangeSoDangKyTau = (index, value) => {
    const list = [...textInput];
    list[index].shipRegisterNumber = value;
    setTextInput(list);
  };

  const handleInputChangeSoGiayPhepKhaiThac = (index, value) => {
    const list = [...textInput];
    list[index].miningLicenseNumbewr = value;
    setTextInput(list);
  };

  const handleInputChangeViDo = (index, value) => {
    const list = [...textInput];
    list[index].latitude = value;
    setTextInput(list);
  };

  const handleInputChangeKinhDo = (index, value) => {
    const list = [...textInput];
    list[index].longitude = value;
    setTextInput(list);
  };

  const handleInputChangeTenLoaiThuySan = (index, value) => {
    const list = [...textInput];
    list[index].speciesName = value;
    setTextInput(list);
  };

  const handleInputChangeKhoiLuong = (index, value) => {
    const list = [...textInput];
    list[index].weight = value;
    setTextInput(list);

    let sum = 0;
    list.forEach(item => {
      sum += Number(item.weight);
    });
    setSumOfWeight(sum);
  };

  const getDateNow = index => {
    const date = textInput[index].date;
    return (
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={[styles.title, {marginTop: 24}]}>
          II. THÔNG TIN VỀ HOẠT ĐỘNG CHUYỂN TẢI (nếu có)
        </Text>

        {/* form */}
        {listForm.map(form => form)}

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
