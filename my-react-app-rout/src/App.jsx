// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Overview from './pages/overview/overview';
import Other from './pages/other/other';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="*" element={<Other />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
