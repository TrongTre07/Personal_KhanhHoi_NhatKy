import {  View, Text, TextInput,Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'

const Table2 = ({
      ncau_chieudaivangcau,
      ncau_soluoicau,
      nluoivay_chieudailuoi,
      nluoivay_chieucaoluoi,
      nluoichup_chuvimiengluoi,
      nluoichup_chieucaoluoi,
      nluoikeo_chieudaigiengphao,
      nluoikeo_chieudaitoanboluoi,
      nkhac
  }) => {
    const [inputValue, setInputValue] = useState({
      ncau_chieudaivangcau,
      ncau_soluoicau,
      nluoivay_chieudailuoi,
      nluoivay_chieucaoluoi,
      nluoichup_chuvimiengluoi,
      nluoichup_chieucaoluoi,
      nluoikeo_chieudaigiengphao,
      nluoikeo_chieudaitoanboluoi,
      nkhac
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
            onChangeText={(text) => setInputValue({ ...inputValue, ncau_chieudaivangcau: text })}
            value={inputValue.ncau_chieudaivangcau}
            />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Số lưỡi câu:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, ncau_soluoicau: text })}
            value={inputValue.ncau_soluoicau}
          />
          <Text style={styles.text}>lưỡi</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>b. Nghề lưới vây, rê: Chiều dài toàn bộ lưới</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, nluoivay_chieudailuoi: text })}
            value={inputValue.jobVayRe?.size}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, nluoivay_chieucaoluoi: text })}
            value={inputValue.nluoivay_chieucaoluoi}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text style={styles.text}>c. Nghề lưới chụp: Chu vi miệng lưới</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, nluoichup_chuvimiengluoi: text})}
            value={inputValue.nluoichup_chuvimiengluoi}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, nluoichup_chieucaoluoi: text })}
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
            onChangeText={(text) => setInputValue({ ...inputValue, nluoikeo_chieudaigiengphao: text })}
            value={inputValue.nluoikeo_chieudaigiengphao}
          />
          <Text style={styles.text}>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text style={styles.text}>Chiều cao lưới:</Text>
          <TextInput 
            style={[styles.input,styles.text]}
            onChangeText={(text) => setInputValue({ ...inputValue, nluoikeo_chieudaigiengphao: text })}
            value={inputValue.nluoikeo_chieudaigiengphao}
          />
          <Text style={styles.text}>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'100%'}]}>
          <Text style={styles.text}>e. Nghề khác:</Text>
          <TextInput
            onChangeText={(text) => setInputValue({ ...inputValue, nkhac: text })}
            value={inputValue.nkhac}
            style={[styles.input, styles.text]}
          />
        </View>
      </View>
    </View>
  )
}

export default Table2