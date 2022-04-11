import { connect } from 'react-redux';
import { Component } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile } from '../../redux/reducers/profileReducer';
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

const WithUrlDataComponentContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataComponentContainer);