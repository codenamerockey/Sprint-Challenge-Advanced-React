import React from 'react';
import './App.css';
import axios from 'axios';
import SoccerPlayer from './SoccerPlayer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(res => {
      console.log(res.data);
      this.setState({ players: res.data });
    });
  }
  render() {
    return (
      <div className="App">
        <SoccerPlayer players={this.state.players} />
      </div>
    );
  }
}

export default App;
