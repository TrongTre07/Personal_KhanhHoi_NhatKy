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
import {styles} from './itemHoatDongKhaiThacThuySan/styles';

const HoatDongKhaiThacThuySanView = () => {
  const [listForm, setListForm] = React.useState([]);
  const [tableNet, setTableNet] = useState([]);
  const [textInput, setTextInput] = React.useState([
    {
      shipRegisterNumber: '',
      miningLicenseNumbewr: '',
      latitude: '',
      longitude: '',
      speciesName: '',
      weight: '',
    },
  ]);

  // date picker
  const [dateTha, setDateTha] = React.useState(new Date());
  const [dateThu, setDateThu] = React.useState(new Date());

  const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // You can format the date and time as needed, e.g., 'dd/MM/yyyy HH:mm'
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return formattedDate;
  };

  const dateNowFormat = (date) => formatDate(date);

  const [openTha, setOpenTha] = React.useState(false);
  const [openThu, setOpenThu] = React.useState(false);

  React.useEffect(() => {
    if (listForm.length === 0) {
      const newListForm = [...listForm, <_renderForm key={listForm.length} />];
      setListForm(newListForm);
    }
  }, [listForm]);

  React.useEffect(() => {
    console.log('textInput', textInput);
  }, [textInput]);

  const _renderTotal = () => {
    const input = [];

    for (let i = 0; i < 9; i++) {
      const isEditable = i == 0;
      input.push(
        <View key={i} style={[styles.flex1, styles.mr16]}>
          <TextInput
            placeholder="Tổng"
            editable={false}
            style={[styles.input]}
            onChangeText={value =>
              handleInputChangeTenLoaiThuySan(listForm.length, value)
            }
          />
        </View>,
      );
    }
    return input;
  };
  const _renderInputSpeciesName = () => {
    const input = [];

    for (let i = 0; i < 9; i++) {
      const isEditable = i == 0;
      input.push(
        <View key={i} style={[styles.flex1, styles.mr16]}>
          <TextInput
            placeholder="Loài"
            editable={!isEditable}
            style={[styles.input]}
            onChangeText={value =>
              handleInputChangeTenLoaiThuySan(listForm.length, value)
            }
          />
        </View>,
      );
    }
    return input;
  };

  const _renderInputSpecies = index => {
    const inputs = [];

    for (let i = 0; i < 9; i++) {
      const isEditable = i == 0;
      const placeholderName = `Mẻ ${index}`;
      inputs.push(
        <View key={i} style={[styles.flex1, styles.mr16]}>
          <TextInput
            placeholder={isEditable ? placeholderName : 'Kg'}
            keyboardType="numeric"
            style={[styles.input]}
            editable={!isEditable}
            onChangeText={value =>
              handleInputChangeTenLoaiThuySan(listForm.length, value)
            }
          />
        </View>,
      );
    }
    return inputs;
  };

  const _renderTableNet = () => {
    const inputs = [];

    for (let i = 0; i < listForm.length; i++) {
      inputs.push(
        <View key={i} style={{flexDirection: 'row'}}>
          {_renderInputSpecies(i + 1)}
        </View>,
      );
    }
    return inputs;
  };

  const _renderForm = () => {
    return (
      <View style={styles.form}>
        <View style={[styles.view1, styles.flexRow, {width: '100%'}]}>
          <Text style={[styles.textValue, styles.flex1, {fontWeight: 'bold'}]}>
            Mẻ thứ: {listForm.length + 1}
          </Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.title}>Thời điểm thả và vị trí thả (KĐ/VĐ) </Text>
          <View style={[styles.flexRow, styles.flex1]}>
            <Text style={styles.textValue}>Ngày, tháng: </Text>
            <Text style={styles.textValue}>{dateNowFormat(dateTha)}</Text>
            <TouchableOpacity
              style={[styles.ml8, styles.mr8]}
              onPress={() => {
                setOpenTha(true);
              }}>
              <Image
                width={24}
                height={24}
                source={require('../assets/images/calendar.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.flexRow, {width: '100%'}]}>
            <View style={[styles.flex1, styles.mr16]}>
              <Text style={styles.textValue}>Vĩ Độ</Text>
              <TextInput
                onChangeText={value =>
                  handleInputChangeSoDangKyTau(listForm.length, value)
                }
                style={[styles.input]}
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Kinh độ</Text>
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
          <Text style={styles.title}>Thời điểm thu và vị trí thu (KĐ/VĐ) </Text>
          <View style={[styles.flexRow, styles.flex1]}>
            <Text style={styles.textValue}>Ngày, tháng: </Text>
            <Text style={styles.textValue}>{dateNowFormat(dateThu)}</Text>
            <TouchableOpacity
              style={[styles.ml8, styles.mr8]}
              onPress={() => {
                setOpenThu(true);
              }}>
              <Image
                width={24}
                height={24}
                source={require('../assets/images/calendar.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.flexRow, {width: '100%'}]}>
            <View style={[styles.flex1, styles.mr16]}>
              <Text style={styles.textValue}>Vĩ Độ</Text>
              <TextInput
                onChangeText={value =>
                  handleInputChangeSoDangKyTau(listForm.length, value)
                }
                style={[styles.input]}
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Kinh độ</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={value =>
                  handleInputChangeSoGiayPhepKhaiThac(listForm.length, value)
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
      shipRegisterNumber: '',
      miningLicenseNumbewr: '',
      latitude: '',
      longitude: '',
      speciesName: '',
      weight: 0,
    });
    setTextInput(textInput);
  };

  const handleDeleteRow = () => {
    setListForm(listForm.pop());
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
    // const list = [...textInput];
    // list[index].speciesName = value;
    // setTextInput(list);
  };

  const handleInputChangeKhoiLuong = (index, value) => {
    const list = [...textInput];
    list[index].weight = value;
    setTextInput(list);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={[styles.title, {marginTop: 24}]}>
          I. THÔNG TIN VỀ HOẠT ĐỘNG KHAI THÁC THỦY SẢN
        </Text>

        {listForm.map(form => form)}
        {_renderActionView()}

        {/* Table Net */}
        <View style={styles.view2}>
          <Text style={styles.title}>
            Sản lượng các loài thủy sản chủ yếu (Kg)
          </Text>
          <View style={{flexDirection: 'row'}}>
            {_renderInputSpeciesName()}
          </View>
          {_renderTableNet()}
          <View style={{flexDirection: 'row'}}>{_renderTotal()}</View>

          {/* <View style={[styles.flexRowSpecies, {width: '100%'}]}>
            <View style={{flexDirection: 'row'}}>
              {_renderInputSpeciesName()}
            </View>
            <View style={{flexDirection: 'row'}}>{_renderInputSpecies()}</View>
          </View> */}

          {/* <Text>Tổng mẻ thứ {listForm.length + 1}: </Text> */}
        </View>
      </ScrollView>
      <DatePicker
        modal
        mode="datetime"
        locale="en"
        open={openTha}
        date={dateTha}
        onConfirm={date => {
          setOpenTha(false);
          setDateTha(date);
        }}
        onCancel={() => {
          setOpenTha(false);
        }}
      />
      <DatePicker
        modal
        mode="datetime"
        locale="en"
        open={openThu}
        date={dateThu}
        onConfirm={date => {
          setOpenThu(false);
          setDateThu(date);
        }}
        onCancel={() => {
          setOpenThu(false);
        }}
      />
    </View>
  );
};

export default HoatDongKhaiThacThuySanView;
