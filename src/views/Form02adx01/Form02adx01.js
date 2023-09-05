import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useContext} from 'react';
import TongCucThuySanView from './item/TongCucThuySanView';
import {UserContext} from '../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';
import {ScrollView} from 'react-native-gesture-handler';
import KetQuaThuMua from './KetQuaThuMua';
import ThongTinVeCacTau from './item/ThongTinVeCacTau';
import ThongTinChiTietHoatDong from './item/B_ThongTinVeTauCa/ThongTinChiTietHoatDong';
const Form02ad01 = ({route}) => {
  const {
    getDetailForm0201Id,
    setData0201,
    data0201,
    goBackAlert,
    setGoBackAlert,
  } = useContext(UserContext);
  const netInfo = useNetInfo();

  const id = route.params?.id;

  useEffect(() => {
    console.log('id: ', id);

    if (id != undefined) {
      if (netInfo.isConnected) getDetailForm0201Id(id);
      // else
      // getDataLocal();
    } else {
      setData0201({});
    }
  }, [netInfo, id]);
  return (
    <ScrollView>
      <TongCucThuySanView />
      <KetQuaThuMua />
      <ThongTinVeCacTau/>
      <ThongTinChiTietHoatDong/>
    </ScrollView>
  );
};

export default Form02ad01;

const styles = StyleSheet.create({});
