import React from 'react';
import './App.css';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { TermAndServices } from './components/TermAndServices';
import { Dashboard } from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/terms" element={<TermAndServices />} />
        <Route path="/dashboard" element={<Dashboard />} />       
      </Routes>
    </div>
  );
}

export default App;
