import React from 'react';
import axios from 'axios';

class TodosDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      todo: {},
      todoList: []
    };
  }

  componentDidMount() {
    this.fetchAllTodo();
  }

  fetchAllTodo() {
    axios.get('api/v1/todos')
      .then(response => {
        this.setState({ todoList: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleDelete(id) {
    axios.delete(`api/v1/todos/${id}`)
      .then(response => {
        alert('success')
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleEdit(){

  }

  renderListTodo() {
    return (
      this.state.todoList.map((item) => <div key={item.id}><li>{item.name}</li>
                                        <button onClick={() => this.handleDelete(item.id)} >Delete</button>
                                        <button onClick={this.handleEdit(item.id)}> Edit </button></div>)

    )
  }

  // Render function
  render () {
    const todoList = this.state.todoList;
    return (
      <div>
        { this.renderListTodo() }
      </div>
    )
  }
}

export default TodosDisplay