import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../actions/Authentication';


const mapStateToProps = (state) => {
    const { fullname } = state.user;
    const { isLoggedIn } = state.auth;
    return {
        isLoggedIn,
        fullname 
    };
}

export default connect(mapStateToProps, { logout })(Header);
