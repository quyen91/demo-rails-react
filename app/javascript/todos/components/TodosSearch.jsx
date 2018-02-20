import React from 'react';
import axios from 'axios';
import TodosDisplay from './TodosDisplay.jsx'

class TodosSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      todoList: []
    };
  }

  handleSearch(event){
    this.setState({name: event.target.value});

    axios.get('api/v1/todos/search?keyword=' + event.target.value)
      .then(response => {
        this.setState({ todoList: response.data });
      })
      .catch(error => {
        console.error(error);
      });

  }

  render(){
    return(
      <div>
        <h1>Search</h1>
        <form>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleSearch.bind(this)} />
          </label>
        </form>
        <TodosDisplay todoList={this.state.todoList}/>
      </div>
    )
  }
}

export default TodosSearch
