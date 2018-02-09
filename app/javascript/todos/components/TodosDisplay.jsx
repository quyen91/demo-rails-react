import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class TodosDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      todo: {}
    };
  }


  fetchTodo (id) {
    axios.get('api/v1/todos/${id}')
      .then(response => {
        this.setState({ todo: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    const todo = this.state.todo

    return (
      <div>
        <p>{todo.name}</p>
        <p>{quote.status}</p>
       </div>
     )
  }

}