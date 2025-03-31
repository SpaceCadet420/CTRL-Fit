import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Inventory from './pages/inventory';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';
import Quests from './pages/quests';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="p-4 max-w-md mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
