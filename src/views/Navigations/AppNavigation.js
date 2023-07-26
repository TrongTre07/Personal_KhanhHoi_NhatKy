import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Form01adx01 from '../Form01adx01/Form01adx01';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Menu from '../Home/Menu';
import Form01adx01Diary from '../Form01adx01/Form01adx01Diary';

const Stack = createStackNavigator();
const AppNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitleStyle: {
          width:'100%'
        }
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="menu" component={Menu}
      />
      <Stack.Screen
         name="form01adx01Diary" 
         component={Form01adx01Diary} 
         options={{ 
            headerTitle: 
              () => (
                <View style={{flexDirection: 'row', alignItems: 'center',width: '100%', justifyContent: 'space-between'}}>
                    <Text style={[styles.btnText,{color:'red'}]}>'01-PLI. Nhật ký khai thác thủy sản'</Text>
                    <TouchableOpacity style={{}}  onPress={() => navigation.navigate('form01adx01')}>
                      <View style={[styles.btn,{backgroundColor:'#33CC00'}]}>
                        <Text style={[styles.btnText,{color:'#fff'}]}>Tạo</Text>
                      </View>
                    </TouchableOpacity>
                </View>
      ),
            
          }}
         />
      <Stack.Screen
         name="form01adx01" 
         component={Form01adx01} 
         options={{ headerTitle: '01-PLI. Nhật ký khai thác thủy sản' ,}}
         />
      <Stack.Screen 
      name="form02adx02" 
      component={Form01adx01} 
      options={{ headerTitle: '02-PLI. Nhật ký thu mua, chuyên tải thủy sản<' ,}}
      
      />
      <Stack.Screen 
      name="form03adx03" 
      component={Form01adx01} 
      options={{ headerTitle: '04-PLI. Báo cáo thăm dò, tìm kiếm, dẫn dụ nguồn lợi thủy sản' ,}}
      
      />
    </Stack.Navigator>
  )
}

export default AppNavigation;


const styles = StyleSheet.create({
  
  textHead:{
    textAlign: 'center', 
    padding:3,
    fontSize:16,
    color: '#fff',
    fontWeight:'600'
  },
  btn:{
    borderRadius:8,
    margin:3
  
  },
  btnText:{
    paddingVertical:6,
    paddingHorizontal:14,
    fontSize: 24, 
    fontWeight:'600'
  }
});
