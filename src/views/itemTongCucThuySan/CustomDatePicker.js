import React, { useState, useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';
import DatePicker from 'react-native-date-picker';

const CustomDatePicker = ({ value, onDateChange }) => {
  const [open, setOpen] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());

  useEffect(() => {
    if (value) {
      const parsedDate = value instanceof Date ? value : new Date(value);
      if (!isNaN(parsedDate.getTime())) {
        // Check if the parsedDate is a valid Date object
        setDateValue(parsedDate);
      }
    }
  }, [value]);

  return (
    <View>
      {open && (
        <DatePicker
          modal
          mode="date"
          open={open}
          date={dateValue}
          onConfirm={(date) => {
            setOpen(false);
            setDateValue(date);
            onDateChange(date);
          }}
          onCancel={() => setOpen(false)}
        />
      )}
      <Pressable onPress={() => setOpen(true)}>
        <Image style={{ width: 16, height: 16 }} source={require('../../img/iconDate.jpg')} />
      </Pressable>
    </View>
  );
};

export default CustomDatePicker;
