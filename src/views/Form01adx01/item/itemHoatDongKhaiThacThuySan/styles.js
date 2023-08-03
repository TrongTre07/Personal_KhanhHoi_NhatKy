import {StyleSheet} from 'react-native';
const _renderInputSpecies = () => {
  const inputs = [];
  for (let i = 0; i < 8; i++) {
    inputs.push(
      <View key={i} style={[styles.flex1, styles.mr16]}>
        <TextInput
          placeholder="Loài"
          style={[styles.input]}
          onChangeText={value =>
            handleInputChangeTenLoaiThuySan(listForm.length, value)
          }
        />
        <TextInput
          placeholder="Kg"
          keyboardType="numeric"
          style={[styles.input]}
          onChangeText={value =>
            handleInputChangeTenLoaiThuySan(listForm.length, value)
          }
        />
      </View>,
    );
  }
  return inputs;
};
export const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },

  flexRowSpecies: {
    flexDirection: 'column',
  },

  flex1: {
    width:150
  },

  ml16: {
    marginLeft: 16,
  },

  mr16: {
    marginRight: 16,
  },

  ml8: {
    marginLeft: 8,
  },

  mr8: {
    marginRight: 8,
  },

  action: {
    flexDirection: 'row',
    marginTop: 16,
  },

  addRow: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 8,
  },

  deleteRow: {
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 8,
    marginLeft: 12,
  },

  rowActionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

  textValue: {
    fontSize: 16,
    color: '#000',
  },
  textTotal: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },

  input: {
    borderRadius: 8,
    height: 48,
    borderColor: '#d1d5db',
    borderWidth: 1,
    marginTop: 12,
    paddingLeft: 12,
    color: '#000',
    fontSize: 18,
    fontWeight:'bold'
  },

  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 12,
  },

  form: {
    borderBottomColor: '#d1d5db',
    borderBottomWidth: 1,
    paddingBottom: 24,
    paddingTop: 12,
  },

  itemContainerFlatlist: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: 16,
  },
  box: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});