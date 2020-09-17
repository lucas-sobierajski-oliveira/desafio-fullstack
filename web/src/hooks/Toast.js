import React, { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from '../components/ToastContainer';

import uuid from 'uuid';

const ToastContext = createContext({});


function ToastProvider ({ children }) {
  const [msg, setMsg] = useState([]);

  // Function that create a new toast and push it to msg array
  const createToast = useCallback(({ type, description })=>{
    const id = uuid();

    const toast = {
      id,
      type,
      description
    };

    setMsg((oldMsg)=> [...oldMsg, toast]);

  }, []);

  // Function that delete a toast from msg array
  const deleteToast = useCallback((id)=>{
    setMsg(state => state.filter(msg => msg.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        createToast,
        deleteToast
      }}
    >
      { children }
      <ToastContainer messages={msg} />
    </ToastContext.Provider>
  );
}

//Create useToast hook
function useToast() {
  const context = useContext(ToastContext);
  return context;
}

export { ToastProvider, useToast };
