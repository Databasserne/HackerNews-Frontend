import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import jwtDecode from 'jwt-decode';

import rootReducer from './reducers';
import { LOGIN_SUCCESS } from './utils/ActionTypes';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
);

if (window.localStorage) {
    const token = window.localStorage.getItem("token");

    if (token != null) {
        const decodedJwt = jwtDecode(token);

        Store.dispatch({
            type: LOGIN_SUCCESS,
            payload: { ...decodedJwt, token: token }
        });
    }
}

export default Store;
