import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../actions/Authentication';


const mapStateToProps = (state) => {
    const { isLoggedIn, fullName } = state.user;
    return {
        isLoggedIn,
        fullName 
    };
}

export default connect(mapStateToProps, { logout })(Header);
