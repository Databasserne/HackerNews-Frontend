import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import jwtDecode from 'jwt-decode';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

var initialState = undefined;

if (window.localStorage) {
    const token = window.localStorage.getItem("token");

    if (token != null) {
        const decodedJwt = jwtDecode(token);

        initialState = {
            auth: {
                token,
                isLoggedIn: true
            },
            user: {
                userInfo: {
                    fullname: decodedJwt.fullname,
                    username: decodedJwt.username
                }
            }
        }
    }
}

const Store = createStore(
    rootReducer,
    initialState,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default Store;
