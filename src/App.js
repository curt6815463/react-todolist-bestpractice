import React, { Component } from 'react';
import Title from './components/Title/'
import CreateTodo from './components/CreateTodo/'
import TodoList from './components/TodoList/'


class App extends Component {
  constructor(){
    super()
    this.state = {
      todos : ['吃飯','睡覺','打東東','睡覺','打東東','睡覺','打東東']
    }
  }

  createTodo = (newTodo) => {
    this.setState({
      todos:[...this.state.todos,newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <Title todos={this.state.todos}/>
        <CreateTodo createTodo={this.createTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
