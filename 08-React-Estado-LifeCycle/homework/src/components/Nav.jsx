import React from 'react';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className='navbar navbar-expand-lg bg-dark'>
      <div className='container-fluid'>
        <a  className='navbar-brand nav-link' href="#">
          <img src={Logo} alt="img not found" />
          <span> Henry weather app</span>
        </a>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
