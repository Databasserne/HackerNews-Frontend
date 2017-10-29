import {
    LOGOUT,
    LOGOUT_SUCCESS
} from '../utils/ActionTypes';

export default function logout() {
    return dispatch => {
        dispatch({ type: LOGOUT });

        dispatch({ type: LOGOUT_SUCCESS });
    }
}
