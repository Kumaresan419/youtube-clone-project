import React from 'react';
import { FaYoutube} from 'react-icons/fa';
import { FaSearch} from 'react-icons/fa';
import { MdKeyboardVoice} from 'react-icons/md';
import { MdNotifications} from 'react-icons/md';
import { FaUser} from 'react-icons/fa';
import { HiMenu} from 'react-icons/hi';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
            <div className="menudrop">
        < HiMenu className="drop" />
      
      </div>
      <div className="logo">
        <FaYoutube className="youtube-icon" />
      
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit"><FaSearch/></button>
      
      </div>
      <div className='mike'>
        <button className='mike'><MdKeyboardVoice/></button>
        </div>
      <div className="user-menu">
        <button className="user"><MdNotifications/></button>
        <span className="user-name"><FaUser/></span>
      </div>
    </nav>
  );
}

export default Navbar;
