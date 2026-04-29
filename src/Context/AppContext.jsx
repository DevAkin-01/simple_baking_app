import React, { useReducer, useEffect, createContext } from 'react';

export const AppContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
    }
  }, []);

  const loginAction = (userData) => {
    localStorage.setItem("activeUser", JSON.stringify(userData));
    dispatch({ type: "LOGIN", payload: userData });
  };

  const logoutAction = () => {
    localStorage.removeItem("activeUser");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AppContext.Provider value={{ ...state, loginAction, logoutAction }}>
      {children}
    </AppContext.Provider>
  );
};