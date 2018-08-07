import React, { Component } from 'react';

class GroupSwitch extends Component {

  constructor() {
    super();
  }


  render() {
    return (
      <span>
        {
          this.props.groups.map((group, index) => {
            return(
              <span
                onClick={()=> {this.props.switchGroup(group.id)}}
                key={index}
                >
                  {group.name}
                </span>
            )
          })
        }
      </span>
    );
  }
}

export default GroupSwitch;
