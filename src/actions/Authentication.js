import axios from 'axios';

import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGOUT_SUCCESS
} from '../utils/ActionTypes';
import { getLoginUrl, getRegisterUrl } from '../utils/UrlBuilder';

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

export function register(fullname, username, password, repeatPassword){
    return dispatch => {
        dispatch({ type: REGISTER });

        axios.post(getRegisterUrl(), {
            fullname: fullname,
            username: username,
            password: password,
            rep_password: repeatPassword
        }).then(res => {
            dispatch({ type: REGISTER_SUCCESS });
        }).catch((err) => {
            dispatch({ type: REGISTER_FAIL, payload: err.response.data });
        });
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
