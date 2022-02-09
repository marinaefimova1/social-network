import React, { Component } from 'react';
import s from './Users.module.css';
import * as axios from "axios";

class Users extends Component {

  componentDidMount() {
    // if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);

      })
    // }
  };

  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);

    })
  };


  render() {
    const { users, unFollow, follow, pageSize, totalUsersCount, currentPage, setCurrentPage } = this.props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    };

    return (
      <div className={s.users}>
        <div className="">
          {
            pages.map(p => {
              return <span className={`${currentPage === p && s.selectedPage} ${s.page}`}
                onClick={() => { this.onChangePage(p) }}>{p}</span>
            })
          }
        </div>
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
