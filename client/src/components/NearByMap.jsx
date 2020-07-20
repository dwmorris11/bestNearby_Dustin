import React from 'react';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import key from '../../../MapAPI';

// const style = {
//   height: '372px',
// };

// const options = {
//   disableDefaultUI: true,
// };

// const makeMarkers = (attractions, iconUrl) => (
//   attractions.map((attraction) => (
//     <Marker
//       key={attraction._id}
//       position={attraction.location}
//       icon={{
//         url: iconUrl,
//         scaledSize: new google.maps.Size(15, 15),
//       }}
//     />
//   ))
// );

// const NearByMap = ({ center, attractions, restaurants }) => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: key,
//   });

//   if (loadError) return 'Error loading map';
//   if (!isLoaded) return 'loading map';

//   return (
//     <div>
//       <GoogleMap
//         mapContainerStyle={style}
//         zoom={10}
//         center={center}
//         options={options}
//       >
//         <Marker position={center} />
//         {makeMarkers(attractions, 'https://cdn2.iconfinder.com/data/icons/building-vol-1-6/512/12-512.png')}
//         {makeMarkers(restaurants, 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png')}
//       </GoogleMap>
//     </div>
//   );
// };

// NearByMap.propTypes = {
//   center: PropTypes.shape({
//     lat: PropTypes.string,
//     lng: PropTypes.string,
//   }).isRequired,
//   attractions: PropTypes.arrayOf(PropTypes.object).isRequired,
//   restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
const NearByMap = ({ center, attractions, restaurants }) => (
  <div></div>
)
export default NearByMap;
