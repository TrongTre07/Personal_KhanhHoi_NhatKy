import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {useState, useMemo, useContext, useEffect} from 'react';
import styles from './styles';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {dateNowFormat} from '../../../others/formatdate';
import CustomDatePicker from '../../../others/CustomDatePicker';

import {UserContext} from '../../../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';
import Storage from '../../../../utils/storage';

import moment from 'moment';
const Table1 = ({selectedItem}) => {
  const moment = require('moment');
  const currentDate = moment();
  const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm:ss');

  const {data0201, setData0201, dataInfShip, setDataInfShip} =
    useContext(UserContext);

  const netInfo = useNetInfo();

  // check ko có wifi thì lấy dataInfShip từ local
  useEffect(() => {
    if (!netInfo.isConnected) {
      getShipInfo();
    }
  }, [netInfo.isConnected]);

  const getShipInfo = async () => {
    const result = await Storage.getItem('dataInfShip');
    if (result !== null) {
      const dataShip = JSON.parse(result);
      setDataInfShip(dataShip);
    }
  };

  // const [itemSelected, setItemSelected] = useState();
  // useEffect(() => {
  //   if (selectedItem != undefined) {
  //     setItemSelected(data0201.thongtintaudc_thumua[selectedItem]);
  //   } else {
  //     setItemSelected([
  //       {
  //         cang_di: '',
  //         gpkt_so: '',
  //         gpkt_thoihan: formattedDate,
  //         id: 0,
  //         id_tau: '',
  //         ngay_di: formattedDate,
  //         nghekt: '',
  //         selected: true,
  //         tau_bs: '',
  //         tau_chieudailonnhat: '',
  //         tau_tongcongsuatmaychinh: '',
  //         tg_khaithac_denngay: formattedDate,
  //         tg_khaithac_tungay: formattedDate,
  //         thongtinhoatdong: [
  //           {
  //             kinhdo_tha: '',
  //             kinhdo_thu: '',
  //             loai_1: '',
  //             loai_1_kl: '',
  //             loai_2: '',
  //             loai_2_kl: '',
  //             loai_3: '',
  //             loai_3_kl: '',
  //             loai_4: '',
  //             loai_4_kl: '',
  //             loai_5: '',
  //             loai_5_kl: '',
  //             loai_6: '',
  //             loai_6_kl: '',
  //             methu: '1',
  //             thoidiem_tha: formattedDate,
  //             thoidiem_thu: formattedDate,
  //             tongsanluong: '',
  //             vido_tha: '',
  //             vido_thu: '',
  //           },
  //         ],
  //       },
  //     ]);
  //   }
  // }, [selectedItem]);

  const handleTauBsChange = text => {
    const newData0201 = {...data0201};

    newData0201.thongtintaudc_thumua[selectedItem].tau_bs = text;

    setData0201(newData0201);
  };

  const handleChangeChieuDaiLonNhat = text => {
    const newData0201 = {...data0201};

    newData0201.thongtintaudc_thumua[selectedItem].tau_chieudailonnhat = text;

    setData0201(newData0201);
  };

  const handleChangeTongCongSuatMayChinh = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].tau_tongcongsuatmaychinh =
      text;
    setData0201(newData0201);
  };

  const handleChangeSoGiayPhepKhaiThac = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].gpkt_so = text;
    setData0201(newData0201);
  };

  const handleChangeThoiHan = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].gpkt_thoihan = text;
    setData0201(newData0201);
  };

  const handleChangeNgheKhaiThac = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].nghekt = text;
    setData0201(newData0201);
  };

  const handleChangeCangDi = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].cang_di = text;
    setData0201(newData0201);
  };

  const handleChangeNgayDi = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].ngay_di = text;
    setData0201(newData0201);
  };

  const handleChangeKhaiThacTuNgay = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].tg_khaithac_tungay = text;
    setData0201(newData0201);
  };

  const handleChangeKhaiThacDenNgay = text => {
    const newData0201 = {...data0201};
    newData0201.thongtintaudc_thumua[selectedItem].tg_khaithac_denngay = text;
    setData0201(newData0201);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>1. Số đăng ký tàu:</Text>
          <TextInput
            onChangeText={text => {
              handleTauBsChange(text);
            }}
            value={data0201.thongtintaudc_thumua[selectedItem].tau_bs}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>2. Chiều dài lớn nhất của tàu:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeChieuDaiLonNhat(text);
            }}
            keyboardType="numeric"
            value={
              data0201.thongtintaudc_thumua[selectedItem].tau_chieudailonnhat
            }
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>
      <View style={[styles.row, {width: '50%'}]}>
        <Text style={styles.text}>3. Tổng công suất máy chính:</Text>
        <TextInput
          onChangeText={text => {
            handleChangeTongCongSuatMayChinh(text);
          }}
          value={
            data0201.thongtintaudc_thumua[selectedItem].tau_tongcongsuatmaychinh
          }
          style={[styles.input, styles.text]}
        />
        <Text style={styles.text}>CV</Text>
      </View>

      <View style={[styles.row, {height: 'auto'}]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>4. Số giấy phép khai thác thủy sản:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeSoGiayPhepKhaiThac(text);
            }}
            value={data0201.thongtintaudc_thumua[selectedItem].gpkt_so}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời hạn đến:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeThoiHan(text);
            }}
            value={moment(
              data0201.thongtintaudc_thumua[selectedItem].gpkt_thoihan,
            ).format('DD/MM/YYYY')}
            style={[styles.input, styles.text]}
            // editable={false}
          />

          <CustomDatePicker
            onDateChange={date => {
              handleChangeThoiHan(date);
            }}
          />
        </View>
      </View>

      <View style={[styles.row, {width: '50%'}]}>
        <Text style={styles.text}>5. Nghề khai thác:</Text>
        <TextInput
          // editable={false}
          onChangeText={text => {
            handleChangeNgheKhaiThac(text);
          }}
          value={data0201.thongtintaudc_thumua[selectedItem].nghekt}
          style={[styles.input, styles.text]}
        />
        <Text style={styles.text}>;</Text>
      </View>
      <View style={[styles.row, {marginBottom: 10}]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>6. Cảng đi:</Text>
          <TextInput
            // editable={false}
            onChangeText={text => {
              handleChangeCangDi(text);
            }}
            value={data0201.thongtintaudc_thumua[selectedItem].cang_di}
            style={[styles.input, styles.text]}
          />
          <Text style={styles.text}>;</Text>
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Thời gian đi:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeNgayDi(text);
            }}
            value={moment(
              data0201.thongtintaudc_thumua[selectedItem].ngay_di,
            ).format('DD/MM/YYYY')}
            style={[styles.input, styles.text]}
          />
          <CustomDatePicker
            onDateChange={date => {
              handleChangeNgayDi(date);
            }}
          />
        </View>
      </View>
      <Text style={styles.text}>
        {' '}
        7. Thời gian khai thác đối với sản phẩm thu mua, chuyển tải:{' '}
      </Text>
      <View style={[styles.row, {marginBottom: 10}]}>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}>Từ ngày:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeKhaiThacTuNgay(text);
            }}
            value={moment(
              data0201.thongtintaudc_thumua[selectedItem].tg_khaithac_tungay,
            ).format('DD/MM/YYYY')}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          <CustomDatePicker
            onDateChange={date => {
              handleChangeKhaiThacTuNgay(date);
            }}
          />
        </View>
        <View style={[styles.row, {width: '50%'}]}>
          <Text style={styles.text}> Đến ngày:</Text>
          <TextInput
            onChangeText={text => {
              handleChangeKhaiThacDenNgay(text);
            }}
            value={moment(
              data0201.thongtintaudc_thumua[selectedItem].tg_khaithac_denngay,
            ).format('DD/MM/YYYY')}
            style={[styles.input, styles.text]}
            // editable={false}
          />
          <CustomDatePicker
            onDateChange={date => {
              handleChangeKhaiThacDenNgay(date);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Table1;
