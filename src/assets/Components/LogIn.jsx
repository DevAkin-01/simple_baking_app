import React, { useContext } from 'react';
import "../Styles/LogIn.css";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const Login = () => {
  const nav = useNavigate();
  const { users, loginAction } = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const inputName = e.target.username.value;
    const inputPass = e.target.password.value;

    const CorrectUser = users.find(
      (u) => u.name.toLowerCase() === inputName.toLowerCase() && u.password === inputPass
    );

    if (CorrectUser) {
      loginAction(CorrectUser);
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
          />
          <input 
            name="password"
            type="password" 
            placeholder="Password" 
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