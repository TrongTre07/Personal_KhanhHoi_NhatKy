import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useContext} from 'react';
import TongCucThuySanView from './item/TongCucThuySanView';
import {UserContext} from '../../contexts/UserContext';
import {useNetInfo} from '@react-native-community/netinfo';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderView from './item/HeaderView';
const Form04ad01 = ({route}) => {
  const {
    getDetailForm0401Id,
    setData0401,
    data0401,
    goBackAlert,
    setGoBackAlert,
    
  } = useContext(UserContext);
  const netInfo = useNetInfo();

  const id = route.params?.id;

  useEffect(() => {
    console.log('id: ', id);

    if (id != undefined) {
      if (netInfo.isConnected) getDetailForm0401Id(id);
      // else
      // getDataLocal();
    } else {
      setData0401({});
    }
  }, [netInfo, id]);
  return (
    <ScrollView>
      <HeaderView/>
      <TongCucThuySanView />
    </ScrollView>
  );
};

export default Form04ad01;

const styles = StyleSheet.create({});
