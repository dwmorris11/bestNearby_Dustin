import React from 'react';

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      //actual DOM node, not jsx 
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 10;
      let lat = 36;
      let lng = 36;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
          center: center,
          zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    };

  }

  render() {
    return (
      <div ref='map'>
          Loading map...
      </div>
    )
  }
 }