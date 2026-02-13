import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import CheckIn from './components/CheckIn';
import Journal from './components/Journal';
import Insights from './components/Insights';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage';
import Chatbot from './components/Chatbot';
import Meditation from './components/Meditation';
import SleepTracker from './components/SleepTracker';
import './App.css';

const Navigation = () => {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/');
    } catch {
      console.error("Failed to log out");
    }
  }

  // Hide navigation on auth pages and landing page if not logged in
  const hideNavRoutes = ['/signin', '/signup'];
  if (hideNavRoutes.includes(location.pathname) || (!currentUser && location.pathname === '/')) {
    return null;
  }

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
      <Link to="/checkin" className={location.pathname === '/checkin' ? 'active' : ''}>Check-In</Link>
      <Link to="/journal" className={location.pathname === '/journal' ? 'active' : ''}>Journal</Link>
      <Link to="/insights" className={location.pathname === '/insights' ? 'active' : ''}>Insights</Link>
      <Link to="/chat" className={location.pathname === '/chat' ? 'active' : ''}>AI Chat</Link>
      <Link to="/meditation" className={location.pathname === '/meditation' ? 'active' : ''}>Meditate</Link>
      <Link to="/sleep" className={location.pathname === '/sleep' ? 'active' : ''}>Sleep</Link>

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


const RootRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Dashboard /> : <LandingPage />;
};

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
            <Route path="/" element={<RootRoute />} />
            <Route path="/checkin" element={<PrivateRoute><CheckIn /></PrivateRoute>} />
            <Route path="/journal" element={<PrivateRoute><Journal /></PrivateRoute>} />
            <Route path="/insights" element={<PrivateRoute><Insights /></PrivateRoute>} />
            <Route path="/chat" element={<PrivateRoute><Chatbot /></PrivateRoute>} />
            <Route path="/meditation" element={<PrivateRoute><Meditation /></PrivateRoute>} />
            <Route path="/sleep" element={<PrivateRoute><SleepTracker /></PrivateRoute>} />

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
