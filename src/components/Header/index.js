import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../actions/Authentication';


const mapStateToProps = (state) => {
    const { fullName } = state.user;
    const { isLoggedIn } = state.auth;
    return {
        isLoggedIn,
        fullName 
    };
}

export default connect(mapStateToProps, { logout })(Header);
