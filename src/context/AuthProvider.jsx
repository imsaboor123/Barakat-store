import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {

 
  return (
    <AuthContext.Provider value={{ }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
