import React from 'react';
import './Home.css';
import Sajek from '../../Image/Sajek.png';
import Sreemangol from '../../Image/Sreemongol.png';
import SundorBan from '../../Image/sundorbon.png';
import { Link } from 'react-router-dom';
import HomeNav from '../HomeNav/HomeNav';

const Home = () => {

  
    return (
        <div className="Home-warp">
           <HomeNav></HomeNav>
           <div className="row mt-5">
               <div className="col-md-2">

               </div>                
                   <div className=" offset-md-2 col-md-2 card" style={{backgroundImage:`url(${Sajek})`}}>
                       <Link className="card-btn" to="/book/SAJEK">SAJEK</Link>
                   </div>
                   <div className="col-md-2 card" style={{backgroundImage:`url(${Sreemangol})`}}>
                       <Link className="card-btn" to="/book/SREEMANGAL">SREEMANGAL</Link>
                   </div>
                   <div className="col-md-2 card " style={{backgroundImage:`url(${SundorBan})`}}>
                       <Link className="card-btn" to="/book/SUNDORBANS">SUNDORBANS</Link>
                   </div>
                 </div>

        </div>
    );
};

export default Home;