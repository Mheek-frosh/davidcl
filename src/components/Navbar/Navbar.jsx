import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = ({ onSearchClick, onCartClick, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSignOut = () => {
    signOut();
    setProfileOpen(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#collections" className="nav-link">Collections</a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger-btn"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className="navbar-logo">
          <Link to="/">DAVID CLOTHINGS</Link>
        </div>

        <div className="navbar-icons">
          {/* Search */}
          <button className="icon-btn" aria-label="Search" onClick={onSearchClick}>
            <span className="icon-text">Search</span>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Cart */}
          <button className="icon-btn cart-icon-btn" aria-label="Cart" onClick={onCartClick}>
            <span className="icon-text">Cart</span>
            <span className="cart-icon-wrap">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </span>
          </button>

          {/* Account — profile dropdown if logged in, else link */}
          {user ? (
            <div className="profile-wrap" ref={profileRef}>
              <button
                className="profile-avatar-btn"
                onClick={() => setProfileOpen(o => !o)}
                aria-label="Account menu"
              >
                <span className="avatar-initials">{user.avatar}</span>
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  {/* User info */}
                  <div className="profile-dropdown-header">
                    <div className="profile-avatar-large">{user.avatar}</div>
                    <div className="profile-dropdown-info">
                      <p className="profile-dropdown-name">{user.name}</p>
                      <p className="profile-dropdown-email">{user.email}</p>
                    </div>
                  </div>

                  <div className="profile-dropdown-divider"></div>

                  {/* Stats */}
                  <div className="profile-dropdown-stats">
                    <div className="profile-stat">
                      <span className="profile-stat-value">{user.orders}</span>
                      <span className="profile-stat-label">Orders</span>
                    </div>
                    <div className="profile-stat-divider"></div>
                    <div className="profile-stat">
                      <span className="profile-stat-value">{user.joinDate.split(' ')[1]}</span>
                      <span className="profile-stat-label">Member since</span>
                    </div>
                  </div>

                  <div className="profile-dropdown-divider"></div>

                  {/* Menu items */}
                  <nav className="profile-dropdown-menu">
                    <Link to="/account" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      My Profile
                    </Link>
                    <Link to="/orders" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                      My Orders
                    </Link>
                    <Link to="/wishlist" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      Wishlist
                    </Link>
                    <Link to="/settings" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                      Settings
                    </Link>
                  </nav>

                  <div className="profile-dropdown-divider"></div>

                  <button className="profile-signout-btn" onClick={handleSignOut}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signin" className="icon-text-link">
              <span className="icon-text">Account</span>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <a href="#shop" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Shop</a>
        <a href="#collections" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Collections</a>
        {user ? (
          <>
            <Link to="/account" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>My Profile</Link>
            <Link to="/orders" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>My Orders</Link>
            <button className="mobile-nav-link mobile-signout" onClick={() => { handleSignOut(); setMobileMenuOpen(false); }}>Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
            <Link to="/create-account" className="mobile-nav-link mobile-nav-link-accent" onClick={() => setMobileMenuOpen(false)}>Create Account</Link>
          </>
        )}
        <button className="mobile-nav-link mobile-search-link" onClick={() => { setMobileMenuOpen(false); onSearchClick(); }}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
