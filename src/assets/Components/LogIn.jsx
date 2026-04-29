 import React from 'react';
import "../Styles/LogIn.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        
        <form className="login-form">
          <input 
            type="email" 
            placeholder="email address" 
            className="login-input" 
          />
          <input 
            type="password" 
            placeholder="password" 
            className="login-input" 
          />
          
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        <button className='sign_up'>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;



