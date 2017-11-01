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
import { createRequest } from './utils';

export function fetchUser() {
    return (dispatch, getState) => {
        dispatch({ type: FETCHING_USER });

        const url = userInfoUrl();

        createRequest(getState, 'GET', url)
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: FETCHING_USER_SUCCESS, payload: res.json() });
                } else {
                    dispatch({ type: FETCHING_USER_FAIL, payload: res.json() });
                }
            });
    }
}

export function updateUser(fullname) {
    return (dispatch, getState) => {
        dispatch({ type: UPDATE_USER });

        const url = getUpdateUserUrl();

        createRequest(getState, 'PUT', url, { fullname })
            .then(res => {
                if (res.status === 200) {
                    dispatch(fetchUser());
                    dispatch({ type: UPDATE_USER_SUCCESS });
                } else {
                    dispatch({ type: UPDATE_USER_FAIL, payload: res.json() });
                }
            });
    }
}
