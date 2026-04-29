import { configureStore } from '@reduxjs/toolkit';
import bankReducer from '../Stores/BankSlice';

export const store = configureStore({
  reducer: {
    bank: bankReducer
  }
});