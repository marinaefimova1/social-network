import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/reducers/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
