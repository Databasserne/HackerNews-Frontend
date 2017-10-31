import { connect } from 'react-redux';

import Profile from './Profile';
import { fetchUser, updateUser } from '../../actions/User';

function mapStateToProps(state) {
    const { fullname } = state.user.userInfo;

    return {
        fullname
    }
}

export default connect(mapStateToProps, { fetchUser, updateUser })(Profile);
