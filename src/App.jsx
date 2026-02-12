import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CheckIn from './components/CheckIn';
import Journal from './components/Journal';
import Insights from './components/Insights';
import './App.css';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
      <Link to="/checkin" className={location.pathname === '/checkin' ? 'active' : ''}>Check-In</Link>
      <Link to="/journal" className={location.pathname === '/journal' ? 'active' : ''}>Journal</Link>
      <Link to="/insights" className={location.pathname === '/insights' ? 'active' : ''}>Insights</Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🌿 Soulitude</h1>
        <Navigation />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
