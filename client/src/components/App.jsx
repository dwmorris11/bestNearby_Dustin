import React from 'react';
import axios from 'axios';
import CurrrentAttInfo from './CurrentAttInfo.jsx';

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
    axios.get('api/nearbyattractions/001')
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
      
      </div>
    )
  }
}

export default App;