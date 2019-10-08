import React, {useState} from 'react';


const NavBar = ({ currentUser, logout, openModal }) => {
  const [isVisible, toggleVisible] = useState(false);

  return(
    <div className="navbar">
      <img className="logo" src={window.logoURL}/>
      {currentUser ? (
        
        <div className="header-welcome">
          <h2 onClick={() => {toggleVisible(!isVisible)}}>
            Hi, {currentUser.first_name} <i></i>
          </h2>
          {/* OTHER NAV LINKS: my profile,
          my dining history,
          my saved restaurants */}
          <div className={`user-nav${isVisible ? "" : "-hidden"}`}> 
            <div className="arrow-up"></div>
            <a href="#">My Profile</a>
            <a href="#">My Dining History</a>
            <a href="#">My Saved Restaurants</a>
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