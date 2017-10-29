import { combineReducers } from 'redux';

import PostReducer from './PostReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    posts: PostReducer,
    user: UserReducer
});

export default rootReducer;
