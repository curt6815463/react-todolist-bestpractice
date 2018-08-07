import React, { Component } from 'react';
import AllGroupsTabContent from './components/AllGroupsTabContent/'
import GroupTabContent from './components/GroupTabContent/'
import GroupSwitch from './components/GroupSwitch/'
class App extends Component {
  constructor(){
    super()

    let todos = [
      {
        text:'吃飯',
        groupId:'living'
      },
      {
        text:'睡覺',
        groupId:'work'
      },
      {
        text:'打東東',
        groupId:'family'
      }
    ];

    let groups = [
      { name: '全部', id: undefined },
      { name: '生活', id: 'living' },
      { name: '工作', id: 'work' },
      { name: '家庭', id: 'family' }
    ];

    this.state = {
      todos: todos,
      groups: groups,
      activeGroupId: undefined,
    }
  }

  createTodo = (newTodoText) => {
    let newTodo = {
      text: newTodoText,
      groupId: 'living'
    }
    this.setState({
      todos:[...this.state.todos,newTodo]
    })
  }

  switchGroup(groupid) {
    this.setState({
      activeGroupId: groupid
    })
  }

  render() {
    let tabContent = <AllGroupsTabContent todos={this.state.todos} />
    return (
      <div className="App">
        <GroupSwitch groups={this.state.groups}/>
        <AllGroupsTabContent todos={this.state.todos} />
        <GroupTabContent todos={this.state.todos} createTodo={this.createTodo}/>
      </div>
    );
  }
}

export default App;
