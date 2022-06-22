import React from 'react';
import { Component } from 'react';
import { updateStatus } from '../../../redux/reducers/profileReducer';

class ProfileStatus extends Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    console.log("this", this)
    this.setState({
      editMode: true
    })
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode ?
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
              value={this.state.status} />
          </div>
          :
          <div>
            <div onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</div>
          </div>
        }

      </div>
    )
  }
}

export default ProfileStatus;
