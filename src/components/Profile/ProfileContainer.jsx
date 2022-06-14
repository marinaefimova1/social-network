import { connect } from 'react-redux';
import { Component } from "react";
import { Navigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile } from '../../redux/reducers/profileReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.params.userId;

        if (!userId) {
            userId = 2;
        };

        this.props.getUserProfile(userId)
    };
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

function withRouter(Child) {
    return (props) => {
        const params = useParams();
        return <Child {...props} params={params} />;
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const WithUrlDataComponentContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataComponentContainer);