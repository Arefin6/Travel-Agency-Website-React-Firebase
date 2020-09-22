import React from 'react';
import logo from '../../Logo.png';

const Header = (props) => {
   const style = {
     display:"none"
   }
    return (
        <div className="bg-dark">     
    <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
       
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Destination</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <button style={props && style} className="btn btn-warning">Login</button>
          </ul>
        
        </div>
    </nav>
 </div>
     
    );
};

export default Header;