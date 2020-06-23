import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  fetchData() {
    axios.get('localhost:3003/api/nearbyattractions/004')
      .then((data) => console.log(data))
  }

  onComponentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>Start Up</div>
    )
  }
}

export default App;