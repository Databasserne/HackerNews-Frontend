export const createRequest = (getState, method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${getState().auth.token}`,
            'Content-Type': 'application/json'
        }
    });
}
