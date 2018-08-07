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
      groupId: this.state.activeGroupId
    }
    this.setState({
      todos:[...this.state.todos,newTodo]
    })
  }

  switchGroup = (groupId) => {
    this.setState({
      activeGroupId: groupId
    })
  }

  render() {
    let todos = this.state.activeGroupId ? this.state.todos.filter((todo) => {
      return todo.groupId === this.state.activeGroupId ? true : false
    }) : this.state.todos;

    let tabContent = this.state.activeGroupId ?
      <GroupTabContent todos={todos} createTodo={this.createTodo}/> :
      <AllGroupsTabContent todos={todos} />

    return (
      <div className="App">
        <GroupSwitch switchGroup={this.switchGroup} groups={this.state.groups}/>
        {tabContent}
      </div>
    );
  }
}

export default App;
