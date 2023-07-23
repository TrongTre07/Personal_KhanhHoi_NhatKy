import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import HeaderView from './item/HeaderView'
import TongCucThuySanView from './item/TongCucThuySanView'
import HoatDongKhaiThacThuySanView from './item/HoatDongKhaiThacThuySanView'
import HoatDongChuyenTaiView from './item/HoatDongChuyenTaiView'

const Form01adx01 = () => {
  return (
    
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
          <HeaderView/>
          <TongCucThuySanView/>
          <HoatDongKhaiThacThuySanView/>
          <HoatDongChuyenTaiView/>
      </ScrollView>

  )
}

export default Form01adx01