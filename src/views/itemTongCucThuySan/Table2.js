import {  View, Text, TextInput,Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'

const Table2 = ({
      jobCau,
      jobVayRe,
      jobChup,
      jobKeo,
      jobOther
  }) => {
    const [inputValue, setInputValue] = useState({
      jobCau,
      jobVayRe,
      jobChup,
      jobKeo,
      jobOther
    });

    console.log(inputValue)


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
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobCau: {...jobCau,size:text} })}
            value={inputValue.jobCau?.size}
            />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Số lưỡi câu:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobCau: {...jobCau,number:text} })}
            value={inputValue.jobCau?.number}
          />
          <Text style={styles.text}>lưỡi</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>b. Nghề lưới vây, rê: Chiều dài toàn bộ lưới</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobVayRe: {...jobVayRe,size:text} })}
            value={inputValue.jobVayRe?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobVayRe: {...jobVayRe,number:text} })}
            value={inputValue.jobVayRe?.number}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>c. Nghề lưới chụp: Chu vi miệng lưới</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobChup: {...jobChup,size:text} })}
            value={inputValue.jobChup?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobChup: {...jobChup,number:text} })}
            value={inputValue.jobChup?.number}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>d. Nghề lưới kéo: Chiều dài giềng phao</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobKeo: {...jobKeo,size:text} })}
            value={inputValue.jobKeo?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, jobKeo: {...jobKeo,number:text} })}
            value={inputValue.jobKeo?.number}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'100%'}]}>
          <Text style={styles.text}>e. Nghề khác:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, jobOther: text })}
            value={inputValue.jobOther}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  )
}

export default Table2