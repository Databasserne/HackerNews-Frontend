import axios from 'axios';

import {
    getPostsUrl,
    getPostUrl,
    upvotePostUrl
} from '../utils/UrlBuilder';
import {
    FETCHING_POSTS,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAIL,
    FETCHING_POST,
    FETCHING_POST_SUCCESS,
    FETCHING_POST_FAIL
} from '../utils/ActionTypes';

export function fetchPosts() {
    return dispatch => {
        dispatch({ type: FETCHING_POSTS });

        const url = getPostsUrl();

        axios.get(url)
            .then(res => {
                dispatch({ type: FETCHING_POSTS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_POSTS_FAIL, payload: err.data });
            });
    }
}

export function fetchPost(id) {
    return dispatch => {
        dispatch({ type: FETCHING_POST });

        const url = getPostUrl(id);

        axios.get(url)
            .then(res => {
                dispatch({ type: FETCHING_POST_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_POST_FAIL, payload: err.data });
            });
    }
}

export function upvote(id) {
    return dispatch => {
        const url = upvotePostUrl(id);

        axios.post(url)
            .then(res => {
                dispatch(fetchPosts());
            })
            .catch(err => {

            });
    }
}
