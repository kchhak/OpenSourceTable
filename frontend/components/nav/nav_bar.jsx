import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  currentUser ? (
    <div className="header-welcome">
      <h2>Hi, {currentUser.first_name}</h2>
      {/* OTHER NAV LINKS: my profile,
      my dining history,
      my saved restaurants */}
      <button onClick={logout}>Sign Out</button>
    </div>
  ) : (
    <div className="header-nav">
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Log in</Link>
    </div>
  )
}

export default NavBar;