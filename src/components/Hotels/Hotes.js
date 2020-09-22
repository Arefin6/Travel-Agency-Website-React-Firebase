import React from 'react';
import { useParams } from 'react-router-dom';
import RoomDetails from '../../RoomDeails/RoomDetails';
import Header from '../Header/Header';

const Hotes = () => {
    const{name} = useParams();
    return (
        <div>
           <Header donotShowLogin={true} ></Header> 
           <RoomDetails name ={name}></RoomDetails>

        </div>
    );
};

export default Hotes;