import {
    LOGIN,
    LOGIN_SUCCESS
} from '../utils/ActionTypes';

export default function login(username, password) {
    return dispatch => {
        dispatch({ type: LOGIN });

        dispatch({ type: LOGIN_SUCCESS });
    }
}
