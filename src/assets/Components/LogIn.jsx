import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppContext } from '../../Context/AppContext';
import "../Styles/LogIn.css"

const Login = () => {
  const nav = useNavigate();
  const { loginAction } = useContext(AppContext);
  const users = useSelector((state) => state.bank.users);

  const handleLogin = (e) => {
    e.preventDefault();

    const inputName = e.target.username.value;
    const inputPass = e.target.password.value;

    const authenticatedUser = users.find(
      (u) => u.name.toLowerCase() === inputName.toLowerCase() && u.password === inputPass
    );

    if (authenticatedUser) {
      loginAction(authenticatedUser);
      nav('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input 
            name="username"
            type="text" 
            placeholder="Username" 
            className="login-input" 
            required
          />
          <input 
            name="password"
            type="password" 
            placeholder="Password" 
            className="login-input" 
            required
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