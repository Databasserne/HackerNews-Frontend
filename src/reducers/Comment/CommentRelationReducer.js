import {
    FETCHING_COMMENT_SUCCESS
} from '../../utils/ActionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_COMMENT_SUCCESS:
            const comments = action.payload;

            var relInfo = {};

            for (var i = 0; i < comments.length; i++) {
                const comment = comments[i];

                if (relInfo[comment.parent_id] === undefined) {
                    relInfo[comment.parent_id] = [comment.id];
                } else {
                    relInfo[comment.parent_id].push(comment.id);
                }
            }

            return {
                ...relInfo
            }
        default:
            return state;
    }
};
