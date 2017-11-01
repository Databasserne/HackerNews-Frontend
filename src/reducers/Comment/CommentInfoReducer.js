import {
    FETCHING_COMMENT_SUCCESS
} from '../../utils/ActionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_COMMENT_SUCCESS:
            const comments = action.payload;
            var commentInfo = {};
            for(var i = 0; i < comments.length; i++){
                const comment = comments[i];

                commentInfo[comment.id] = {
                    body: comment.comment_text,
                    author: comments.author_name,
                    createdAt: comment.created,
                    hasUpvoted: comment.has_upvoted,
                    hasDownvoted: comment.has_downvoted,
                    votes: comment.votes
                };
            }

            return {
                ...state,
                ...commentInfo
            }
        default:
            return state;
    }
};
