import { connect } from 'react-redux';
import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from '../../redux/reducers/profileReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                // debugger;                
                this.props.navigate("/login");
            }
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
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
});



function withRouter(Child) {
    return (props) => {
        const params = useParams();
        let navigate = useNavigate();

        return <Child {...props} params={params} navigate={navigate} />;
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);