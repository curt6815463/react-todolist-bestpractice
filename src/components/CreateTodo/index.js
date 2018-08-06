import React, { Component } from 'react';
import CreateTodoButton from './CreateTodoButton/'
import TodoInput from './TodoInput/'
class CreateTodo extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div>
        <TodoInput />
        <CreateTodoButton />
      </div>
    );
  }
}

export default CreateTodo;
