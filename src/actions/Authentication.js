import axios from 'axios';

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGOUT_SUCCESS
} from '../utils/ActionTypes';
import { getLoginUrl } from '../utils/UrlBuilder';

export function login(username, password) {
    return dispatch => {
        dispatch({ type: LOGIN });

        axios.post(getLoginUrl(), {
            username: username,
            password: password
        }).then(res => {
            const { token } = res.data;

            if (window.localStorage) {
                window.localStorage.setItem("token", token);
            }

            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        }).catch((err) => {
            dispatch({ type: LOGIN_FAIL, payload: err.response.data });
        })
    }
}

export function logout() {
    return dispatch => {
        dispatch({ type: LOGOUT });

        if (window.localStorage) {
            window.localStorage.removeItem("token");
        }

        dispatch({ type: LOGOUT_SUCCESS });
    }
}
