import React, {useState, useEffect} from 'react';
import {View, Pressable, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';

const CustomDateTimePicker = ({value, onDateChange}) => {
  const [open, setOpen] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());

  useEffect(() => {
    if (value) {
      const parsedDate = value instanceof Date ? value : new Date(value);
      if (!isNaN(parsedDate.getTime())) {
        setDateValue(parsedDate);
      }
    }
  }, [value]);

  return (
    <View>
      {open && (
        <DatePicker
          modal
          mode="datetime"
          locale="vi"
          is24hourSource="locale"
          open={open}
          date={dateValue}
          onConfirm={date => {
            setOpen(false);
            setDateValue(date);
            onDateChange(date);
          }}
          onCancel={() => setOpen(false)}
        />
      )}
      <Pressable onPress={() => setOpen(true)}>
        <Image
          style={{width: 16, height: 16}}
          source={require('../../assets/images/calendar.png')}
        />
      </Pressable>
    </View>
  );
};

export default CustomDateTimePicker;
