import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CurrrentAttInfo from './CurrentAttInfo';
import BestNearByContainer from './BestNearByContainer';
import BestNearByExperience from './BestNearByExperience';
import Map from './Map';
import '../../dist/style.css';
import '../../dist/nearbyatt.css';
import '../../dist/currentatt.css';
import '../../dist/nearbyexperience.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractionId: props.attractionId,
      contact: '',
      location: '',
      nearByAttractions: [],
      nearByRestaurants: [],
      nearByExperience: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { attractionId } = this.state;
    axios.get(`${attractionId}api/nearbyattractions`)
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

  render() {
    const {
      contact, location, nearByAttractions, nearByRestaurants, nearByExperience,
    } = this.state;
    return (
      <div>
        <Map
          location={location}
          restaurants={nearByRestaurants}
          attractions={nearByAttractions}
        />
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
