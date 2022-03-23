import { connect } from 'react-redux';
import { Component } from 'react';
import {
  follow, setUsers, unFollow, setCurrentPage,
  setUsersTotalCount, toggleIsFetching, toggleFollowInProgress
} from '../../redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersAPIContainer extends Component {

  componentDidMount() {
    // if (this.props.users.length === 0) {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items);
        this.props.setUsersTotalCount(response.totalCount);

      })
    // }
  };

  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items);

      })
  };


  render() {
    const { users, unFollow, follow, pageSize,
      totalUsersCount, currentPage, setCurrentPage,
      isFetching, followInProgress, toggleFollowInProgress } = this.props;

    return (
      <div>
        { isFetching ? <Preloader /> : null}
        <Users users={users}
          unFollow={unFollow}
          follow={follow}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onChangePage={this.onChangePage}
          followInProgress={followInProgress}
          toggleFollowInProgress={toggleFollowInProgress} />
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
    isFetching: state.usersPage.isFetching,
    followInProgress: state.usersPage.followInProgress
  }
};

const UsersContainer = connect(mapStateToProps,
  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowInProgress
  })(UsersAPIContainer);

export default UsersContainer;
