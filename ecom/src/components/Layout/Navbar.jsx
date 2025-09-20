import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  const cartItems = 3; 

  return (
    <nav className="navbar-container">
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <div className="cart-icon-container">
          <span className="cart-badge">{cartItems}</span>
          <span className="cart-icon">🛒</span>
        </div>
        <div className="navbar-user">
          <span className="user-name">Welcome, John Doe</span>
          <div className="user-avatar">JD</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;