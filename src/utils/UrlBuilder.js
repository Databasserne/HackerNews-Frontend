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
    return `${apiBaseURL}api/v1/post/${id}/upvote`
}

export const downvotePostUrl = (id) => {
    return `${apiBaseURL}api/v1/post/${id}/downvote`
}
