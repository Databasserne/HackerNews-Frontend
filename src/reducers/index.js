import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import UserReducer from './User';
import CommentReducer from './Comment';

const rootReducer = combineReducers({
    posts: PostReducer,
    user: UserReducer,
    auth: AuthReducer,
    comment: CommentReducer
});

export default rootReducer;
