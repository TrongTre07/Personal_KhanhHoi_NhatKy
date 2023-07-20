import { ScrollView, StyleSheet,TextInput, Text, View } from 'react-native'
import React from 'react'
import styles from './itemTongCucThuySan/styles'
import Table1 from './itemTongCucThuySan/Table1'
import Table2 from './itemTongCucThuySan/Table2'
import Table3 from './itemTongCucThuySan/Table3'


const TongCucThuySanView = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.header,]}>
        <Text style={styles.txtHeader}>TỔNG CỤC THUỶ SẢN</Text>
        <Text style={styles.txtHeader}>-----------</Text>
        <Text style={styles.txtHeader}>NHẬT KÝ KHAI THÁC THUỶ SẢN</Text>
        <View style={[styles.row, { width: '30%' }]}>
          <Text style={[styles.txtHeader,{fontWeight:'400'}]}>{'('}NGHỀ CHÍNH:</Text>
          <TextInput style={styles.input} />
          <Text style={[styles.txtHeader,{fontWeight:'400'}]}>{')'}</Text>
        </View>
      </View> 

      <Table1         
        nameOwner={data.nameOwner}
        namePilot={data.namePilot}
        numberShip={data.numberShip}
        longMaxShip={data.longMaxShip}
        sumEngine={data.sumEngine}
        numberSeafood={data.numberSeafood}
        dateSeafood={data.dateSeafood}
        sideJob1={data.sideJob1}
        sideJob2={data.sideJob2}/>
      <Table2/>
      <Table3/>
    </View>
  )
}

export default TongCucThuySanView

var data= {
  nameOwner: 'Huy Tran',
  namePilot: 'Trong tre',
  numberShip: '1234321',
  longMaxShip: '10',
  sumEngine: '1000',
  numberSeafood:'100000',
  dateSeafood: '20/02/2023',
  sideJob1:'công an',
  sideJob2:'câu cá'
}
