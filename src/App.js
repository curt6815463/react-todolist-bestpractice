import React, { Component } from 'react';
import Title from './components/Title/'
import CreateTodo from './components/CreateTodo/'
class App extends Component {
  constructor(){
    super()
    this.state = {
      todos : ['吃飯','睡覺','打東東','睡覺','打東東','睡覺','打東東']
    }
  }
  render() {
    return (
      <div className="App">
        <Title todos={this.state.todos}/>
        <CreateTodo />
      </div>
    );
  }
}

export default App;
