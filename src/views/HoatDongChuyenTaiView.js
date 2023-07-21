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
const HoatDongChuyenTaiView = () => {
  
  const [count, setCount] = useState(0);

  const [listForm, setListForm] = React.useState([]);

  const [soDangKyTau, setSoDangKyTau] = React.useState([]);
  const [soGiayPhepKhaiThac, setSoGiayPhepKhaiThac] = React.useState([]);
  const [viDo, setViDo] = React.useState([]);
  const [kinhDo, setKinhDo] = React.useState([]);
  const [tenLoaiThuySan, setTenLoaiThuySan] = React.useState([]);
  const [khoiLuong, setKhoiLuong] = React.useState([]);

  // date picker
  const [date, setDate] = React.useState(new Date());

  const dateNowFormat = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (listForm.length === 0) {
      handleAddRow();
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
            <Text style={styles.textValue}>{dateNowFormat}</Text>
            <TouchableOpacity
              style={[styles.ml8, styles.mr8]}
              onPress={() => {
                setOpen(true);
              }}>
              <Image
                width={24}
                height={24}
                source={require('../assets/images/calendar.png')}
              />
            </TouchableOpacity>
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
                value={soDangKyTau[listForm.length]}
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
                value={soGiayPhepKhaiThac[listForm.length]}
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
                value={viDo[listForm.length]}
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Kinh độ</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeKinhDo(listForm.length, value)
                }
                value={kinhDo[listForm.length]}
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
                value={tenLoaiThuySan[listForm.length]}
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Khối lượng (kg)</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeKhoiLuong(listForm.length, value)
                }
                value={khoiLuong[listForm.length]}
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

        <TouchableOpacity style={styles.deleteRow}>
          <Text style={styles.rowActionText}>Xoá dòng</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleAddRow = () => {
    const newListForm = [...listForm, <_renderForm key={listForm.length} />];
    setListForm(newListForm);
    setSoDangKyTau([...soDangKyTau, '']);
    setSoGiayPhepKhaiThac([...soGiayPhepKhaiThac, '']);
    setViDo([...viDo, '']);
    setKinhDo([...kinhDo, '']);
    setTenLoaiThuySan([...tenLoaiThuySan, '']);
    setKhoiLuong([...khoiLuong, 0]);
  };

  const handleInputChangeSoDangKyTau = (index, value) => {
    const list = [...soDangKyTau];
    list[index] = value;
    setSoDangKyTau(list);
  };

  const handleInputChangeSoGiayPhepKhaiThac = (index, value) => {
    const list = [...soGiayPhepKhaiThac];
    list[index] = value;
    setSoGiayPhepKhaiThac(list);
  };

  const handleInputChangeViDo = (index, value) => {
    const list = [...viDo];
    list[index] = value;
    setViDo(list);
  };

  const handleInputChangeKinhDo = (index, value) => {
    const list = [...kinhDo];
    list[index] = value;
    setKinhDo(list);
  };

  const handleInputChangeTenLoaiThuySan = (index, value) => {
    const list = [...tenLoaiThuySan];
    list[index] = value;
    setTenLoaiThuySan(list);
  };

  const handleInputChangeKhoiLuong = (index, value) => {
    const list = [...soDangKyTau];
    list[index] = value;
    setKhoiLuong(list);
  };

  return (
    <View style={{flex: 1, backgroundColor:'#fff'}}>
      <ScrollView>
        <Text style={[styles.title, {marginTop: 24}]}>
          II. THÔNG TIN VỀ HOẠT ĐỘNG CHUYỂN TẢI (nếu có)
        </Text>

        {listForm.map(form => form)}
        {_renderActionView()}
      </ScrollView>
      <DatePicker
        modal
        mode="date"
        locale="en"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default HoatDongChuyenTaiView;

