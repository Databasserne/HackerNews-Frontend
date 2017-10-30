import { connect } from 'react-redux';

import { login } from '../../actions/Authentication';
import Login from './Login';

const mapStateToProps = (state) => {
    const { isLoggedIn } = state.user;
    return {
        isLoggedIn
    };
}

export default connect(mapStateToProps, { login })(Login);
