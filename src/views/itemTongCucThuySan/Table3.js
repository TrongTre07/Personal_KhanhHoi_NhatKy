import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Table3 = () => {
    return (
        <View style={[{ borderColor: '#0099FF', borderTopWidth: 0.8 }]}>
            <View style={[styles.row,]}>
                <View style={[styles.row, { width: '33%'},styles.lineRight]}>
                    <View style={[styles.row, { width: '100%' }]}>
                        <Text style={[styles.text, { fontWeight: '600' }]}>Chuyển biển số:</Text>
                        <TextInput style={[styles.input, styles.text, { fontWeight: '600' }]} />
                    </View>
                </View>
                <View style={[styles.row, { width: '67%' }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> 10. Cảng đi:</Text>
                            <TextInput style={[styles.input, styles.text]} />
                        </View>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}>Thời gian:</Text>
                            <TextInput style={[styles.input, styles.text]} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.row]}>
                <View style={[styles.row, { width: '33%' },styles.lineRight]}>
                    <View style={[styles.row, { width: '100%', justifyContent: 'center' }]}>
                        <Text style={styles.text}>(Ghi chuyến biển số mấy trong năm)</Text>
                    </View>
                </View>
                <View style={[styles.row, { width: '67%' }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> 11. Cảng về:</Text>
                            <TextInput style={[styles.input, styles.text]} />
                        </View>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}>Thời gian:</Text>
                            <TextInput style={[styles.input, styles.text]} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.row]}>
                <View style={[styles.row, { width: '33%' },styles.lineRight]}>
                    <View style={[styles.row, { width: '100%' }]}>
                    </View>
                </View>

                <View style={[styles.row, { width: '67%' }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}> 12. Nộp nhật ký</Text>
                            <TextInput style={[styles.input, styles.text]} />
                        </View>
                        <View style={[styles.row, { width: '50%' }]}>
                            <Text style={styles.text}>Vào Sổ số:</Text>
                            <TextInput style={[styles.input, styles.text]} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Table3