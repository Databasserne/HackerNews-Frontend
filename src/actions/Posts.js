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
    EDIT_POST_SUBMIT_SUCCESS,
    NEW_POST,
    NEW_POST_SUBMIT_SUCCESS,
    CANCEL_NEW_POST,
    UPVOTE,
    UPVOTE_FAIL,
    DOWNVOTE,
    DOWNVOTE_FAIL,
    CLEAR_VOTE_ERROR
} from '../utils/ActionTypes';
import { createRequest } from './utils';

export function fetchPosts() {
    return (dispatch, getState) => {
        dispatch({ type: FETCHING_POSTS });

        const url = UrlBuilder.getPostsUrl();

        createRequest(getState, 'GET', url)
            .then(res => {
                if (res.status === 200) {
                    res.json().then(data => {
                        dispatch({ type: FETCHING_POSTS_SUCCESS, payload: data });
                    });
                } else {
                    res.json().then(err => {
                        dispatch({ type: FETCHING_POSTS_FAIL, payload: err });
                    });
                }
            });
    };
}

export function fetchPost(id) {
    return (dispatch, getState) => {
        dispatch({ type: FETCHING_POST });

        const url = UrlBuilder.getPostUrl(id);

        createRequest(getState, 'GET', url)
            .then(res => {
                if (res.status === 200) {
                    res.json().then(data => {
                        dispatch({ type: FETCHING_POST_SUCCESS, payload: data });
                    });
                } else {
                    res.json().then(err => {
                        dispatch({ type: FETCHING_POST_FAIL, payload: err });
                    });
                }
            });
    };
}

export function upvote(id) {
    return (dispatch, getState) => {
        const url = UrlBuilder.upvotePostUrl(id);

        dispatch({ type: UPVOTE });

        createRequest(getState, 'POST', url)
            .then(res => {
                if (res === 200) {
                    dispatch(fetchPosts());
                } else {
                    res.json().then(err => {
                        dispatch({ type: UPVOTE_FAIL, payload: err.error_message });
                    });
                }
            });
    };
}

export function downvote(id) {
    return (dispatch, getState) => {
        const url = UrlBuilder.downvotePostUrl(id);

        dispatch({ type: DOWNVOTE });

        createRequest(getState, 'POST', url)
            .then(res => {
                if (res === 200) {
                    dispatch(fetchPosts());
                } else {
                    res.json().then(err => {
                        dispatch({ type: DOWNVOTE_FAIL, payload: err.error_message });
                    });
                }
            });
    };
}

export function fetchUserPosts() {
    return (dispatch, getState) => {
        dispatch({ type: FETCHING_USER_POST });

        const url = UrlBuilder.getUserPostsUrl();

        createRequest(getState, 'GET', url)
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: FETCHING_USER_POST_SUCCESS, payload: res.json() });
                } else {
                    dispatch({ type: FETCHING_USER_POST_FAIL, payload: res.json() });
                }
            });
    }
}

export function newPost() {
    return dispatch => {
        dispatch({ type: NEW_POST });
    }
}


export function cancelNewPost(post) {
    return dispatch => {
        dispatch({ type: CANCEL_NEW_POST });
    };
}

export function newPostSubmit(title, body) {
    return (dispatch, getState) => {
        const url = UrlBuilder.getNewPostUrl();

        createRequest(getState, 'POST', url, { title, body })
            .then(res => {
                if (res.status === 201) {
                    dispatch(fetchUserPosts());
                    dispatch({ type: NEW_POST_SUBMIT_SUCCESS });
                }
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
    return (dispatch, getState) => {
        const url = UrlBuilder.getEditPostUrl(post.id);


        createRequest(getState, 'PUT', url, {
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
    return (dispatch, getState) => {
        const url = UrlBuilder.getDeletePostUrl(id);

        createRequest(getState, 'DELETE', url)
            .then(res => {
                dispatch(fetchUserPosts());
            });
    };
}

export function clearVoteError() {
    return dispatch => {
        dispatch({ type: CLEAR_VOTE_ERROR });
    }
}
