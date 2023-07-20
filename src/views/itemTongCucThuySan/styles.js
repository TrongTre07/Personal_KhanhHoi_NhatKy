
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerTable:{
        flex: 1,
        padding: 8,
    },

    lineRight:{
        borderColor: '#0099FF',
        borderRightWidth: 0.6,
    },
    container: {
        // flex: 1,
        paddingHorizontal: 8,
        paddingTop:8,
        backgroundColor: '#fff',
        borderColor: '#0099FF',
        borderWidth: 0.6,
    },
    txtHeader:{
        color:'black',
        fontSize:14,
        fontWeight:'bold'
    },
    header: {
        alignItems: 'center',

    },
    row: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize:12,
        color:'black'
    },
    input: {
        flex: 1,
        height: 22,
        // backgroundColor:'red',
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        paddingVertical:0
    },
});

export default styles;
