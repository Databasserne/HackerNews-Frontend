import { apiBaseURL } from './Constants';

export const getPostsUrl = () => {
    return `${apiBaseURL}api/v1/post/`;
};

export const getLoginUrl = () => {
    return `${apiBaseURL}api/v1/auth/login`;
}
