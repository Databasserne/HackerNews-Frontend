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

export function fetchUser() {
    return dispatch => {
        dispatch({ type: FETCHING_USER });

        const url = userInfoUrl();

        axios.get(url)
            .then(res => {
                dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_USER_FAIL, payload: err.data });
            });
    }
}

export function updateUser(fullname) {
    return dispatch => {
        dispatch({ type: UPDATE_USER });

        const url = getUpdateUserUrl();

        axios.put(url, {
            fullname: fullname
        })
            .then(res => {
                dispatch({ type: UPDATE_USER_SUCCESS });
            })
            .catch(err => {
                dispatch({ type: UPDATE_USER_FAIL, payload: err.data });
            });
    }
}
