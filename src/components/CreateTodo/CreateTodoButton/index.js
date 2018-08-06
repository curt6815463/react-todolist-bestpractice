import React, { Component } from 'react';

class CreateTodoButton extends Component {
  constructor(){
    super()

  }
  render() {
    return (
        <input type='button' value='新增代辦事項'/>
    );
  }
}

export default CreateTodoButton;
