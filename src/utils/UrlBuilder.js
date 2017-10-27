import { apiBaseURL } from './Constants';

export const getPostsUrl = () => {
    const url = `${apiBaseURL}api/v1/post/`;
    return url;
};
