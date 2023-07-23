import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const savedLoginStatus = await AsyncStorage.getItem('isLoggedIn');
  //     const savedUser = await AsyncStorage.getItem('user');
  //     setIsLoggedIn(savedLoginStatus === 'true');
  //     setUser(JSON.parse(savedUser));
  //   };

  //   checkLoginStatus();
  // }, []);


  const [something, setSomething] = useState();

  const contextValue = {
    something,
    isLoggedIn
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

