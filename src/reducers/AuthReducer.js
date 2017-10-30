import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../utils/ActionTypes';

const initialState = {
    isLoggedIn: false,
    token: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { 
                ...state, 
                isLoggedIn: true, 
                token: action.payload.token
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
