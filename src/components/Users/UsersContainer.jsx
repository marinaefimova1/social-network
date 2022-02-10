import { connect } from 'react-redux';
import { Component } from 'react';
import { follow, setUsers, unFollow, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/reducers/usersReducer';
import Users from './Users';
import * as axios from "axios";
import Preloader from '../common/Preloader/Preloader';

class UsersAPIContainer extends Component {

  componentDidMount() {
    // if (this.props.users.length === 0) {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount);

    })
    // }
  };

  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);

    })
  };


  render() {
    const { users, unFollow, follow, pageSize,
      totalUsersCount, currentPage, setCurrentPage, isFetching } = this.props;

    return (
      <div>
        { isFetching ? <Preloader /> : null }
        <Users users={users}
          unFollow={unFollow}
          follow={follow}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onChangePage={this.onChangePage} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

const UsersContainer = connect(mapStateToProps, 
  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
  })(UsersAPIContainer);

export default UsersContainer;
