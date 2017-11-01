import { connect } from 'react-redux';

import PostDetails from './PostDetails';
import { fetchPost } from '../../actions/Posts';

function mapComments(rootIds, relation, info) {
    if(rootIds === undefined) return [];

    return rootIds.map(id => {
        const comments = mapComments(relation[id], relation, info);

        return {
            id: id,
            body: info[id].body,
            author: info[id].author,
            votes: info[id].votes,
            hasUpvoted: info[id].hasUpvoted,
            hasDownvoted: info[id].hasDownvoted,
            comments: comments
        };
    });
}

function mapStateToProps(state) {

    const { relation, info } = state.comment;
    const rootIds = relation[0];

    const comments = mapComments(rootIds, relation, info);

    console.log(comments);

    const { isFetching, post, hasError, errorMessage } = state.posts;
    return {
        isFetching,
        post,
        hasError,
        errorMessage,
        comments
    };
}

export default connect(mapStateToProps, { fetchPost })(PostDetails);
