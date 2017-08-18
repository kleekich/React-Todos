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
      <div className="container">
        <h4>
          Todo Count: <span className="badge"> {this.state.todos.length} </span>
        </h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) => 
            <li className="list-group-item" key={index} >
              <h4 className="list-group-item-heading">{todo.todoTitle}<small><span className="label label-info">{todo.todoPriority}</span></small></h4>
            </li>

            )}
        </ul>
      </div>
    );
  }
}

export default App;
