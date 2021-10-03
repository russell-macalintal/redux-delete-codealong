import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  // Method 1: Delete per array index number (assigned as the todo's key)
  // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} todoKey={id} text={todo} delete={this.props.delete}/>)
  
  // Method 2: Delete per unique ID provided by uuid
  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} delete={this.props.delete}/>)

  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};
  
  const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      // Method 1: Delete per array index number (assigned as the todo's key)
      // delete: (todoKey) => dispatch({type: 'DELETE_TODO', payload: todoKey})

      // Method 2: Delete per unique ID provided by uuid
      delete: (id) => dispatch({type: 'DELETE_TODO', payload: id})
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);