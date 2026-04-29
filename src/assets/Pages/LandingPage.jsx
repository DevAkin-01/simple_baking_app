import React from 'react'
import "../Styles/LandingPage.css"
const LandingPage = () => {
  return (
    <div>
      <div>
    <header className=" HeaderContainer">
      <section className="HeaderHolder">
        <div className="left">
          <h2>The Curve Bank</h2>
        </div>
        <div className="right">
            <p>John Doe</p>
            <button className="login_btn">Logout</button>
        </div>
      </section>
    </header>
    <div className="dashboard-container">
      <main className="main-content">
        <div className="layout-grid">
          
          <section className="transfer-card">
            <h2>Transfer Funds</h2>
            <form className="transfer-form">
              <div className="input-group">
                <label>From Account</label>
                <select>
                  <option>Personal Checking (...1234)</option>
                </select>
              </div>

              <div className="input-group">
                <label>Recipient Full Name</label>
                <input type="text" placeholder="E.g., Jane Smith" />
              </div>

              <div className="input-group">
                <label>Recipient Account Number</label>
                <input type="text" placeholder="E.g., 987654321" />
              </div>

              <div className="input-group">
                <label>Amount</label>
                <div className="currency-input">
                  <span>₦</span>
                  <input type="number" placeholder="0.00" />
                </div>
              </div>

              <div className="input-group">
                <label>Memo (Optional)</label>
                <textarea placeholder="Rent, dinner, etc."></textarea>
              </div>

              <button type="submit" className="send-btn">Send Transfer</button>
            </form>
          </section>

          <aside className="sidebar">
            <div className="balance-card">
              <p className="label">Total Available Balance</p>
              <h3 className="balance-amount">₦12,450.80</h3>
              <p className="sub-label">Across 2 accounts</p>
            </div>

            <div className="history-card">
              <h3>Transaction History</h3>
              <div className="history-item">
                <span>Debit</span>
                <span className="negative">- ₦3,200.00</span>
              </div>
              <div className="history-item">
                <span>Credit</span>
                <span className="positive">+ ₦9,250.80</span>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
      </div>
    </div>
  )
}

export default LandingPage
