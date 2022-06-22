import { connect } from 'react-redux';
import { Component } from "react";
import { Navigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from '../../redux/reducers/profileReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.params.userId;

        if (!userId) {
            userId = 2;
        };

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    };
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});



function withRouter(Child) {
    return (props) => {
        const params = useParams();
        return <Child {...props} params={params} />;
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);