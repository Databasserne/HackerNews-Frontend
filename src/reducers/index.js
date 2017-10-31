import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import UserReducer from './User';

const rootReducer = combineReducers({
    posts: PostReducer,
    user: UserReducer,
    auth: AuthReducer
});

export default rootReducer;
