import React from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

class TodosDisplay extends React.Component {
  constructor (props) {
    super(props);
  }

  // componentDidMount() {
  //   this.fetchAllTodo();
  // }

  // fetchAllTodo() {
  //   axios.get('api/v1/todos')
  //     .then(response => {
  //       this.setState({ todoList: response.data });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  handleDelete(id) {
    axios.delete(`api/v1/todos/${id}`)
      .then(() => {
        alert('success');
        this.props.handleDeleteTodo(id)
      })
      .catch(error => {
        console.log(error);
      });
  }

  onUpdate(item){
    this.props.onUpdate(item)
  }

  renderListTodo() {
    return (
      this.props.todoList.map((item) =>
        <div key={item.id}>
          {/* <li>{item.name}</li>
          <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
          <button onClick={this.handleEdit(item.id)}> Edit </button> */}
           <TodoItem item={item}
                     handleDelete={this.handleDelete.bind(this, item.id)}
                     handleUpdate={this.onUpdate.bind(this)}/>
        </div>
      )
    )
  }

  // Render function
  render () {
    return (
      <div>
        { this.renderListTodo() }
      </div>
    )
  }
}

export default TodosDisplay