import { connect } from 'react-redux';

import Register from './Register';
import { register } from '../../actions/Authentication'

function mapStateToProps(state) {
    const { isFetching, didRegister, error, hasError } = state.auth;
    return {
        isFetching,
        didRegister,
        error,
        hasError
    }
}

export default connect(mapStateToProps, { register })(Register);
