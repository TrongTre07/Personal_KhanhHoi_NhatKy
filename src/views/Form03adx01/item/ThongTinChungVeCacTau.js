import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

const ThongTinChungVeCacTau = () => {
  const data = ['b1', 'b2', 'b3', 'b4', 'b1', 'b2', 'b3', 'b4'];
  const renderButton = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{item}</Text>
        <View style={styles.circle}>
          <Text style={styles.minus}>-</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flexDirection:'row'}}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderButton}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.container}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThongTinChungVeCacTau;

const styles = StyleSheet.create({
  container: {
    width: 90, // Set the desired width
    height: 60, // Set the desired height
    borderTopLeftRadius: 15, // Adjust the border radius to your preference
    borderTopRightRadius: 15, // Adjust the border radius to your preference
    backgroundColor: '#0ea5e9', // Set the button background color
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  circle: {
    position: 'absolute',
    top: -13,
    right: -10,
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  minus: {
    fontSize: 40,
    fontWeight: 'bold',
    top: -10,
    color: 'white',
  },
  plus: {
    fontSize: 40,
    color: 'white',
  },
});
