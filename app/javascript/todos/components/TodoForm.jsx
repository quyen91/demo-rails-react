import React from 'react';
import axios from 'axios';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: {}
    };
      // define application state here
  }
  doSomething() {
      //write a function to perform an action
  }

  onTimeClick(evt) {
    alert('Time click!')
  }

  render() {
    return(
      <div>
       <p>QUyen</p>
       <p onClick={this.onTimeClick}>Time is {new Date().toTimeString().split(" ")[0]}</p>
      </div>
    )
  }
}

export default TodoForm
