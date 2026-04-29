import React, { useReducer, useEffect, createContext } from 'react';

export const AppContext = createContext();

const initialState = {
  users: [
    { id: 1, name: "Azeez", password: "111", balance: 500000, accNo: "1001" },
    { id: 2, name: "Toheeb", password: "222", balance: 500000, accNo: "1002" },
    { id: 3, name: "Pelumi", password: "333", balance: 500000, accNo: "1003" },
    { id: 4, name: "Daniel", password: "444", balance: 500000, accNo: "1004" },
    { id: 5, name: "Simi", password: "555", balance: 500000, accNo: "1005" },
    { id: 6, name: "Somto", password: "666", balance: 500000, accNo: "1006" },
    { id: 7, name: "Anthony", password: "777", balance: 500000, accNo: "1007" },
    { id: 8, name: "Maria", password: "888", balance: 500000, accNo: "1008" },
    { id: 9, name: "Faith", password: "999", balance: 500000, accNo: "1009" },
    { id: 10, name: "Nanshai", password: "000", balance: 500000, accNo: "1010" }
  ],
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "TRANSFER":
      const { amount, toAcc } = action.payload;
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === state.user.id) return { ...u, balance: u.balance - amount };
          if (u.accNo === toAcc) return { ...u, balance: u.balance + amount };
          return u;
        }),
        user: { ...state.user, balance: state.user.balance - amount }
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedId = localStorage.getItem("UserID");
    if (storedId) {
      const found = state.users.find(u => u.id === Number(storedId));
      if (found) dispatch({ type: "LOGIN", payload: found });
    }
  }, []);

  const loginAction = (userData) => {
    localStorage.setItem("UserID", userData.id);
    dispatch({ type: "LOGIN", payload: userData });
  };

  const transferAction = (amount, toAcc) => {
    dispatch({ type: "TRANSFER", payload: { amount: Number(amount), toAcc } });
  };

  return (
    <AppContext.Provider value={{ ...state, loginAction, transferAction }}>
      {children}
    </AppContext.Provider>
  );
};