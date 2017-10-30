import {
    FETCHING_POSTS,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAIL,
    FETCHING_POST,
    FETCHING_POST_SUCCESS,
} from '../utils/ActionTypes';

const initialState = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null,
    post: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POSTS:
            return {
                ...state,
                isFetching: true,
                data: [],
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
                post: {},
                hasError: false,
                errorMessage: null
            };
        case FETCHING_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                post: action.payload,
            }
        default:
            return state;
    }
};
