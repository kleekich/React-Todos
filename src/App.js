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
      
    );
  }
}

export default App;
