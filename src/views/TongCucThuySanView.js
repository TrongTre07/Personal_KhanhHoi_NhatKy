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
        arrNumberShip={data.arrNumberShip}
        numberShip={data.numberShip}
        longMaxShip={data.longMaxShip}
        sumEngine={data.sumEngine}
        numberSeafood={data.numberSeafood}
        dateSeafood={data.dateSeafood}
        sideJob1={data.sideJob1}
        sideJob2={data.sideJob2}/>
      <Table2
              jobCau={data.jobCau}
              jobVayRe={data.jobVayRe}
              jobChup={data.jobChup}
              jobKeo={data.jobKeo}
              jobOther={data.jobOther}
      />
      <Table3
              changeNumber={data.changeNumber}
              departurePort={data.departurePort}
              arrivalPort={data.arrivalPort}
              diary={data.diary}/>
    </View>
  )
}

export default TongCucThuySanView

var data= {
  nameOwner: 'Huy Tran',
  namePilot: 'Trong tre',
  arrNumberShip: ['1234321','H2341','abc'],
  numberShip: 'abc',
  longMaxShip: '10',
  sumEngine: '1000',
  numberSeafood:'100000',
  dateSeafood: '20/2/2023',
  sideJob1:'công an',
  sideJob2:'câu cá',
  jobCau:{size:'100',number:'2'},
  jobVayRe:{size:'200',number:'3'},
  jobChup:{size:'300',number:'4'},
  jobKeo:{size:'400',number:'5'},
  jobOther:"cong an, size 123",
  sideJob2:'câu cá',
  changeNumber:'23516',
  departurePort:{text:'di',date:'21/1/2011'},
  arrivalPort:{text:'ve',date:'11/2/2011'},
  diary:{date:'11/3/2011',text:'abc123'}
}
