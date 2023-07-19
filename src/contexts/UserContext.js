import React, {createContext, useState} from 'react';

const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [something, setSomething] = useState();

  const contextValue = {
    something,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
