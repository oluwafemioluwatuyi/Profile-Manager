import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <NavLink exact to="/" className="sidebar-link">
          Profile
        </NavLink>
        <NavLink to="/settings" className="sidebar-link">
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

