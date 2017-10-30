import { connect } from 'react-redux';

import PostDetails from './PostDetails';
import { fetchPost } from '../../actions/Posts';

function mapStateToProps(state) {
    const { isFetching, post, hasError, errorMessage } = state.posts;
    return {
        isFetching,
        post,
        hasError,
        errorMessage
    };
}

export default connect(mapStateToProps, { fetchPost })(PostDetails);
