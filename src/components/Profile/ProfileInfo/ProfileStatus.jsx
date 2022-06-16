import React from 'react';
import { Component } from 'react';

class ProfileStatus extends Component {

  state={
    editMode: false
  }

  activateEditMode =() => {
    this.setState({
      editMode: true
    })
  };

  deactivateEditMode =() => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode ?
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
          </div>
          :
          <div>
            <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
          </div>
        }
  
      </div>
    )
  }
}

export default ProfileStatus;
