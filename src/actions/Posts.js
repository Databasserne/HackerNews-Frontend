import axios from 'axios';

import { getPostsUrl } from '../utils/UrlBuilder';
import {
    FETCHING_POST_DATA,
    FETCHING_POST_DATA_SUCCESS,
    FETCHING_POST_DATA_FAIL
} from '../utils/ActionTypes';

export function fetchPosts() {
    return dispatch => {
        dispatch({ type: FETCHING_POST_DATA });

        const url = getPostsUrl();

        axios.get(url)
            .then(res => {
                dispatch({ type: FETCHING_POST_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_POST_DATA_FAIL, payload: err.data });
            });
    }
}
