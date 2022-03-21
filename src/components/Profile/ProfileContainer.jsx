import { connect } from 'react-redux';
import { Component } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { setUserProfile } from '../../redux/reducers/profileReducer';
import { usersAPI } from '../../api/api';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.params.userId;

        if (!userId) {
            userId = 2;
        };

        usersAPI.getUserProfile(userId)
            .then(response => {
                this.props.setUserProfile(response);
            })
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

const WithUrlDataComponentContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataComponentContainer);