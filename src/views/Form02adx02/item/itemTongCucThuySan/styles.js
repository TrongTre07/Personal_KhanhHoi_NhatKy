import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerTable: {
    flex: 1,
    padding: 8,
  },

  lineRight: {
    // borderColor: '#0099FF',
    // borderRightWidth: 0.6,
  },
  container: {
    // flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    // borderColor: '#0099FF',
    // borderWidth: 0.6,
  },
  txtHeader: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  txtGiayBienNhan: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  header: {
    alignItems: 'center',
  },
  txtHeaderDate: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  row: {
    paddingVertical: 3,
    // height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'black',
    fontWeight: '500',
  },
  input: {
    flex: 1,
    height: 22,
    fontSize: 18,
    // backgroundColor:'red',
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingVertical: 0,
  },
});

export default styles;
