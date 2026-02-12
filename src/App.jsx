import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import CheckIn from './components/CheckIn';
import Journal from './components/Journal';
import Insights from './components/Insights';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

const Navigation = () => {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/signin');
    } catch {
      console.error("Failed to log out");
    }
  }

  // Hide navigation on auth pages if user is not logged in, or just show minimal
  if (['/signin', '/signup'].includes(location.pathname)) {
    return null;
  }

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
      <Link to="/checkin" className={location.pathname === '/checkin' ? 'active' : ''}>Check-In</Link>
      <Link to="/journal" className={location.pathname === '/journal' ? 'active' : ''}>Journal</Link>
      <Link to="/insights" className={location.pathname === '/insights' ? 'active' : ''}>Insights</Link>

      <div style={{ float: 'right' }}>
        {currentUser ? (
          <button onClick={handleLogout} className="logout-btn">Log Out</button>
        ) : (
          <Link to="/signin">Log In</Link>
        )}
      </div>
    </nav>
  );
};

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/signin" />;
};

// Wrapper for Navigation if needed, or just use Navigation directly since it is inside Router in App
const NavigationWrapper = () => {
  return <Navigation />;
}


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <div className="header-flex">
            <h1>🌿 Soulitude</h1>
          </div>
          <NavigationWrapper />

          <Routes>
            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/checkin" element={<PrivateRoute><CheckIn /></PrivateRoute>} />
            <Route path="/journal" element={<PrivateRoute><Journal /></PrivateRoute>} />
            <Route path="/insights" element={<PrivateRoute><Insights /></PrivateRoute>} />

            {/* Public Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
