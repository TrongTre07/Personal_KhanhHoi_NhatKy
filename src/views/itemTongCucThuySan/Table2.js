import {  View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Table2 = () => {
  return (
    <View>
      <View>
        <Text style={styles.text}>
          9. Kích thước chủ yếu của ngư cụ {'('}ghi cụ thể theo nghề chính {')'}:
        </Text>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>a. Nghề câu: Chiều dài toàn bộ vàng câu</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Số lưỡi câu:</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>lưỡi</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>b. Nghề lưới vây, rê: Chiều dài toàn bộ lưới</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>c. Nghề lưới chụp: Chu vi miệng lưới</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>d. Nghề lưới kéo: Chiều dài giềng phao</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput style={[styles.input,styles.text]}/>
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'100%'}]}>
          <Text style={styles.text}>e. Nghề khác:</Text>
          <TextInput style={[styles.input,styles.text]}/>
        </View>
      </View>
    </View>
  )
}

export default Table2