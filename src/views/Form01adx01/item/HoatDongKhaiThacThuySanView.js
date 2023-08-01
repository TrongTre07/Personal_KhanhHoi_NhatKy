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
  ToastAndroid
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {FormContext} from '../../../contexts/FormContext';

import DatePicker from 'react-native-date-picker';
import {styles} from './itemHoatDongKhaiThacThuySan/styles';
import CustomDatePicker from './itemHoatDongKhaiThacThuySan/Timepicker';
import {
  dateNowFormat,
  convertStringToDate,
  convertStringToDateHour,
} from './itemTongCucThuySan/formatdate';
import {UserContext} from '../../../contexts/UserContext';

const HoatDongKhaiThacThuySanView = ({id}) => {
  const {khaiThac, setKhaiThac} = useContext(FormContext);
  let counter = 1;
  let counterBang = 0;
  let counterTongMeLuoi = 0;
  const {data} = useContext(UserContext);
  const [listForm, setListForm] = React.useState([]);

  const [textInput, setTextInput] = React.useState([
    {
      thoidiem_tha: dateNowFormat('nullHour'),
      vido_tha: '',
      kinhdo_tha: '',
      thoidiem_thu: dateNowFormat('nullHour'),
      vido_thu: '',
      kinhdo_thu: '',
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

  useEffect(() => {
    try {
      if (data.khaithac && data.khaithac.length > 0) {
        setKhaiThac({khaithac: [...data.khaithac]});
        setTextInput(data.khaithac);
        let newValue = [];

        let newListCa = [...loaiCa];
        data.khaithac.forEach((item, index) => {
          newValue.push(<_renderForm key={index} />);
          setListForm(newValue);

          for (let j = 0; j < 9; j++) {
            const loaiTen = `loai_${j + 1}`;
            const loaiTenKl = `loai_${j + 1}_kl`;
            if (item[loaiTen] != '') {
              newListCa[j].name = item[loaiTen];
            }

            if (index == 0) {
              newListCa[j].soLuong.pop();
              newListCa[j].soLuong.push(item[loaiTenKl]);
            } else {
              newListCa[j].soLuong.push(item[loaiTenKl]);
            }
          }
        });
        setLoaiCa(newListCa);
      } else {
        setKhaiThac({
          khaithac: [
            {
              methu: '1',
              thoidiem_tha: dateNowFormat('nullHour'),
              vido_tha: '',
              kinhdo_tha: '',
              thoidiem_thu: dateNowFormat('nullHour'),
              vido_thu: '',
              kinhdo_thu: '',
              loai_1: '',
              loai_2: '',
              loai_3: '',
              loai_4: '',
              loai_5: '',
              loai_6: '',
              loai_7: '',
              loai_8: '',
              loai_9: '',
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
            },
          ],
        });
        // setLoaiCa([]);
      }
    } catch (error) {
      console.log('ERROR: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  }, [data.khaithac]);

  React.useEffect(() => {
    if (listForm.length === 0) {
      const newListForm = [...listForm, <_renderForm key={listForm.length} />];
      setListForm(newListForm);
    }
  }, [listForm]);

  const _renderInputSpeciesName = () => {
    try {
      const input = [];

      for (let i = 0; i < 10; i++) {
        const isEditable = i == 0;
        let valueLoai;
        if (i != 0) {
          valueLoai = loaiCa[i - 1].name;
        }
        input.push(
          <View key={i} style={[styles.flex1, styles.mr16]}>
            <TextInput
              placeholder={!isEditable ? 'Loài' : ''}
              editable={!isEditable}
              style={[styles.input]}
              value={valueLoai}
              // i: index ten loai ca range: 1-9
              onChangeText={value => handleInputChangeTenLoaiThuySan(i, value)}
            />
          </View>,
        );
      }
      return input;
    } catch (error) {
      console.log('ERROR: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const calculateSumOfEachIndex = () => {
    try {
      const totalSumByIndex = Array.from(
        {length: loaiCa[0].soLuong.length},
        () => 0,
      );

      loaiCa.forEach(item => {
        item.soLuong.forEach((val, i) => {
          totalSumByIndex[i] += parseInt(val) || 0;
        });
      });

      return totalSumByIndex.map((sum, index) =>
        textInput[index]?.isdelete != undefined &&
        textInput[index]?.isdelete == 1
          ? (() => <View></View>)()
          : (() => (
              <View
                key={index}
                style={[
                  styles.box,
                  index % 2 === 0 ? {backgroundColor: '#9dc5c3'} : null,
                ]}>
                <Text
                  style={
                    styles.textTotal
                  }>{`Mẻ ${++counterTongMeLuoi}: ${sum} Kg`}</Text>
              </View>
            ))(),
      );
    } catch (error) {
      console.log('ERROR: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const calculateSumOfSoLuongForEachObject = () => {
    try {
      return loaiCa.map((item, index) => {
        let sum = 0;
        for (let j = 0; j <= loaiCa[index].soLuong.length - 1; j++) {
          if (
            textInput[j].isdelete == undefined ||
            textInput[j].isdelete == 0
          ) {
            if (item.soLuong[j] == '' || item.soLuong[j] == undefined) {
              sum += 0;
            } else {
              sum += parseInt(item.soLuong[j]);
            }
          }
        }
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
    } catch (error) {
      console.log('ERROR CALCULATE: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const _renderInputSpecies = (index, indexBang) => {
    try {
      const inputs = [];

      for (let i = 0; i < 10; i++) {
        const isEditable = i == 0;
        let valueCa;
        if (i != 0) {
          valueCa = loaiCa[i - 1].soLuong[index];
        }

        placeholder = `Mẻ ${indexBang}`;
        // placeholder = `${index + 1}`;
        const checkCondition =
          textInput[index]?.isdelete != undefined &&
          textInput[index]?.isdelete == 1;
        if (checkCondition) {
          return;
        }
        inputs.push(
          <View key={i} style={[styles.flex1, styles.mr16]}>
            <TextInput
              placeholder={isEditable ? placeholder : 'Kg'}
              keyboardType="numeric"
              style={[styles.input]}
              editable={!isEditable}
              value={valueCa}
              // i: 1-9
              onChangeText={value => {
                handleInputChangeKhoiLuong(index, i, value);
              }}
            />
          </View>,
        );
      }
      return inputs;
    } catch (error) {
      console.log('ERROR: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const _renderTableNet = () => {
    try {
      const inputs = [];

      for (let i = 0; i < listForm.length; i++) {
        if (textInput[i].isdelete != undefined && textInput[i].isdelete == 1) {
          inputs.push(<View key={i} style={{flexDirection: 'row'}}></View>);
        } else {
          counterBang++;
          inputs.push(
            <View key={i} style={{flexDirection: 'row'}}>
              {_renderInputSpecies(i, counterBang)}
            </View>,
          );
        }
      }
      return inputs;
    } catch (error) {
      console.log('ERROR: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const _renderForm = index => {
    let printCounter = counter;
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
              <Text
                style={[styles.textTotal, styles.flex1, {fontWeight: 'bold'}]}>
                Mẻ thứ: {printCounter}
              </Text>
            </View>

            <View style={styles.view2}>
              <Text style={styles.title}>
                Thời điểm thả và vị trí thả (KĐ/VĐ){' '}
              </Text>
              <View style={[styles.flexRow, styles.flex1]}>
                <Text style={styles.textValue}>Ngày, tháng: </Text>
                <Text style={[styles.textValue, styles.mr8]}>
                  {convertStringToDateHour(textInput[index].thoidiem_tha)}
                </Text>
                <CustomDatePicker
                  value={textInput[index].thoidiem_tha}
                  onDateChange={newDate => {
                    const newInput = [...textInput];
                    newInput[index].thoidiem_tha = dateNowFormat(
                      newDate,
                      'dateHour',
                    );
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
                    onChangeText={value =>
                      handleInputChangeViDoTha(index, value)
                    }
                    style={[styles.input]}
                    value={textInput[index].vido_tha}
                  />
                </View>
                <View style={[styles.flex1, styles.ml16]}>
                  <Text style={styles.textValue}>Kinh độ</Text>
                  <TextInput
                    style={[styles.input]}
                    keyboardType="numeric"
                    onChangeText={value =>
                      handleInputChangeKinhDoTha(index, value)
                    }
                    value={textInput[index].kinhdo_tha}
                  />
                </View>
              </View>
            </View>

            <View style={styles.view2}>
              <Text style={styles.title}>
                Thời điểm thu và vị trí thu (KĐ/VĐ){' '}
              </Text>
              <View style={[styles.flexRow, styles.flex1]}>
                <Text style={styles.textValue}>Ngày, tháng: </Text>
                <Text style={[styles.textValue, styles.mr8]}>
                  {convertStringToDateHour(textInput[index].thoidiem_thu)}
                </Text>
                <CustomDatePicker
                  value={convertStringToDate(textInput[index].thoidiem_thu)}
                  onDateChange={newDate => {
                    const newInput = [...textInput];
                    newInput[index].thoidiem_thu = dateNowFormat(
                      newDate,
                      'dateHour',
                    );
                    setTextInput(newInput);

                    //set data context kinh do

                    const updatedKhaiThac = {...khaiThac};
                    updatedKhaiThac.khaithac[index].thoidiem_thu =
                      dateNowFormat(newDate, 'dateHour');
                    setKhaiThac(updatedKhaiThac);
                  }}
                />
              </View>
              <View style={[styles.flexRow, {width: '100%'}]}>
                <View style={[styles.flex1, styles.mr16]}>
                  <Text style={styles.textValue}>Vĩ Độ</Text>
                  <TextInput
                    onChangeText={value =>
                      handleInputChangeViDoThu(index, value)
                    }
                    keyboardType="numeric"
                    style={[styles.input]}
                    value={textInput[index].vido_thu}
                  />
                </View>
                <View style={[styles.flex1, styles.ml16]}>
                  <Text style={styles.textValue}>Kinh độ</Text>
                  <TextInput
                    style={[styles.input]}
                    keyboardType="numeric"
                    onChangeText={value =>
                      handleInputChangeKinhDoThu(index, value)
                    }
                    value={textInput[index].kinhdo_thu}
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

      // Form Context
      const newKhaithacObject = {
        methu: (listForm.length + 1).toString(),
        thoidiem_tha: dateNowFormat('nullHour'),
        vido_tha: '',
        kinhdo_tha: '',
        thoidiem_thu: dateNowFormat('nullHour'),
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

      if (data.khaithac == undefined) {
        textInput.push({
          thoidiem_tha: dateNowFormat('nullHour'),
          vido_tha: '',
          kinhdo_tha: '',
          thoidiem_thu: dateNowFormat('nullHour'),
          vido_thu: '',
          kinhdo_thu: '',
        });
        // setKhaiThac(prevState => ({
        //   ...prevState,
        //   khaithac: [...prevState.khaithac, newKhaithacObject],
        // }));
        const newKhaiThac = {...khaiThac};
        newKhaiThac.khaithac.push(newKhaithacObject);

        setKhaiThac(newKhaiThac);
      } else {
        const obj = newKhaithacObject;
        // obj.methu = (data.khaithac.length + 1).toString();

        const newTextinput = [...textInput];
        newTextinput.push(obj);
        setTextInput(newTextinput);

        const newKhaiThac = {...khaiThac};
        newKhaiThac.khaithac.push(obj);

        setKhaiThac(newKhaiThac);
      }

      const newArray = loaiCa.map(item => ({
        ...item,
        soLuong: [...item.soLuong, '0'],
      }));
      setLoaiCa(newArray);
    } catch (error) {
      console.log('ERROR ADD: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
    // setTextInput(textInput);
  };

  const handleDeleteRow = () => {
    try {
      const newListForm = [...listForm];

      if (newListForm.length > 1) {
        // khac undefined co nghia la dang o form update
        if (data.khaithac != undefined) {
          // neu la tao moi trong form update thi xoa luon, khong can set isdelete thanh 1
          if (textInput[textInput.length - 1].isdelete == undefined) {
            const updatedKhaiThac = JSON.parse(
              JSON.stringify(khaiThac.khaithac),
            );
            updatedKhaiThac.pop();
            setKhaiThac({
              ...khaiThac,
              khaithac: updatedKhaiThac,
            });
            const newInput = [...textInput];
            newInput.pop();
            setTextInput(newInput);

            newListForm.pop();
            setListForm(newListForm);

            const updatedLoaiCa = loaiCa.map(item => {
              const updatedSoLuong = item.soLuong.slice(0, -1); // Slice removes the last element
              return {...item, soLuong: updatedSoLuong};
            });
            setLoaiCa(updatedLoaiCa);
          } else {
            const updatedKhaiThac = JSON.parse(
              JSON.stringify(khaiThac.khaithac),
            );
            for (let i = 0; i < updatedKhaiThac.length - 1; i++) {
              if (
                updatedKhaiThac[updatedKhaiThac.length - (i + 1)].isdelete == 0
              ) {
                updatedKhaiThac[updatedKhaiThac.length - (i + 1)].isdelete = 1;
                break;
              }
            }

            setKhaiThac({
              ...khaiThac,
              khaithac: updatedKhaiThac,
            });
            setTextInput(updatedKhaiThac);
          }
        } else {
          //dang o trong form create
          //table ca

          const updatedKhaiThac = JSON.parse(JSON.stringify(khaiThac.khaithac));
          updatedKhaiThac.pop();
          setKhaiThac({
            ...khaiThac,
            khaithac: updatedKhaiThac,
          });
          const newInput = [...textInput];
          newInput.pop();
          setTextInput(newInput);

          newListForm.pop();
          setListForm(newListForm);

          const updatedLoaiCa = loaiCa.map(item => {
            const updatedSoLuong = item.soLuong.slice(0, -1); // Slice removes the last element
            return {...item, soLuong: updatedSoLuong};
          });
          setLoaiCa(updatedLoaiCa);
        }
      }
    } catch (error) {
      console.log('ERROR DELETE: ', error);
      ToastAndroid.show('Lỗi khi xóa', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeViDoTha = (index, value) => {
    try {
      const list = [...textInput];
      list[index].vido_tha = value;
      setTextInput(list);

      //set data context vi do

      const updatedKhaiThac = {...khaiThac};
      updatedKhaiThac.khaithac[index].vido_tha = value;
      setKhaiThac(updatedKhaiThac);
    } catch (error) {
      console.log('ERROR VI DO: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeKinhDoTha = (index, value) => {
    try {
      const list = [...textInput];
      list[index].kinhdo_tha = value;
      setTextInput(list);

      //set data context kinh do

      const updatedKhaiThac = {...khaiThac};
      updatedKhaiThac.khaithac[index].kinhdo_tha = value;
      setKhaiThac(updatedKhaiThac);
    } catch (error) {
      console.log('ERROR KINHDO: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };
  const handleInputChangeViDoThu = (index, value) => {
    try {
      const list = [...textInput];
      list[index].vido_thu = value;
      setTextInput(list);

      //set data context kinh do

      const updatedKhaiThac = {...khaiThac};
      updatedKhaiThac.khaithac[index].vido_thu = value;
      setKhaiThac(updatedKhaiThac);
    } catch (error) {
      console.log('ERROR VIDO: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeKinhDoThu = (index, value) => {
    try {
      const list = [...textInput];
      list[index].kinhdo_thu = value;
      setTextInput(list);

      //set data context kinh do

      const updatedKhaiThac = {...khaiThac};
      updatedKhaiThac.khaithac[index].kinhdo_thu = value;
      setKhaiThac(updatedKhaiThac);
    } catch (error) {
      console.log('ERROR KINHDO: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeTenLoaiThuySan = (index, value) => {
    try {
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
    } catch (error) {
      console.log('ERROR DOI TEN: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
  };

  const handleInputChangeKhoiLuong = (indexRow, indexSpecies, value) => {
    try {
      if (isNaN(value)) {
        Alert.alert('Lỗi', 'Bạn phải nhập số.', [{text: 'OK'}]);
        return;
      } else if (value == '') {
        // value = '0';
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
        updatedKhaiThac.khaithac[indexRow].tongsanluong = sum.toString();

        setKhaiThac(updatedKhaiThac);
      }
      setLoaiCa(list);
    } catch (error) {
      console.log('ERROR KHOILUONG: ', error);
      ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
    }
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