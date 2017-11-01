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
import { createRequest } from './utils';

export function login(username, password) {
    return (dispatch, getState) => {
        dispatch({ type: LOGIN });

        createRequest(getState, 'POST', getLoginUrl(), {
            username: username,
            password: password
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    const { token } = data;

                    if (window.localStorage) {
                        window.localStorage.setItem("token", token);
                    }

                    dispatch({ type: LOGIN_SUCCESS, payload: data });
                })
            } else {
                res.json().then(err => {
                    dispatch({ type: LOGIN_FAIL, payload: err });
                })
            }
        });
    }
}

export function register(fullname, username, password, repeatPassword) {
    return (dispatch, getState) => {
        dispatch({ type: REGISTER });

        createRequest(getState, 'POST', getRegisterUrl(), {
            fullname: fullname,
            username: username,
            password: password,
            rep_password: repeatPassword
        }).then(res => {
            if (res === 201) {
                dispatch({ type: REGISTER_SUCCESS });
            } else {
                res.json().then(err => {
                    dispatch({ type: REGISTER_FAIL, payload: res.json() });
                })
            }
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
