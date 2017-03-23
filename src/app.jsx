import React, { Component} from 'react';
import Clock from './clock';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline : 'June 17, 2017',
      newDeadline : ''
    }
  }
  changeDeadline() {
    this.setState({deadline : this.state.newDeadline});
  }
  render() {
    return (
      <div className="app">
        <div className="title">{this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <input onChange={event => this.setState({newDeadline : event.target.value})} placeholder="enter date"/>
        <button onClick={this.changeDeadline.bind(this)}>submit</button>
      </div>
    )
  }
}
export default App;
