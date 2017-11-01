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
import { createRequest } from './utils';

export function addComment() {
    return dispatch => {
        dispatch({ type: ADD_COMMENT });
    }
}

export function addCommentToPost(postId, comment) {
    return (dispatch, getState) => {

        const url = UrlBuilder.getAddCommentToPostUrl(postId);

        createRequest(getState, 'POST', url, {
            comment_text: comment.body,
            comment_id: comment.parentId
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: ADD_COMMENT_SUCCESS, payload: res.json() });
                }
            });
    }
}

export function fetchComments(postId) {
    return (dispatch, getState) => {
        const url = UrlBuilder.getCommentsUrl(postId);

        dispatch({ type: FETCHING_COMMENT });

        createRequest(getState, 'GET', url)
            .then(res => {
                dispatch({ type: FETCHING_COMMENT_SUCCESS, payload: res.json() });
            });
    }
}

export function upvote(postId, commentId) {
    return (dispatch, getState) => {
        const url = UrlBuilder.getCommentUpvoteUrl(postId, commentId);

        dispatch({ type: UPVOTE });

        createRequest(getState, 'POST', url)
            .then(res => {
                if(res.status !== 200){
                    dispatch({ type: UPVOTE_FAIL, payload: res.json().error_message });
                }
            });
    };
}

export function downvote(postId, commentId) {
    return (dispatch, getState) => {
        const url = UrlBuilder.getCommentDownvoteUrl(postId, commentId);

        dispatch({ type: DOWNVOTE });

        createRequest(getState, 'POST', url)
            .then(res => {
                if(res.status !== 200){
                    dispatch({ type: DOWNVOTE_FAIL, payload: res.json().error_message });
                }
            });
    };
}

export function clearVoteError() {
    return dispatch => {
        dispatch({ type: CLEAR_VOTE_ERROR });
    }
}
