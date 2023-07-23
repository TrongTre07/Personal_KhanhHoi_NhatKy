import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const Timepicker = () => {
  const [date, setDate] = useState(new Date());

  return <DatePicker open={true} date={date} onDateChange={setDate} />;
};

export default Timepicker;

const styles = StyleSheet.create({});
