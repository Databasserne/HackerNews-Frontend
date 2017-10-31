import { connect } from 'react-redux';

import UserPosts from './UserPosts';
import { fetchUserPosts, deletePost } from '../../actions/Posts';

function mapStateToProps(state) {
    return {
        posts: state.user.posts
    };
}

export default connect(mapStateToProps, { fetchUserPosts, deletePost })(UserPosts);
