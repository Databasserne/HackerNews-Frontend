import { connect } from 'react-redux';

import { login } from '../../actions/Authentication';
import Login from './Login';

const mapStateToProps = (state) => {
    const { isLoggedIn, hasError, error } = state.auth;
    return {
        isLoggedIn,
        hasError,
        error
    };
}

export default connect(mapStateToProps, { login })(Login);
