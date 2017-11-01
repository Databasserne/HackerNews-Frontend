import axios from 'axios';

import {
    userInfoUrl,
    getUpdateUserUrl
} from '../utils/UrlBuilder';
import {
    FETCHING_USER,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAIL,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL
} from '../utils/ActionTypes';



const makeAuth = (getState, method, url, data) => {
    return {
        method: method,
        url: url,
        data: data,
        headers: {
            'Authorization': `Bearer ${getState().auth.token}`
        }
    };
}

export function fetchUser() {
    return (dispatch, getState) => {
        dispatch({ type: FETCHING_USER });

        const url = userInfoUrl();

        axios(makeAuth(getState, 'GET', url))
            .then(res => {
                dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_USER_FAIL, payload: err.data });
            });
    }
}

export function updateUser(fullname) {
    return (dispatch, getState) => {
        dispatch({ type: UPDATE_USER });

        const url = getUpdateUserUrl();

        axios(makeAuth(getState, 'PUT', url, { fullname }))
            .then(res => {
                dispatch(fetchUser());
                dispatch({ type: UPDATE_USER_SUCCESS });
            })
            .catch(err => {
                dispatch({ type: UPDATE_USER_FAIL, payload: err.data });
            });
    }
}
