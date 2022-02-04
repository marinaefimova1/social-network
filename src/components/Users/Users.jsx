import React, { Component } from 'react';
import s from './Users.module.css';
import * as axios from "axios";

class Users extends Component {

  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items);

      })
    }
  }

  render() {
    const { users, unFollow, follow } = this.props;
    return (
      <div className={s.users}>
        {
          users.map(u => {
            return (
              <div key={u.id}>
                <div>
                  <div>
                    <img src={u.photos.small ? u.photos.small : "ava.jpeg"} alt="" />
                  </div>
                  <div className="div">
                    {u.followed
                      ? <button onClick={() => { unFollow(u.id) }}>UNFOLLOW</button>
                      : <button onClick={() => { follow(u.id) }}>FOLLOW</button>
                    }

                  </div>
                </div>

                <div>
                  <div className="div">
                    <div className="div">{u.name}</div>
                    <div className="div">{u.status}</div>
                  </div>
                  <div className="div">
                    <div className="div"></div>
                    <div className="div"></div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Users;
