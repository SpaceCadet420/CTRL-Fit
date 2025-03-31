import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex gap-4">
        <li><Link to="/" className="text-white text-lg hover:underline">Home</Link></li>
        <li><Link to="/inventory" className="text-white text-lg hover:underline">Inventory</Link></li>
        <li><Link to="/profile" className="text-white text-lg hover:underline">Profile</Link></li>
        <li><Link to="/quests" className="text-white text-lg hover:underline">Quest Log</Link></li>
        <li><Link to="/dashboard" className="text-white text-lg hover:underline">GM Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
