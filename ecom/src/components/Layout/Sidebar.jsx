import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar-container ${isOpen ? '' : 'collapsed'}`}>
      <div className="sidebar-header">
        <h2 className="logo">
          <span className="logo-icon">🛍️</span>
          {isOpen && <span className="logo-text">Ecom</span>}
        </h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="icon">🏠</span>
              {isOpen && <span className="link-text">Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="icon">📦</span>
              {isOpen && <span className="link-text">Orders</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="icon">🛒</span>
              {isOpen && <span className="link-text">Products</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="icon">🧑‍🤝‍🧑</span>
              {isOpen && <span className="link-text">Customers</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="icon">📈</span>
              {isOpen && <span className="link-text">Analytics</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;