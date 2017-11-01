import {
    FETCHING_POSTS,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAIL,
    FETCHING_POST,
    FETCHING_POST_SUCCESS,
    UPVOTE,
    UPVOTE_FAIL,
    DOWNVOTE,
    DOWNVOTE_FAIL,
    CLEAR_VOTE_ERROR
} from '../utils/ActionTypes';

const initialState = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null,
    post: {},
    voteError: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POSTS:
            return {
                ...state,
                isFetching: true,
                hasError: false,
                errorMessage: null
            };
        case FETCHING_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            };
        case FETCHING_POSTS_FAIL:
            return {
                ...state,
                isFetching: false,
                data: [],
                hasError: true,
                errorMessage: action.payload
            };
        case FETCHING_POST:
            return {
                ...state,
                isFetching: true,
                hasError: false,
                errorMessage: null
            };
        case FETCHING_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                post: action.payload,
            }
        case UPVOTE:
        case DOWNVOTE:
            return {
                ...state,
                voteError: null
            };
        case UPVOTE_FAIL:
        case DOWNVOTE_FAIL:
            return {
                ...state,
                voteError: action.payload
            };
        case CLEAR_VOTE_ERROR:
            return {
                ...state,
                voteError: null
            };
        default:
            return state;
    }
};
