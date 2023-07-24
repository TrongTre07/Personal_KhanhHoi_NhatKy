import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        marginBottom:40
    },
    txtHeader:{
        fontSize:50,
        fontWeight:'bold',
        color:'black',
    },
    text:{
        // textAlign:'center',
        fontSize:28,
        color:'white',
        margin:16
    },
    btn:{
        margin:'5%',
        backgroundColor:'#0066FF',
        // width:'100%',
        // alignItems:'center',
        // justifyContent:'center',
        borderRadius:8

    },
    box:{
        backgroundColor:'#fff',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        padding:12
    },


    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',
        marginHorizontal:'15%',
        justifyContent:'center',
        // alignItems:'center',
        padding:20,
        // borderWidth:1,
        // borderRadius:8,

    },
})
export default styles
