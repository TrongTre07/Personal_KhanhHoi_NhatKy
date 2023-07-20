import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
const ChuyenBienSoView = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>TỔNG CỤC THUỶ SẢN</Text>
        <Text>-----------</Text>
        <Text>NHẬT KÝ KHAI THÁC THUỶ SẢN</Text>
        <View style={[styles.row, { width: '50%' }]}>
          <Text>{'('}NGHỀ CHÍNH:</Text>
          <TextInput style={styles.input} />
          <Text>{')'}</Text>
        </View>
      </View>

      {/* component 1 */}
      {/* <View style={[styles.row]}>
        <View style={[styles.row, { width: '50%' }]}>
          <Text>1. Họ và tên chủ tàu:</Text>
          <TextInput style={styles.input} />
          <Text>;</Text>
        </View>
        <View style={[styles.row, { width: '50%' }]}>
          <Text>2. Họ và tên thuyền trưởng:</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '33%' }]}>
          <Text>3. Số đăng ký tàu *.:</Text>
          <TextInput style={styles.input} />
          <Text>;</Text>

        </View>
        <View style={[styles.row, { width: '33%' }]}>
          <Text>4. Chiều dài lớn nhất của tàu:</Text>
          <TextInput style={styles.input} />
          <Text>m;</Text>
        </View>
        <View style={[styles.row, { width: '33%' }]}>
          <Text>5. Tổng công xuất máy chính:</Text>
          <TextInput style={styles.input} />
          <Text>CV</Text>
        </View>

      </View>
      <View style={[styles.row]}>
        <View style={[styles.row,{width:'50%'}]}>
          <Text>6. Số giấy phép khai thác thuỷ sản:</Text>
          <TextInput style={styles.input}/>
          <Text>;</Text>
        </View>
        <View style={[styles.row,{width:'50%'}]}>
          <Text>Thời gian đến:</Text>
          <TextInput style={styles.input}/>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'50%'}]}>
          <Text>7. Ngề phụ 1:</Text>
          <TextInput style={styles.input}/>
          <Text>;</Text>
        </View>
        <View style={[styles.row,{width:'50%'}]}>
          <Text>8. Nghề phụ 2:</Text>
          <TextInput style={styles.input}/>
        </View>
      </View> */}

      {/* component 2 */}
      {/* <View>
        <Text>
          9. Kích thước chủ yếu của ngư cụ {'('}ghi cụ thể theo nghề chính {')'}:
        </Text>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text>a. Nghề câu: Chiều dài toàn bộ vàng câu</Text>
          <TextInput style={styles.input}/>
          <Text>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text>Số lưỡi câu:</Text>
          <TextInput style={styles.input}/>
          <Text>lưỡi</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text>b. Nghề lưới vây, rê: Chiều dài toàn bộ lưới</Text>
          <TextInput style={styles.input}/>
          <Text>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text>Chiều cao lưới:</Text>
          <TextInput style={styles.input}/>
          <Text>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text>c. Nghề lưới chụp: Chu vi miệng lưới</Text>
          <TextInput style={styles.input}/>
          <Text>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text>Chiều cao lưới:</Text>
          <TextInput style={styles.input}/>
          <Text>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'65%'}]}>
          <Text>d. Nghề lưới kéo: Chiều dài giềng phao</Text>
          <TextInput style={styles.input}/>
          <Text>m;</Text>
        </View>
        <View style={[styles.row,{width:'35%'}]}>
          <Text>Chiều cao lưới:</Text>
          <TextInput style={styles.input}/>
          <Text>m</Text>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row,{width:'100%'}]}>
          <Text>e. Nghề khác:</Text>
          <TextInput style={styles.input}/>
        </View>
      </View> */}

      {/* component 3 */}
      <View style={[styles.row]}>
        <View style={[styles.row, { width: '33%' }]}>
          <View style={[styles.row, { width: '100%' }]}>
            <Text>Chuyển biển số:</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={[styles.row, { width: '67%' }]}>
          <View style={[styles.row]}>
            <View style={[styles.row, { width: '50%' }]}>
              <Text>10. Cảng đi:</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={[styles.row, { width: '50%' }]}>
              <Text>Thời gian:</Text>
              <TextInput style={styles.input} />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '33%' }]}>
          <View style={[styles.row, { width: '100%',justifyContent:'center' }]}>
            <Text>(Ghi chuyến biển số mấy trong năm)</Text>
          </View>
        </View>
        <View style={[styles.row, { width: '67%' }]}>
          <View style={[styles.row]}>
            <View style={[styles.row, { width: '50%' }]}>
              <Text>11. Cảng về:</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={[styles.row, { width: '50%' }]}>
              <Text>Thời gian:</Text>
              <TextInput style={styles.input} />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.row]}>
        <View style={[styles.row, { width: '33%' }]}>
          <View style={[styles.row, { width: '100%' }]}>
          </View>
        </View>

        <View style={[styles.row, { width: '67%' }]}>
          <View style={[styles.row]}>
            <View style={[styles.row, { width: '50%' }]}>
              <Text>12. Nộp nhật ký</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={[styles.row, { width: '50%' }]}>
              <Text>Vào Sổ số:</Text>
              <TextInput style={styles.input} />
            </View>
          </View>
        </View>
      </View>

    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//     backgroundColor: '#fff',
//   },
//   header: {
//     alignItems: 'center',
//   },
//   row: {
//     height: 36,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     margin: 6,
//     textAlign: 'center',
//   },
//   input: {
//     flex: 1,
//     height: 36,
//     // backgroundColor:'red',
//     borderColor: 'gray',
//     borderBottomWidth: 1,
//     borderStyle: 'dotted'
//   },
// });

export default ChuyenBienSoView;
