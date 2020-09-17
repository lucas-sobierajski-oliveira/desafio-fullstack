import React, { createContext, useReducer, useContext } from 'react';
import api from '../services/api';

const initial_state = {
  isAuthenticated: false,
  email: null,
  token: null,
  exp: null,
  name: null,
};

// Get the localStorage data if it exists
function createInitialState(){
  const email = localStorage.getItem('@MyApp/email');
  const token = localStorage.getItem('@MyApp/token');
  const exp = localStorage.getItem('@MyApp/exp');
  const name = localStorage.getItem('@MyApp/name');

  // If exists at least two fields AND if the token does not
  // has expired put the token in the header
  if(email && token){

    if(Date.now()/1000 < Number(exp)){

      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        isAuthenticated : true,
        email,
        token,
        exp,
        name
      }
    }

  }

  return {
    isAuthenticated: false,
    email: null,
    token: null,
    exp: null,
    name: null,
  }

}

const AuthContext = createContext();

// Reducer function who receive the dispatch
const reducer = (state, action) => {
  switch(action.type) {

    // Save the payload on localStorage, put the token in the header
    // and set true isAuthenticated
    case "@LOGIN":
      localStorage.setItem('@MyApp/email', action.payload.user);
      localStorage.setItem('@MyApp/name', action.payload.name);

      localStorage.setItem('@MyApp/token', action.payload.token );
      localStorage.setItem('@MyApp/exp', action.payload.exp);

      api.defaults.headers.authorization = `Bearer ${action.payload.token}`;

      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        token: action.payload.token,
        exp: action.payload.exp,
        name: action.payload.name,
      };

    // Remove all data on localStorage and set false isAuthenticated
    case "@SAIR":
      localStorage.removeItem('@MyApp/email');
      localStorage.removeItem('@MyApp/name');
      localStorage.removeItem('@MyApp/token');
      localStorage.removeItem('@MyApp/exp');


      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        exp: null,
        name: null,
      };
    default:
      return state;
  }
}


function AuthProvider({children}) {

  // create the state using the function createInitialState
  const [state, dispatch] = useReducer(reducer, initial_state, createInitialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
    { children }
    </AuthContext.Provider>
  );
}

// Create a hook named useAuth
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
