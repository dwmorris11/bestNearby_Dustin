import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import key from '../../../MapAPI'
import { getAreaOfPolygon } from 'geolib';

const style = {
  width: '300px',
  height: '300px'
}


// below not working for some reason... In line map instead
// const makeAttractionMarkers = (attractions) => {
//   attractions.map((attraction) =>  (
//       <Marker position={attraction.location} />
//     )
//   )
// }


const MapContainer =({ location, attractions, restaurants }) => {
  return (
    <div className="map">
      <Map 
        google={window.google} 
        style={style} 
        initialCenter={location} 
        zoom={10}
      >
        <Marker 
          position={location}
          icon={{
            url: "https://previews.123rf.com/images/siamimages/siamimages1604/siamimages160401095/55225205-5-star-hotel-icon-illustration-design.jpg",
            scaledSize: new google.maps.Size(30, 30),
          }}
        />
        {attractions.map((attraction) => {
          return (
            <Marker 
              position={attraction.location} 
              icon={{ 
                url: "https://cdn2.iconfinder.com/data/icons/building-vol-1-6/512/12-512.png",
                scaledSize: new google.maps.Size(15, 15),
              }}
            />
          )
        })}
        {restaurants.map((restaurant) => {
          return (
            <Marker 
              position={restaurant.location} 
              icon={{ 
                url:"https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png",
                scaledSize: new google.maps.Size(15, 15),
              }}
            />
          )
        })}
      </Map>
    </div>
  );
}

 
export default GoogleApiWrapper({
  apiKey: (key)
})(MapContainer)