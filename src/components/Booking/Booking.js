import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Booking.css';
import calenderLogo from '../../Icon/calender_icon.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeNav from '../HomeNav/HomeNav';


const Booking = () => {
    const{name}=useParams();    
    
    const[startdate,setStartDate] =useState(new Date());

    return (
        <div className="Home-warp">
             <HomeNav></HomeNav>
             <div className="row container">
                <div className="col-md-6 pt-5 pr-5 pl-5 text-white">
                    <h1 className="mb-3">{name}</h1>
                    {
                      name==="SREEMANGAL" &&  <p className="p-2"style={{lineHeight:'1.9'}}>
                         Sreemangal is also well known as the tea capital of Bangladesh and for miles around if you look then you can find green carpet of tea gardens on the hill slopes. There are total 163 tea gardens are exists in Bangladesh and these are at different places of the country Bangladesh. 
                      </p>
                    }
                    {
                        name==="SAJEK" &&  <p className="p-2"style={{lineHeight:'1.9'}}>
                        Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town and 95 kilometres (59 mi) north from Rangamati city. 
                     </p> 
                    }
                    {
                         name==="SUNDORBANS" &&  <p className="p-2"style={{lineHeight:'1.9'}}>
                         The name Sundarbans is thought to be derived from sundri or sundari (Heritiera fomes), the name of the large mangrove trees that are most plentiful in the area. The forestland transitions into a low-lying mangrove swamp approaching the coast, which itself consists of sand dunes and mud flats.
                      </p>
                    }
                    
                </div>
        <div className="offset-md-2 col-md-4 bg-white p-4 book-form">
            <form>
                <div className="form-group">
                    <label for="origin">Origin</label>
                    <input type="text" className="form-control"/>
                    
                </div>
                 <div className="form-group">
                        <label for="destination">Destination</label>
                        <input type="text" className="form-control"
                         value={name}/>
                       
                </div>
                <div className="d-flex">
                    <div className="form-group">
                        <label for="from">From</label>
                        <DatePicker className="form-control"
                                selected={startdate}
                                onChange={date => setStartDate(date)}
                            />  
                        <img src={calenderLogo} className="calender-logo" alt=""/>
                    </div>
                    <div className="form-group ml-4">
                        <label for="to">To</label>
                        <DatePicker className="form-control"
                                selected={startdate}
                                onChange={date => setStartDate(date)}
                            />  
                        <img src={calenderLogo} className="calender-logo2" alt=""/>
                    </div>
                </div>
                 
                 <Link to="/hotels" className="btn btn-warning start-btn mt-3">Start Booking</Link>


    
              
          </form>
        </div>
      </div>       
   </div>
    );
};

export default Booking;