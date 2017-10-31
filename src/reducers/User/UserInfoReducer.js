import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    FETCHING_USER,
    FETCHING_USER_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_SUCCESS
} from '../../utils/ActionTypes';

const initialState = {
    fullname: null,
    isFetching: false,
    isUpdating: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                fullname: action.payload.fullname,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                fullname: null,
            };
        case FETCHING_USER:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fullname: action.payload.fullname
            };
        case UPDATE_USER:
            return {
                ...state,
                isUpdating: true
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isUpdating: false
            };
        default:
            return state;
    }
};
