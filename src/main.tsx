import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import App from './App';
import HMOPage from './HMOPage';
import { InsurancePage } from '../components/ui/InsurancePage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/consulting" element={<App />} />
        <Route path="/hmo" element={<HMOPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
