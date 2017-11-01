import { connect } from 'react-redux';

import PostDetails from './PostDetails';
import { fetchPost } from '../../actions/Posts';
import { upvote, downvote, clearVoteError, fetchComments } from '../../actions/Comments';

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
            createdAt: info[id].createdAt,
            comments: comments
        };
    });
}

function mapStateToProps(state) {

    const { relation, info } = state.comment;
    const rootIds = relation[0];

    const comments = mapComments(rootIds, relation, info);

    const { isFetching, post, hasError, errorMessage, voteError } = state.posts;
    return {
        isFetching,
        post,
        hasError,
        errorMessage,
        voteError,
        comments
    };
}

export default connect(mapStateToProps, { fetchPost, upvote, downvote, clearVoteError, fetchComments })(PostDetails);
