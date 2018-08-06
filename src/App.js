import React, { Component } from 'react';
import Title from './components/Title/'

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
        <Title />
      </div>
    );
  }
}

export default App;
