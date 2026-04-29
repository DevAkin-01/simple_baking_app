import { createSlice } from '@reduxjs/toolkit';

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    users: [
      { id: 1, name: "Azeez", password: "111", balance: 500000, accNo: "1001", history: [] },
      { id: 2, name: "Toheeb", password: "222", balance: 500000, accNo: "1002", history: [] },
      { id: 3, name: "Pelumi", password: "333", balance: 500000, accNo: "1003", history: [] },
      { id: 4, name: "Daniel", password: "444", balance: 500000, accNo: "1004", history: [] },
      { id: 5, name: "Simi", password: "555", balance: 500000, accNo: "1005", history: [] },
      { id: 6, name: "Somto", password: "666", balance: 500000, accNo: "1006", history: [] },
      { id: 7, name: "Anthony", password: "777", balance: 500000, accNo: "1007", history: [] },
      { id: 8, name: "Maria", password: "888", balance: 500000, accNo: "1008", history: [] },
      { id: 9, name: "Faith", password: "999", balance: 500000, accNo: "1009", history: [] },
      { id: 10, name: "Nanshai", password: "000", balance: 500000, accNo: "1010", history: [] }
    ]
  },
  reducers: {
    transferMoney: (state, action) => {
      const { senderId, receiverAcc, amount, memo } = action.payload;
      const sender = state.users.find(u => u.id === senderId);
      const receiver = state.users.find(u => u.accNo === receiverAcc);

      if (sender && receiver && sender.balance >= amount) {
        sender.balance -= Number(amount);
        receiver.balance += Number(amount);

        sender.history.unshift({
          type: "Debit",
          amount: Number(amount),
          label: memo || `Transfer to ${receiver.name}`,
          date: new Date().toLocaleDateString()
        });

        receiver.history.unshift({
          type: "Credit",
          amount: Number(amount),
          label: `Received from ${sender.name}`,
          date: new Date().toLocaleDateString()
        });
      } else {
        alert("Transfer Failed: Check balance or account number");
      }
    }
  }
});

export const { transferMoney } = bankSlice.actions;
export default bankSlice.reducer;