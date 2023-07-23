import { ScrollView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { UserContext, UserContextProvider } from './src/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/views/login/Login';
import 'react-native-gesture-handler';
import Form01adx01 from './src/views/Form01adx01/Form01adx01';
import AppNavigation from './src/views/Navigations/AppNavigation';
import Menu from './src/views/Home/Menu';


const Abc = ()=>{
  const { isLoggedIn } = useContext(UserContext);

  return (
  <NavigationContainer>
  {isLoggedIn ? <Login /> : < AppNavigation/>}
</NavigationContainer>)
}

const App = () => {

  return (
    <UserContextProvider>
      <View style={styles.container}>
        <Abc />
      </View>
    </UserContextProvider>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
});
