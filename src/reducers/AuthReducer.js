import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
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
    error: null,
    didRegister: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                hasError: false,
                error: null,
                isFetching: true,
                didRegister: false
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                didRegister: true
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isFetching: false,
                hasError: true,
                error: action.payload
            };
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
