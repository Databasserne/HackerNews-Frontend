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
