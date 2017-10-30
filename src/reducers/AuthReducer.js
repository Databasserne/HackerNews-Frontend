import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../utils/ActionTypes';

const initialState = {
    isLoggedIn: false,
    isFetching: false,
    token: null,
    hasError: false,
    error: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                hasError: false,
                error: null,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return { 
                ...state, 
                isLoggedIn: true, 
                token: action.payload.token,
                isFetching: false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                hasError: true,
                error: action.payload,
                isFetching: false
            };
        case LOGOUT_SUCCESS:
            return { 
                ...state, 
                isLoggedIn: false, 
                token: null
            };
        default:
            return state;
    }
};
