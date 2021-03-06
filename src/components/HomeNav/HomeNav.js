import {faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import './HomeNav.css';

const HomeNav = () => {
    return (
   <div className="container">     
    <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <form class=" search">
            
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input class="form-control search-text" type="search" placeholder="Search your Destination.."
            />
          </form>
          <ul class="navbar-nav  mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Destination</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <Link to="/login" className="btn btn-warning ml-4">Login</Link>
          </ul>
        
        </div>
    </nav>
 </div>
     
    );
};

export default HomeNav;