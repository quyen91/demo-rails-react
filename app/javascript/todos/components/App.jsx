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

  handleAddNewTodo(data) {

    const todos = update(this.state.todoList, {
      $splice: [[0, 0, data]]
    });

    this.setState({ todoList: todos });
  }

  render() {
    return(
      <div>
        <TodosSearch />
        <hr/>
        <TodosNew handleAddNewTodo={this.handleAddNewTodo.bind(this)}/>
        <hr/>
        <TodosDisplay todoList={this.state.todoList}/>
      </div>
    )
  }
}

export default App