import React, { Component } from 'react';

class GroupSwitch extends Component {

  constructor() {
    super();
  }


  render() {
    return (
      <span>
        {
          this.props.groups.map((group) => {
            return <span>{group.name}</span>
          })
        }
      </span>
    );
  }
}

export default GroupSwitch;
