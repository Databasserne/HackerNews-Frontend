import { apiBaseURL } from './Constants';

export const getPostsUrl = () => {
    return `${apiBaseURL}api/v1/post/`;
};

export const getPostUrl = (id) => {
    return `${apiBaseURL}api/v1/post/${id}`;
};

export const getLoginUrl = () => {
    return `${apiBaseURL}api/v1/auth/login`;
}

export const getRegisterUrl = () => {
    return `${apiBaseURL}api/v1/auth/signup`;
}

export const userInfoUrl = () => {
    return `${apiBaseURL}api/v1/user/me`;
}

export const getUpdateUserUrl = () => {
    return `${apiBaseURL}api/v1/user/edit`;
}

export const upvotePostUrl = (id) => {
    return `${apiBaseURL}api/v1/post/${id}/upvote`;
}

export const downvotePostUrl = (id) => {
    return `${apiBaseURL}api/v1/post/${id}/downvote`;
}

export const getUserPostsUrl = () => {
    return `${apiBaseURL}api/v1/user/post`;
}

export const getEditPostUrl = (id) => {
    return `${apiBaseURL}api/v1/post/${id}`;
}

export const getDeletePostUrl = (id) => {
    return `${apiBaseURL}api/v1/post/${id}`;
}

export const getNewPostUrl = () => {
    return `${apiBaseURL}api/v1/post`;
}

export const getCommentUpvoteUrl = (postId, commentId) => {
    return `${apiBaseURL}api/v1/post/${postId}/comment/${commentId}/upvote`;
}

export const getCommentDownvoteUrl = (postId, commentId) => {
    return `${apiBaseURL}api/v1/post/${postId}/comment/${commentId}/downvote`;
}

export const getCommentsUrl = (postId) => {
    return `${apiBaseURL}api/v1/post/${postId}/comment`;
}

export const getAddCommentToPostUrl = (postId) => {
    return `${apiBaseURL}api/v1/post/${postId}/comment`;
}
