import DatePicker from 'react-native-date-picker';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Datepicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // Function to handle date change in the DatePicker
  const handleDateChange = newDate => {
    console.log(newDate);
    setOpen(false);
    setDate(newDate);
  };

  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <Text>{date.toLocaleString()}</Text>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleDateChange} 
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default Datepicker;
