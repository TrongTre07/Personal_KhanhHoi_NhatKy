import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
// import DatePicker from 'react-native-date-picker'
import CustomDatePicker from './CustomDatePicker';

const Table3 = ({
    changeNumber,
    departurePort,
    arrivalPort,
    diary,
}) => {
    const [inputValue, setInputValue] = useState({
        changeNumber,
        departurePort,
        arrivalPort,
        diary,
    });


    //date
    const handleDateChange = (name, date) => {
        switch (name) {
            case 'departurePort':
                setInputValue({
                    ...inputValue,
                    departurePort: {
                        ...departurePort,
                        date: date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear(),
                    },
                });
                break;
            case 'arrivalPort':
                setInputValue({
                    ...inputValue,
                    arrivalPort: {
                        ...arrivalPort,
                        date: date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear(),
                    },
                });
                break;
            case 'diary':
                setInputValue({
                    ...inputValue,
                    diary: {
                        ...diary,
                        date: date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear(),
                    },
                });
                break;
        }
    };
    // console.log(inputValue)

    return (

        <View style={[{ borderColor: '#0099FF', borderTopWidth: 0.6 }]}>
            <View style={[styles.row,]}>
                <View style={[styles.row, { width: '33%' }, styles.lineRight]}>
                    <View style={[styles.row, { width: '100%' }]}>
                        <Text style={[styles.text, { fontWeight: '600' }]}>Chuyển biển số:</Text>
                        <TextInput
                            style={[styles.input, styles.text, { fontWeight: '600' }]}
                            onChangeText={(text) => setInputValue({ ...inputValue, changeNumber: text })}
                            value={inputValue.changeNumber}
                        />
                    </View>
                </View>
                <View style={[styles.row, { width: '67%' }]}>
                    <View style={[styles.row]}>

                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> 10. Cảng đi:</Text>
                            <TextInput
                                style={[styles.input, styles.text]}
                                onChangeText={(text) => setInputValue({ ...inputValue, departurePort: { ...departurePort, text } })}
                                value={inputValue.departurePort?.text}
                            />
                        </View>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> Thời gian:</Text>
                            <TextInput
                                style={[styles.input, styles.text]}
                                onChangeText={(text) => setInputValue({ ...inputValue, departurePort: { ...departurePort, date: text } })}
                                value={inputValue.departurePort?.date}
                            />
                            <CustomDatePicker value={departurePort.date} onDateChange={(date) => handleDateChange('departurePort', date)} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.row]}>
                <View style={[styles.row, { width: '33%' }, styles.lineRight]}>
                    <View style={[styles.row, { width: '100%', justifyContent: 'center' }]}>
                        <Text style={styles.text}>(Ghi chuyến biển số mấy trong năm)</Text>
                    </View>
                </View>
                <View style={[styles.row, { width: '67%' }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> 11. Cảng về:</Text>
                            <TextInput
                                style={[styles.input, styles.text]}
                                onChangeText={(text) => setInputValue({ ...inputValue, arrivalPort: { ...arrivalPort, text } })}
                                value={inputValue.arrivalPort?.text}
                            />
                        </View>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> Thời gian:</Text>
                            <TextInput
                                style={[styles.input, styles.text]}
                                onChangeText={(text) => setInputValue({ ...inputValue, arrivalPort: { ...arrivalPort, date: text } })}
                                value={inputValue.arrivalPort?.date}
                            />
                            <CustomDatePicker value={arrivalPort.date} onDateChange={(date) => handleDateChange('arrivalPort', date)} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.row]}>
                <View style={[styles.row, { width: '33%' }, styles.lineRight]}>
                    <View style={[styles.row, { width: '100%' }]}>
                    </View>
                </View>

                <View style={[styles.row, { width: '67%' }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> 12. Nộp nhật ký</Text>
                            <TextInput
                                style={[styles.input, styles.text]}
                                onChangeText={(text) => setInputValue({ ...inputValue, diary: { ...diary, date: text } })}
                                value={inputValue.diary?.date}
                            />
                            <CustomDatePicker value={arrivalPort.date} onDateChange={(date) => handleDateChange('diary', date)} />
                            

                        </View>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> Vào Sổ số:</Text>
                            <TextInput
                                style={[styles.input, styles.text]}
                                onChangeText={(text) => setInputValue({ ...inputValue, diary: { ...diary, text: text } })}
                                value={inputValue.diary?.text}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Table3