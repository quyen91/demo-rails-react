import React from 'react'
import axios from 'axios';
import update from 'immutability-helper';
import PropTypes from 'prop-types'
import TodoForm from './TodoForm.jsx'
import TodosDisplay from './TodosDisplay.jsx'
import TodosNew from './TodosNew.jsx'
import TodosSearch from './TodosSearch';


// const App = (props) => (
//   <div>
//     <TodosSearch />
//     <hr/>
//     <TodosNew />
//     <hr/>
//     <TodosDisplay />
//   </div>
// )

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleAddNewTodo(todo) {
    const todos = update(this.state.todoList, {
      $splice: [[0, 0, todo]]
    });

    this.setState({ todoList: todos });
  }

  handleDeleteTodo(id) {
    const newTodos = this.state.todoList.filter((todo) => {
      return todo.id != id;
    });

    this.setState({ todoList: newTodos});
  }

  handleUpdate(item){
    console.log('handle Update in App')
    axios.put(`api/v1/todos/${item.id}`, {
        todo: { name: item.name }
      })
      .then(response => {
        this.updateItem(item)
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateItem(todo) {
    var todos = this.state.todoList.filter((item) => { return item.id != todo.id });
    todos.push(todo);
    this.setState({todoList: todos})
  }

  render() {
    return(
      <div>
        <TodosSearch />
        <hr/>
        <TodosNew handleAddNewTodo={this.handleAddNewTodo.bind(this)} />
        <hr/>
        <TodosDisplay todoList={this.state.todoList}
                      handleDeleteTodo={this.handleDeleteTodo.bind(this)}
                      onUpdate={this.handleUpdate.bind(this)}/>
      </div>
    )
  }
}

export default App