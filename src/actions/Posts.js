import axios from 'axios';

import * as UrlBuilder from '../utils/UrlBuilder';
import {
    FETCHING_POSTS,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAIL,
    FETCHING_POST,
    FETCHING_POST_SUCCESS,
    FETCHING_POST_FAIL,
    FETCHING_USER_POST,
    FETCHING_USER_POST_SUCCESS,
    FETCHING_USER_POST_FAIL,
    EDIT_POST,
    CANCEL_EDIT_POST,
    EDIT_POST_SUBMIT_SUCCESS
} from '../utils/ActionTypes';

export function fetchPosts() {
    return dispatch => {
        dispatch({ type: FETCHING_POSTS });

        const url = UrlBuilder.getPostsUrl();

        axios.get(url)
            .then(res => {
                dispatch({ type: FETCHING_POSTS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_POSTS_FAIL, payload: err.data });
            });
    };
}

export function fetchPost(id) {
    return dispatch => {
        dispatch({ type: FETCHING_POST });

        const url = UrlBuilder.getPostUrl(id);

        axios.get(url)
            .then(res => {
                dispatch({ type: FETCHING_POST_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_POST_FAIL, payload: err.data });
            });
    };
}

export function upvote(id) {
    return dispatch => {
        const url = UrlBuilder.upvotePostUrl(id);

        axios.post(url)
            .then(res => {
                dispatch(fetchPosts());
            })
            .catch(err => {
            });
    };
}

export function downvote(id) {
    return dispatch => {
        const url = UrlBuilder.downvotePostUrl(id);

        axios.post(url)
            .then(res => {
                dispatch(fetchPosts());
            })
            .catch(err => {
            });
    };
}

export function fetchUserPosts() {
    return dispatch => {
        dispatch({ type: FETCHING_USER_POST });

        const url = UrlBuilder.getUserPostsUrl();

        axios.get(url)
            .then(res => {
                dispatch({ type: FETCHING_USER_POST_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_USER_POST_FAIL, payload: err.data });
            });
    }
}


export function editPost(post) {
    return dispatch => {
        dispatch({ type: EDIT_POST, payload: post });
    };
}

export function cancelEditPost(post) {
    return dispatch => {
        dispatch({ type: CANCEL_EDIT_POST });
    };
}

export function editPostSubmit(post) {
    return dispatch => {
        const url = UrlBuilder.getEditPostUrl(post.id);

        axios.put(url, {
            title: post.title,
            body: post.body
        })
            .then(res => {
                dispatch(fetchUserPosts());
                dispatch({ type: EDIT_POST_SUBMIT_SUCCESS });
            });
    }
}

export function deletePost(id) {
    return dispatch => {
        const url = UrlBuilder.getDeletePostUrl(id);

        axios.delete(url)
            .then(res => {
                dispatch(fetchUserPosts());
            })
            .catch(err => {

            });
    };
}
