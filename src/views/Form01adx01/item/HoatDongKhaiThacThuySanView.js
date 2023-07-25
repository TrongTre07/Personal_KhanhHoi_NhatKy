import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {FormContext} from '../../../contexts/FormContext';

import DatePicker from 'react-native-date-picker';
import {styles} from './itemHoatDongKhaiThacThuySan/styles';
import CustomDatePicker from './itemHoatDongKhaiThacThuySan/Timepicker';

const HoatDongKhaiThacThuySanView = () => {
  const {khaiThac, setKhaiThac} = useContext(FormContext);
  const [listForm, setListForm] = React.useState([]);
  const [valueCheckNumber, setValueCheckNumber] = useState('0');

  const dateNow = new Date();

  const dateNowFormat = newDate => {
    if (newDate === null) {
      const day = dateNow.getDate().toString().padStart(2, '0');
      const month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
      const year = dateNow.getFullYear();
      const hours = dateNow.getHours().toString().padStart(2, '0');
      const minutes = dateNow.getMinutes().toString().padStart(2, '0');
      return `${day}/${month}/${year}, ${hours}:${minutes}`;
    } else {
      const day = newDate.getDate().toString().padStart(2, '0');
      const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
      const year = newDate.getFullYear();
      const hours = newDate.getHours().toString().padStart(2, '0');
      const minutes = newDate.getMinutes().toString().padStart(2, '0');
      return `${day}/${month}/${year}, ${hours}:${minutes}`;
    }
  };

  const [textInput, setTextInput] = React.useState([
    {
      timeTha: dateNowFormat(null),
      viDoTha: '',
      kinhDoTha: '',
      timeThu: dateNowFormat(null),
      viDoThu: '',
      kinhDoThu: '',
    },
  ]);

  const [loaiCa, setLoaiCa] = useState([
    {id: '0', name: '', soLuong: ['0']},
    {id: '1', name: '', soLuong: ['0']},
    {id: '2', name: '', soLuong: ['0']},
    {id: '3', name: '', soLuong: ['0']},
    {id: '4', name: '', soLuong: ['0']},
    {id: '5', name: '', soLuong: ['0']},
    {id: '6', name: '', soLuong: ['0']},
    {id: '7', name: '', soLuong: ['0']},
    {id: '8', name: '', soLuong: ['0']},
  ]);

  React.useEffect(() => {
    if (listForm.length === 0) {
      const newListForm = [...listForm, <_renderForm key={listForm.length} />];
      setListForm(newListForm);
    }
  }, [listForm]);

  const _renderInputSpeciesName = () => {
    const input = [];

    for (let i = 0; i < 10; i++) {
      const isEditable = i == 0;
      input.push(
        <View key={i} style={[styles.flex1, styles.mr16]}>
          <TextInput
            placeholder="Loài"
            editable={!isEditable}
            style={[styles.input]}
            // i: index ten loai ca range: 1-9
            onChangeText={value => handleInputChangeTenLoaiThuySan(i, value)}
          />
        </View>,
      );
    }
    return input;
  };

  const calculateSumOfEachIndex = () => {
    const totalSumByIndex = Array.from(
      {length: loaiCa[0].soLuong.length},
      () => 0,
    );

    loaiCa.forEach(item => {
      item.soLuong.forEach((val, i) => {
        totalSumByIndex[i] += parseInt(val);
      });
    });

    return totalSumByIndex.map((sum, index) => (
      <View
        key={index}
        style={[
          styles.box,
          index % 2 === 0 ? {backgroundColor: '#9dc5c3'} : null,
        ]}>
        <Text style={styles.textTotal}>{`Mẻ ${index + 1}: ${sum} Kg`}</Text>
      </View>
    ));
  };

  const calculateSumOfSoLuongForEachObject = () => {
    return loaiCa.map(item => {
      const sum = item.soLuong.reduce((acc, val) => acc + parseInt(val), 0);
      return (
        <View
          key={item.id}
          style={[
            styles.box,
            item.id % 2 === 0 ? {backgroundColor: '#9dc5c3'} : null,
          ]}>
          <Text style={styles.textTotal}>{`${item.name}: ${sum} Kg`}</Text>
        </View>
      );
    });
  };

  const _renderInputSpecies = index => {
    const inputs = [];

    for (let i = 0; i < 10; i++) {
      const isEditable = i == 0;

      placeholder = `Mẻ ${index + 1}`;

      inputs.push(
        <View key={i} style={[styles.flex1, styles.mr16]}>
          <TextInput
            placeholder={isEditable ? placeholder : 'Kg'}
            keyboardType="numeric"
            style={[styles.input]}
            editable={!isEditable}
            // value={isEditable ? placeholder : valueCheckNumber}
            // i: 1-9
            onChangeText={value => {
              handleInputChangeKhoiLuong(index, i, value);
            }}
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
          {_renderInputSpecies(i)}
        </View>,
      );
    }
    return inputs;
  };

  const _renderForm = index => {
    return (
      <View style={styles.form}>
        <View style={[styles.view1, styles.flexRow, {width: '100%'}]}>
          <Text style={[styles.textValue, styles.flex1, {fontWeight: 'bold'}]}>
            Mẻ thứ: {listForm.length}
          </Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.title}>Thời điểm thả và vị trí thả (KĐ/VĐ) </Text>
          <View style={[styles.flexRow, styles.flex1]}>
            <Text style={styles.textValue}>Ngày, tháng: </Text>
            <Text style={[styles.textValue, styles.mr8]}>
              {textInput[index].timeTha}
            </Text>
            <CustomDatePicker
              value={textInput[index].timeTha}
              onDateChange={newDate => {
                const newInput = [...textInput];
                newInput[index].timeTha = dateNowFormat(newDate);
                setTextInput(newInput);

                //set data context time
                const updatedKhaiThac = {...khaiThac};
                updatedKhaiThac.khaithac[index].thoidiem_tha =
                  dateNowFormat(newDate);
                setKhaiThac(updatedKhaiThac);
              }}
            />
          </View>
          <View style={[styles.flexRow, {width: '100%'}]}>
            <View style={[styles.flex1, styles.mr16]}>
              <Text style={styles.textValue}>Vĩ Độ</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={value => handleInputChangeViDoTha(index, value)}
                style={[styles.input]}
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Kinh độ</Text>
              <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                onChangeText={value => handleInputChangeKinhDoTha(index, value)}
              />
            </View>
          </View>
        </View>

        <View style={styles.view2}>
          <Text style={styles.title}>Thời điểm thu và vị trí thu (KĐ/VĐ) </Text>
          <View style={[styles.flexRow, styles.flex1]}>
            <Text style={styles.textValue}>Ngày, tháng: </Text>
            <Text style={[styles.textValue, styles.mr8]}>
              {textInput[index].timeThu}
            </Text>
            <CustomDatePicker
              value={textInput[index].timeThu}
              onDateChange={newDate => {
                const newInput = [...textInput];
                newInput[index].timeThu = dateNowFormat(newDate);
                setTextInput(newInput);

                //set data context kinh do

                const updatedKhaiThac = {...khaiThac};
                updatedKhaiThac.khaithac[index].thoidiem_thu =
                  dateNowFormat(newDate);
                setKhaiThac(updatedKhaiThac);
              }}
            />
          </View>
          <View style={[styles.flexRow, {width: '100%'}]}>
            <View style={[styles.flex1, styles.mr16]}>
              <Text style={styles.textValue}>Vĩ Độ</Text>
              <TextInput
                onChangeText={value => handleInputChangeViDoThu(index, value)}
                keyboardType="numeric"
                style={[styles.input]}
              />
            </View>
            <View style={[styles.flex1, styles.ml16]}>
              <Text style={styles.textValue}>Kinh độ</Text>
              <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                onChangeText={value => handleInputChangeKinhDoThu(index, value)}
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
      timeTha: dateNowFormat(null),
      viDoTha: '',
      kinhDoTha: '',
      timeThu: dateNowFormat(null),
      viDoTha: '',
      kinhDoThu: '',
    });

    // Form Context
    const newKhaithacObject = {
      methu: listForm.length,
      thoidiem_tha: dateNowFormat(null),
      vido_tha: '',
      kinhdo_tha: '',
      thoidiem_thu: dateNowFormat(null),
      vido_thu: '',
      kinhdo_thu: '',
      loai_1: khaiThac.khaithac[0].loai_1,
      loai_2: khaiThac.khaithac[0].loai_2,
      loai_3: khaiThac.khaithac[0].loai_3,
      loai_4: khaiThac.khaithac[0].loai_4,
      loai_5: khaiThac.khaithac[0].loai_5,
      loai_6: khaiThac.khaithac[0].loai_6,
      loai_7: khaiThac.khaithac[0].loai_7,
      loai_8: khaiThac.khaithac[0].loai_8,
      loai_9: khaiThac.khaithac[0].loai_9,
      loai_1_kl: '',
      loai_2_kl: '',
      loai_3_kl: '',
      loai_4_kl: '',
      loai_5_kl: '',
      loai_6_kl: '',
      loai_7_kl: '',
      loai_8_kl: '',
      loai_9_kl: '',
      tongsanluong: '',
    };

    setKhaiThac(prevState => ({
      ...prevState,
      khaithac: [...prevState.khaithac, newKhaithacObject],
    }));

    const newArray = loaiCa.map(item => ({
      ...item,
      soLuong: [...item.soLuong, '0'],
    }));

    setLoaiCa(newArray);

    setTextInput(textInput);
  };

  const handleDeleteRow = () => {
    const newListForm = [...listForm];
    if (newListForm.length > 1) {
      newListForm.pop();
      setListForm(newListForm);
      textInput.pop();
      setTextInput(textInput);

      //delete last value of [loaiCa]
      const updatedLoaiCa = loaiCa.map(item => {
        const updatedSoLuong = item.soLuong.slice(0, -1); // Slice removes the last element
        return {...item, soLuong: updatedSoLuong};
      });
      setLoaiCa(updatedLoaiCa);

      //Delete row at context
      const updatedKhaithac = [...khaiThac.khaithac];
      updatedKhaithac.pop();

      // Update the state with the new array
      setKhaiThac(prevState => ({
        ...prevState,
        khaithac: updatedKhaithac,
      }));
    }
  };

  const handleInputChangeViDoTha = (index, value) => {
    const list = [...textInput];
    list[index].viDoTha = value;
    setTextInput(list);

    //set data context vi do

    const updatedKhaiThac = {...khaiThac};
    updatedKhaiThac.khaithac[index].vido_tha = value;
    setKhaiThac(updatedKhaiThac);
  };

  const handleInputChangeKinhDoTha = (index, value) => {
    const list = [...textInput];
    list[index].kinhDoTha = value;
    setTextInput(list);

    //set data context kinh do

    const updatedKhaiThac = {...khaiThac};
    updatedKhaiThac.khaithac[index].kinhdo_tha = value;
    setKhaiThac(updatedKhaiThac);
  };
  const handleInputChangeViDoThu = (index, value) => {
    const list = [...textInput];
    list[index].viDoThu = value;
    setTextInput(list);

    //set data context kinh do

    const updatedKhaiThac = {...khaiThac};
    updatedKhaiThac.khaithac[index].vido_thu = value;
    setKhaiThac(updatedKhaiThac);
  };

  const handleInputChangeKinhDoThu = (index, value) => {
    const list = [...textInput];
    list[index].kinhDoThu = value;
    setTextInput(list);

    //set data context kinh do

    const updatedKhaiThac = {...khaiThac};
    updatedKhaiThac.khaithac[index].kinhdo_thu = value;
    setKhaiThac(updatedKhaiThac);
  };

  const handleInputChangeTenLoaiThuySan = (index, value) => {
    const list = [...loaiCa];
    let existingItemIndex = list.findIndex(item => item.id == index);
    if (index == 9) {
      existingItemIndex = 9;
    }
    if (existingItemIndex !== -1) {
      list[existingItemIndex - 1].name = value;

      //set data context ten ca

      const updatedKhaiThac = {...khaiThac};
      updatedKhaiThac.khaithac.forEach(item => {
        const loaica = `loai_${existingItemIndex}`;
        item[loaica] = value; // Use square brackets to set the property
      });
      setKhaiThac(updatedKhaiThac);
    }
    setLoaiCa(list);
  };

  const handleInputChangeKhoiLuong = (indexRow, indexSpecies, value) => {
    if (isNaN(value)) {
      Alert.alert('Lỗi', 'Bạn phải nhập số.', [{text: 'OK'}]);
      return;
    } else if (value == '') {
      value = '0';
    }

    const list = [...loaiCa];
    let existingItemIndex = list.findIndex(item => item.id == indexSpecies);
    if (indexSpecies == 9) {
      existingItemIndex = 9;
    }
    if (existingItemIndex !== -1) {
      list[existingItemIndex - 1].soLuong[indexRow] = value;

      let sum = 0;
      list.forEach(item => {
        const numVal = parseFloat(item.soLuong[indexRow]);
        if (!isNaN(numVal)) {
          sum += numVal;
        }
      });

      //set data context so luong

      const updatedKhaiThac = {...khaiThac};
      updatedKhaiThac.khaithac[indexRow][`loai_${existingItemIndex}_kl`] =
        value;
      updatedKhaiThac.khaithac[indexRow].tongsanluong = sum;

      setKhaiThac(updatedKhaiThac);
      console.log(updatedKhaiThac);
    }
    setLoaiCa(list);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={[styles.title, {marginTop: 24}]}>
          I. THÔNG TIN VỀ HOẠT ĐỘNG KHAI THÁC THỦY SẢN
        </Text>

        {listForm.map((item, index) => (
          <React.Fragment key={index}>{_renderForm(index)}</React.Fragment>
        ))}
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

          <View style={{paddingTop: 20}}>
            <FlatList
              data={calculateSumOfSoLuongForEachObject()}
              renderItem={({item}) => item}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              style={{paddingBottom: 10}}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />

            <FlatList
              data={calculateSumOfEachIndex()}
              renderItem={({item}) => item}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              style={{paddingBottom: 10}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HoatDongKhaiThacThuySanView;
