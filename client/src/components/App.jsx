import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CurrrentAttInfo from './CurrentAttInfo';
import BestNearByContainer from './BestNearByContainer';
import BestNearByExperience from './BestNearByExperience';
import Map from './Map';
import '../../dist/style.css';
import NearByExperience from './BestNearByExperience';

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
    axios.get(`${this.state.attractionId}api/nearbyattractions`)
      .then((res) => {
        const { attractionId, contact, location, nearByAttractions, nearByRestaurants, nearByExperience} = res.data;
        const attractionDoc = res.data;
        this.setState({
          attractionId,
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
      contact, location, nearByAttractions, nearByRestaurants, nearByExperience 
    } = this.state;
    return (
      <div>
        <Map location={location} 
          restaurants={nearByRestaurants} 
          attractions={nearByAttractions}
        />
        <CurrrentAttInfo contact={contact} />
        <BestNearByContainer location={location} 
          attractions={nearByAttractions}
          experience={nearByExperience}
          restaurants={nearByRestaurants}
        />
        <BestNearByExperience nearByExperience={nearByExperience}/>
      </div>
    );
  }
}
App.PropTypes = {
  attractionId: PropTypes.string.isRequired,
}
export default App;