import React from 'react';
import { Link } from 'react-router-dom'

import './index.css';

function Nav() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <Link to="/" className="navStyle"><li>Home</li></Link>
          <Link to="/upcomingEvents" className="navStyle"> <li>Upcoming Events</li></Link>
          <Link to="/Profile" className="navStyle"><li>Profile</li></Link>
          <Link to="/createEvent" className="navStyle"><li>Create An Event</li></Link>
        </ul>
      </nav>

      {/* <div className="searchBar">
        <form action="#">
          <input className="input_Search" type="text" placeholder="Search.." name="search" />
          <button className="input_btn" type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div> */}
      <nav className="nav">
        <ul>
          <Link to="/signIn" className="navStyle"><li>Sign In</li></Link>
          <Link to="/register" className="navStyle"><li>Register</li></Link>
        </ul>
      </nav>
    </header>

  );
}

export default Nav;
