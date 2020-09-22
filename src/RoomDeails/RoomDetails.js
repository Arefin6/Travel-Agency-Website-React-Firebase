import React from 'react';
import './RoomDetails.css';
import room1 from '../Image/Rectangle 26.png';
import room2 from '../Image/Rectangle 27.png';
import room3 from '../Image/Rectangle 28.png';
import startIcon from '../Icon/star_1_.png';
import Maps from '../components/Maps/Maps';
const RoomDetails = (props) => {
 
    return (
        <div className="row container pl-4">
           <div className="col-md-8 p-5">
                
                <p className="mt-3 text">252 stays Apl13-17 5 guests</p>
               <h3 className="mb-3 heading-primary">Stay in {props.name}</h3>
                
             <div className="row room d-flex mb-3 p-4">
                 <img src={room1} alt=""/>
                  <div className="room-details ml-4">
                     <h4>Light bright airy stay</h4>
                     <p className="text">
                       4 guests 2 bedrooms 2 bed 2 baths
                       <br/>
                       <br/>
                       wif Air conditioning kitchen
                       <br/>
                       <br/>
                       cancellation facility available
                     </p>
                     <div className="d-flex rating">
                       <img src={startIcon} alt=""/>
                        <p className="mr-4 mt-3">4.9(20)</p>
                        <p className="mt-3">$34/<span className="text">night</span> </p>  
                     </div>
                  </div>
             </div>
             <div className="row room d-flex mb-3 p-4">
             <img src={room2} alt=""/>
                  <div className="room-details ml-4">
                  <h4>Apartment in Las Palmas</h4>
                     <p className="text">
                       4 guests 2 bedrooms 2 bed 2 baths
                       <br/>
                       <br/>
                       wif Air conditioning kitchen
                       <br/>
                       <br/>
                       cancellation facility available
                     </p>
                     <div className="d-flex rating">
                       <img src={startIcon} alt=""/>
                        <p className="mr-4 mt-3">4.8(10)</p>
                        <p className="mt-3">$52/<span className="text">night</span> </p>  
                     </div>
                  </div>
             </div>
             <div className="row room d-flex p-4" >
             <img src={room3} alt=""/>
                  <div className="room-details ml-4">
                  <h4>Ar Lounge and Pool</h4>
                     <p className="text">
                       4 guests 2 bedrooms 2 bed 2 baths
                       <br/>
                       <br/>
                       wif Air conditioning kitchen
                       <br/>
                       <br/>
                       cancellation facility available
                     </p>
                     <div className="d-flex rating">
                       <img src={startIcon} alt=""/>
                        <p className="mr-4 mt-3">4.9(25)</p>
                        <p className="mt-3">$44/<span className="text">night</span> </p>  
                     </div>
                  </div>
             </div>
           </div>
           <div className="col-md-4 p-4 maps">
             <Maps></Maps>
           </div>
        </div>
    );
};

export default RoomDetails;