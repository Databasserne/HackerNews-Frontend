import {
    FETCHING_USER_POST,
    FETCHING_USER_POST_SUCCESS,
    FETCHING_USER_POST_FAIL,
    EDIT_POST,
    CANCEL_EDIT_POST,
    EDIT_POST_SUBMIT_SUCCESS
} from '../../utils/ActionTypes';

const initialState = {
    isEditing: false,
    editPost: {},
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
                editPost: action.payload
            };
        case CANCEL_EDIT_POST:
            return {
                ...state,
                isEditing: false,
                editPost: {}
            };
        case EDIT_POST_SUBMIT_SUCCESS:
            return {
                ...state,
                isEditing: false,
                editPost: {}
            };
        default:
            return state;
    }
};
