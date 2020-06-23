import React from 'react';
import axios from 'axios';

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
        console.log(this.state)
      })
  }

  componentDidMount() {
    this.fetchData()
    
  }

  render() {
    return (
      <div>
      <div>Start Up</div>
      </div>
    )
  }
}

export default App;