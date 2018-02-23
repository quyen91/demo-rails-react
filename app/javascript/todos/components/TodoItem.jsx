import React from 'react';
import axios from 'axios';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editable: false
    }
  }

  handleEdit() {
    if(this.state.editable) {
      var name = this.refs.name.value;
      var todo = {id: this.props.item.id, name: name}
      this.props.handleUpdate(todo);
    }
    this.setState({editable: !this.state.editable})
  }

  render () {
    var name = this.state.editable ? <input type='text' ref="name" defaultValue={this.props.item.name} /> : this.props.item.name;
    return (
      <div>
        <li>{name}</li>
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit.bind(this)}> {this.state.editable ? 'Submit' : 'Edit'}  </button>
      </div>
    )
  }
}

export default TodoItem