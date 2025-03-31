import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/inventory" className="text-white">Inventory</Link></li>
        <li><Link to="/profile" className="text-white">Profile</Link></li>
        <li><Link to="/quests" className="text-white">Quest Log</Link></li>
        <li><Link to="/dashboard" className="text-white">GM Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
