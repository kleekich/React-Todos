import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const todos = [
  {
    todoTitle: "My first todo",
    todoResponsible: "Sebastian",
    todoDescription: "My first todo Description",
    todoPriority: "low"
  },
  {
    todoTitle: "My second todo",
    todoResponsible: "Kangsik",
    todoDescription: "My Second todo Description",
    todoPriority: "high"
  },
  {
    todoTitle: "My third todo",
    todoResponsible: "Joy",
    todoDescription: "My third todo Description",
    todoPriority: "medium"
  }

]

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    todos

  };

}  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
