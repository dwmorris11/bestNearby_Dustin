import React from 'react';
import axios from 'axios';
import CurrrentAttInfo from './CurrentAttInfo.jsx';
import BestNearByContainer from './BestNearByContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractionId: '',
      contact: '',
      location: '',
      nearByAttractions: [],
      nearByRestaurants: [],
      nearByExperience: [],
    }
    
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('api/nearbyattractions/018')
      .then((data) => {
        const attractionDoc = data.data;
        this.setState({
          attractionId: attractionDoc.attractionId,
          contact: attractionDoc.contact,
          location: attractionDoc.location,
          nearByAttractions: attractionDoc.nearByAttractions,
          nearByRestaurants: attractionDoc.nearByRestaurants,
          nearByExperience: attractionDoc.nearbyExperience,
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <CurrrentAttInfo contact={this.state.contact}/>
        <BestNearByContainer location={this.state.location} attractions={this.state.nearByAttractions} experience={this.state.nearByExperience} restaurants={this.state.nearByRestaurants}/>
      </div>
    )
  }
}

export default App;