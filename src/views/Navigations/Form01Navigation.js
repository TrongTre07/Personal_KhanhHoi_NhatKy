import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
  Button,
} from 'react-native';
import React from 'react';
import Form01adx01 from '../Form01adx01/Form01adx01';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Form01adx01Diary from '../Form01adx01/Form01adx01Diary';
import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from './styles';
import Storage from '../../utils/storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {HeaderBackButton} from '@react-navigation/stack';
import {UserContext} from '../../contexts/UserContext';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Form01Navigation = () => {
  const navigation = useNavigation();
  const netInfo = useNetInfo();

  const {setData} = React.useContext(UserContext);

  const handleNavigateForm01adx01 = async () => {
    navigation.navigate('form01adx01');
  };

  const CustomIconBack = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          setData({});
        }}>
        <Icon name="arrowleft" size={20} color="#000" />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.btnText, {color: 'red'}]}>
                Nhật ký khai thác thủy sản
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => handleNavigateForm01adx01()}>
                <View style={[styles.btn, {backgroundColor: '#33CC00'}]}>
                  <Text style={[styles.btnText, {color: '#fff'}]}>Tạo</Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
        name="form01adx01Diary"
        component={Form01adx01Diary}
      />

      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => <CustomIconBack />,
        }}
        name="form01adx01"
        component={Form01adx01}
      />
    </Stack.Navigator>
  );
};

export default Form01Navigation;
