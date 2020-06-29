// import React from 'react';
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWalking } from '@fortawesome/free-solid-svg-icons';
// import key from '../../../MapAPI'

// const style= {
//   height: "80%",
//   width: "80%",
// }

// const options = {
//   disableDefaultUI: true,
// }

// const makeMarkers = (attractions, iconUrl) => {
//   return attractions.map((attraction) => (
//     <Marker
//       position={attraction.location}
//       icon={{
//         url: iconUrl,
//         scaledSize: new google.maps.Size(15, 15),
//       }}
//     />
//   ))
// }

// const FullScreenMap = ({ center, attractions, restaurants, fullScreen }) => {
//   const {isLoaded, loadError} = useLoadScript({ 
//     googleMapsApiKey: key,
//   });

//   if (loadError) return "Error loading map";
//   if (!isLoaded) return "loading map";
//   if (!fullScreen) {
//       return null
//   } else {
//     return (
//       <GoogleMap 
//         mapContainerStyle={style} 
//         zoom={10}
//         center={center}
//         options={options}
//       >
//         <Marker position={center} />
//         {makeMarkers(attractions,"https://cdn2.iconfinder.com/data/icons/building-vol-1-6/512/12-512.png")}
//         {makeMarkers(restaurants, "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png")}
//       </GoogleMap>
//     )
//   }
// }
// export default FullScreenMap;