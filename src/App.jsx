
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Stores/Store';
import { AppProvider } from './Context/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/assets/Components/LogIn';
import LandingPage from '../src/assets/Pages/LandingPage';

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<LandingPage />} />
          </Routes>
        </Router>
      </AppProvider>
    </Provider>
  );
};

export default App;