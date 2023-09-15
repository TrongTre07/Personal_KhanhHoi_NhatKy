import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import TableReport from './TableReport';

const TableForm04_PL3_03 = () => {
  const {data04_PLIII_03, setData04_PLIII_03} = useContext(UserContext);

  return (
    <View style={{backgroundColor:'white', marginVertical: 10}}>
      <View
        style={[
          styles.column,
          {height: 'auto', justifyContent: 'flex-start', marginVertical: 15},
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>
            Tôi đảm bảo rằng các sản phẩm thủy sản:
          </Text>
          <TextInput
            onChangeText={text => {
              setData04_PLIII_03({...data04_PLIII_03, sanphamthuysan: text});
            }}
            value={data04_PLIII_03?.sanphamthuysan}
            style={[styles.input, styles.text]}
          />
        </View>
        <Text style={styles.text}>
          (tên và mã sản phẩm) được chế biến từ thủy sản đánh bắt hợp pháp sau:
        </Text>
      </View>
      <View
        style={[
          styles.column,
          {height: 'auto', justifyContent: 'flex-start', marginVertical: 15},
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>
            I confirm that the processed fishery products:
          </Text>
          <TextInput
            onChangeText={text => {
              setData04_PLIII_03({...data04_PLIII_03, sanphamthuysan: text});
            }}
            value={data04_PLIII_03?.sanphamthuysan}
            style={[styles.input, styles.text]}
          />
        </View>
        <Text style={styles.text}>
          (product description and Combined Nomenclature code) have been
          obtained from catches imported under the following catch certificate
          (s):
        </Text>
      </View>

      <TableReport />

      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={styles.text}>
          Tên và địa chỉ của cơ sở chế biến{'\n'}Name and address of the
          processing plant:
        </Text>
        <TextInput
          onChangeText={text => {
            setData04_PLIII_03({
              ...data04_PLIII_03,
              tenvadiachicosochebien: text,
            });
          }}
          value={data04_PLIII_03?.tenvadiachicosochebien}
          style={[styles.input, styles.text]}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={[styles.text, {width: '50%'}]}>
          Tên và địa chỉ của nhà xuất khẩu (nếu khác với nhà máy chế biến){'\n'}
          Name and address of the exporter (if different from the processing
          plant):
        </Text>
        <TextInput
          onChangeText={text => {
            setData04_PLIII_03({
              ...data04_PLIII_03,
              tenvadiachinhaxuatkhau: text,
            });
          }}
          value={data04_PLIII_03?.tenvadiachinhaxuatkhau}
          style={[styles.input, styles.text]}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={styles.text}>
          Mã số cơ sở chế biến{'\n'}Approval number of the processing plant:
        </Text>
        <TextInput
          onChangeText={text => {
            setData04_PLIII_03({...data04_PLIII_03, macosochebien: text});
          }}
          value={data04_PLIII_03?.macosochebien}
          style={[styles.input, styles.text]}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={[styles.text, {width: '50%'}]}>
          Số giấy chứng nhận chất lượng, vệ sinh an toàn thực phẩm (Chứng thư vệ
          sinh) và ngày cấp{'\n'}Health certificate number and date:
        </Text>
        <TextInput
          onChangeText={text => {
            setData04_PLIII_03({
              ...data04_PLIII_03,
              giayphiepantoanthucphamvangaycap: text,
            });
          }}
          value={data04_PLIII_03?.giayphiepantoanthucphamvangaycap}
          style={[styles.input, styles.text]}
        />
      </View>
      {/* box 1 */}
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>
            Đại diện của cơ sở chế biến/Responsible person of the processing
            plant
          </Text>
        </View>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>Chữ ký/Signature</Text>
        </View>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>Ngày/Date</Text>
        </View>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>Địa điểm/Place</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={styles.textBold}>
          Xác nhận của cơ quan có thẩm quyền{'\n'}Endorsement by the competent
          authority:
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={styles.text}>Số xác nhận{'\n'}Statement No.:</Text>
        <TextInput
          onChangeText={text => {
            setData04_PLIII_03({...data04_PLIII_03, soxacnhan: text});
          }}
          value={data04_PLIII_03?.soxacnhan}
          style={[styles.input, styles.text]}
        />
      </View>

      {/* box 2 */}
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>
            Thủ trưởng cơ quan có thẩm quyền xác nhận/Public authority
          </Text>
        </View>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>
            Ký và đóng dấu/Signature and seal
          </Text>
        </View>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>Ngày/Date</Text>
        </View>
        <View style={styles.boxSignature}>
          <Text style={[styles.textSignature]}>Địa điểm/Place</Text>
        </View>
      </View>
    </View>
  );
};

export default TableForm04_PL3_03;
