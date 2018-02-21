import React from 'react';
import axios from 'axios';

class TodosNew extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'default',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({name: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    axios.post(`api/v1/todos`, {
      todo: {name: this.state.name}
    })
    .then(response => {
      console.log('success');
      this.props.handleAddNewTodo(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // Render function
  render () {
    return (
      <div>
        <h1>New todo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default TodosNew