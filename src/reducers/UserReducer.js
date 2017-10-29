import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../utils/ActionTypes';

const initialState = {
    isLoggedIn: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true };
        case LOGOUT_SUCCESS:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};
