import { connect } from 'react-redux';

import Posts from './Posts';
import { fetchPosts } from '../../actions/Posts';

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
