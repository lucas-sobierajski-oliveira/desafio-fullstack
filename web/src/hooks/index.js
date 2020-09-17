import React from 'react';
import { ToastProvider } from './Toast';
import { AuthProvider } from './AuthContext';

// Import all the providers and put inside it the children
function AppProvider({ children }) {
  return (
    <ToastProvider>
      <AuthProvider>
        { children }
      </AuthProvider>
    </ToastProvider>
  );
}

export default AppProvider;
