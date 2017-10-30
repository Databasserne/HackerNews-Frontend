import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../utils/ActionTypes';

const initialState = {
    fullname: null,
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
        default:
            return state;
    }
};
