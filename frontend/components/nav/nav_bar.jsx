import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const NavBar = ({ currentUser, logout, openModal }) => {
  const [isVisible, toggleVisible] = useState(false);

  return(
    <div className="navbar">
      <Link to="/"><img className="logo" src={window.logoURL} /></Link>
      {currentUser ? (
        
        <div className="header-welcome">
          <h2 onClick={() => {toggleVisible(!isVisible)}}>
            Hi, {currentUser.first_name} <i></i>
          </h2>
          <div className={`user-nav${isVisible ? "" : "-hidden"}`}> 
            <div className="arrow-up"></div>
            <Link to={`/users/${currentUser.id}`}>My Profile</Link>
            <a href="#">My Dining History</a>
            <Link to={`/users/${currentUser.id}`}>My Saved Restaurants</Link>
            <a onClick={() => {logout(), toggleVisible(!isVisible)}}>Sign Out</a>
          </div>
        </div>
      ) : (
        <div className="header-nav">
          <button className="sign-up" onClick={() => openModal('signup')}>Sign up</button>
          <button className="sign-in" onClick={() => openModal('login')}>Sign in</button>

        </div>
      )}
    </div>
  )
}

export default NavBar;