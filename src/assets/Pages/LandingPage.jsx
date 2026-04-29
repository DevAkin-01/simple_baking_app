
import { AppContext } from '../../Context/AppContext';
import { transferMoney } from '../../Stores/BankSlice';

import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../Styles/LandingPage.css"

const LandingPage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, logoutAction } = useContext(AppContext);
  
  const allUsers = useSelector((state) => state.bank.users);
  const loggedInUser = allUsers.find((u) => u.id === user?.id);

  const [form, setForm] = useState({ name: "", acc: "", amt: "", memo: "" });

  const handleLogout = () => {
    logoutAction();
    nav('/');
  };

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(transferMoney({
      senderId: user.id,
      receiverAcc: form.acc,
      amount: Number(form.amt),
      memo: form.memo || `Transfer to ${form.name}`
    }));
    setForm({ name: "", acc: "", amt: "", memo: "" });
  };

  return (
    <div className="dashboard-container">
      <header className="HeaderContainer">
        <section className="HeaderHolder">
          <div className="left">
            <h2 className="logo">The Curve Bank</h2>
          </div>
          <div className="right">
            <p>{user?.name}</p>
            <button className="login_btn" onClick={handleLogout}>Logout</button>
          </div>
        </section>
      </header>

      <main className="main-content">
        <div className="layout-grid">
          <section className="transfer-card">
            <h3>Transfer Funds</h3>
            <form onSubmit={handleSend}>
              <div className="input-group">
                <label>From Account</label>
                <select disabled>
                  <option>Personal Checking (...{loggedInUser?.accNo.slice(-4)})</option>
                </select>
              </div>

              <div className="input-group">
                <label>Recipient Full Name</label>
                <input 
                  value={form.name} 
                  onChange={(e) => setForm({...form, name: e.target.value})} 
                  placeholder="E.g., Jane Smith" 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Recipient Account Number</label>
                <input 
                  value={form.acc} 
                  onChange={(e) => setForm({...form, acc: e.target.value})} 
                  placeholder="E.g., 987654321" 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Amount</label>
                <div className="currency-input">
                  <span>₦</span>
                  <input 
                    type="number" 
                    value={form.amt} 
                    onChange={(e) => setForm({...form, amt: e.target.value})} 
                    placeholder="0.00" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Memo (Optional)</label>
                <textarea 
                  value={form.memo} 
                  onChange={(e) => setForm({...form, memo: e.target.value})} 
                  placeholder="Rent, dinner, etc." 
                />
              </div>

              <button type="submit" className="send-btn">Send Transfer</button>
            </form>
          </section>

          <aside className="sidebar">
            <div className="balance-card">
              <p className="sub-label">Total Available Balance</p>
              <h1 className="balance-amount">₦{loggedInUser?.balance.toLocaleString()}</h1>
              <p className="sub-label">Across 1 account</p>
            </div>

            <div className="history-card">
              <h3>Transaction History</h3>
              {loggedInUser?.history.map((item, index) => (
                <div key={index} className="history-item">
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: '600' }}>{item.type}</div>
                    <div className="sub-label" style={{ fontSize: '10px' }}>{item.label}</div>
                  </div>
                  <div className={item.type === 'Debit' ? 'negative' : 'positive'}>
                    {item.type === 'Debit' ? '-' : '+'} ₦{item.amount.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;