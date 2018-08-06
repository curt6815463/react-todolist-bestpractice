import React, { Component } from 'react';
import Todo from './Todo/'


class TodoList extends Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />
          })
        }
      </div>
    );
  }
}

export default TodoList;
