import { connect } from 'react-redux';
import { Component } from 'react';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from '../../redux/reducers/usersReducer';
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
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;
