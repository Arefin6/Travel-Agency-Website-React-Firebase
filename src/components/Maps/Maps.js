import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const Maps = (props) => {
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
    return (
        <div>
         <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
         <Marker position={{ lat: 48.00, lng: -122.00}} />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBbEF9Fawnc1kuTAMjMauOg3brlvU28QJg'
  })(Maps);