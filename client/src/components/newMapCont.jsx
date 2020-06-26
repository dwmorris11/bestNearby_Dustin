import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import key from '../../../MapAPI.js';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const style = {
      width: '300px',
      height: '300px'
    }
    return (
      <div style={style}>
        <Map 
          google={this.props.google}
        />
        </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: key
  })(MapContainer)
