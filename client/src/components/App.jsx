import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CurrrentAttInfo from './CurrentAttInfo';
import BestNearByContainer from './BestNearByContainer';
import BestNearByExperience from './BestNearByExperience';
import Map from './Map';
import NearByMap from './NearByMap';
import '../../dist/style.css';
import '../../dist/nearbyatt.css';
import '../../dist/currentatt.css';
import '../../dist/nearbyexperience.css';
import '../../dist/nearbyrest.css'
import FullScreenMap from './FullScreenMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractionId: props.attractionId,
      contact: {},
      location: {},
      nearByAttractions: [],
      nearByRestaurants: [],
      nearByExperience: {},
      fullScreen: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.fullScreenMapView = this.fullScreenMapView.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { attractionId } = this.state;
    axios.get(`${attractionId}api/data`)
      .then((res) => {
        const {
          contact, location, nearByAttractions, nearByRestaurants, nearByExperience,
        } = res.data;
        this.setState({
          contact,
          location,
          nearByAttractions,
          nearByRestaurants,
          nearByExperience,
        });
      })
      .catch((err) => console.log(err));
  }

  fullScreenMapView() {
    let view = !this.fullScreen
    console.log(this.state.fullScreen)
    this.setState({
      fullScreen: view
    })
  }

  render() {
    const {
      contact, location, nearByAttractions, nearByRestaurants, nearByExperience, fullScreen
    } = this.state;
    return (
      <div>
        <div className="map">
          <NearByMap center={location}
          attractions={nearByAttractions}
          restaurants={nearByRestaurants}
          />
        </div>
        <div className="not-map-components">
          <CurrrentAttInfo contact={contact} />
          <BestNearByContainer
            location={location}
            attractions={nearByAttractions}
            experience={nearByExperience}
            restaurants={nearByRestaurants}
          />
          <BestNearByExperience nearByExperience={nearByExperience} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  attractionId: PropTypes.string.isRequired,
};

export default App;
