import axios from 'axios';

import * as UrlBuilder from '../utils/UrlBuilder';
import {
    UPVOTE,
    UPVOTE_FAIL,
    DOWNVOTE,
    DOWNVOTE_FAIL,
    CLEAR_VOTE_ERROR,
    FETCHING_COMMENT_SUCCESS,
    FETCHING_COMMENT,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS
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

export function addComment() {
    return dispatch => {
        dispatch({ type: ADD_COMMENT });
    }
}

export function addCommentToPost(postId, comment) {
    return (dispatch, getState) => {

        const url = UrlBuilder.getAddCommentToPostUrl(postId);

        axios(makeAuth(getState, 'POST', url, {
            comment_text: comment.body
        }))
            .then(res => {
                dispatch({ type: ADD_COMMENT_SUCCESS });
                dispatch(fetchComments(postId));
            });
    }
}

export function fetchComments(postId) {
    return (dispatch, getState) => {
        const url = UrlBuilder.getCommentsUrl(postId);

        dispatch({ type: FETCHING_COMMENT });

        axios(makeAuth(getState, 'GET', url))
            .then(res => {
                dispatch({ type: FETCHING_COMMENT_SUCCESS, payload: res.data });
            });
    }
}

export function upvote(postId, commentId) {
    return (dispatch, getState) => {
        const url = UrlBuilder.getCommentUpvoteUrl(postId, commentId);

        dispatch({ type: UPVOTE });

        axios(makeAuth(getState, 'POST', url))
            .then(res => {
            })
            .catch(err => {
                dispatch({ type: UPVOTE_FAIL, payload: err.response.data.error_message });
            });
    };
}

export function downvote(postId, commentId) {
    return (dispatch, getState) => {
        const url = UrlBuilder.getCommentDownvoteUrl(postId, commentId);

        dispatch({ type: DOWNVOTE });

        axios(makeAuth(getState, 'POST', url))
            .then(res => {
            })
            .catch(err => {
                dispatch({ type: DOWNVOTE_FAIL, payload: err.response.data.error_message });
            });
    };
}

export function clearVoteError() {
    return dispatch => {
        dispatch({ type: CLEAR_VOTE_ERROR });
    }
}
