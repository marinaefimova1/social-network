import { connect } from 'react-redux';
import { Component } from 'react';
import {
  follow, setUsers, unFollow, setCurrentPage,
  toggleIsFetching, getUsersThunkCreator
} from '../../redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class UsersAPIContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };


  render() {
    const { users, unFollow, follow, pageSize,
      totalUsersCount, currentPage,
      isFetching, followInProgress } = this.props;

    return (
      <div>
        { isFetching ? <Preloader /> : null}
        <Users users={users}
          unFollow={unFollow}
          follow={follow}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
          onChangePage={this.onChangePage}
          followInProgress={followInProgress}
          />
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

export default compose(
  connect(mapStateToProps,
    {
      follow,
      unFollow,
      setUsers,
      setCurrentPage,
      toggleIsFetching,
      getUsers: getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersAPIContainer)
// export default UsersContainer;
