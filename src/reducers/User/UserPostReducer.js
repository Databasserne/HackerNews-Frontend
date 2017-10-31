import {
    FETCHING_USER_POST,
    FETCHING_USER_POST_SUCCESS,
    FETCHING_USER_POST_FAIL,
    EDIT_POST,
    CANCEL_EDIT_POST,
    EDIT_POST_SUBMIT_SUCCESS,
    NEW_POST,
    CANCEL_NEW_POST,
    NEW_POST_SUBMIT_SUCCESS
} from '../../utils/ActionTypes';

const initialState = {
    isCreatingNewPost: false,
    isEditing: false,
    post: {},
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USER_POST:
            return {
                ...state,
                isFetching: true,
                hasError: false,
                errorMessage: null
            };
        case FETCHING_USER_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            };
        case FETCHING_USER_POST_FAIL:
            return {
                ...state,
                isFetching: false,
                data: [],
                hasError: true,
                errorMessage: action.payload
            };
        case EDIT_POST:
            return {
                ...state,
                isEditing: true,
                post: action.payload
            };
        case CANCEL_EDIT_POST:
            return {
                ...state,
                isEditing: false,
                post: {}
            };
        case EDIT_POST_SUBMIT_SUCCESS:
            return {
                ...state,
                isEditing: false,
                post: {}
            };
        case NEW_POST:
            return {
                ...state,
                isCreatingNewPost: true,
                post: {}
            };
        case CANCEL_NEW_POST:
            return {
                ...state,
                isCreatingNewPost: false,
                post: {}
            };
        case NEW_POST_SUBMIT_SUCCESS:
            return {
                ...state,
                isCreatingNewPost: false,
                post: {}
            }
        default:
            return state;
    }
};
