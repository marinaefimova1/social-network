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
import {
  getUsers, getPageSize, getTotalUsersCount,
  getCurrentPage, getIsFetching, getFollowInProgress
} from '../../redux/selectors/users-selectors';

class UsersAPIContainer extends Component {

  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  };

  onChangePage = (pageNumber) => {
    // this.props.setCurrentPage(pageNumber);
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state)
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
      requestUsers: getUsersThunkCreator
    }),
  withAuthRedirect
)(UsersAPIContainer);