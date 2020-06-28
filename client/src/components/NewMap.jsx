import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import key from '../../../MapAPI'
const style= {
  height: "372px",
}

const NearByMap = ({ center }) => {
  const {isLoaded, loadError} = useLoadScript({ 
    googleMapsApiKey: key,
  });

  if (loadError) return "Error loading map";
  if (!isLoaded) return "loading map";
  
console.log()
  return (
    <div>
      <GoogleMap 
        mapContainerStyle={style} 
        zoom={10}
        center={center}
      >
      </GoogleMap>
    </div>
  )
}
export default NearByMap;