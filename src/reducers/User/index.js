import { combineReducers } from 'redux';

import UserPostReducer from './UserPostReducer';
import UserInfoReducer from './UserInfoReducer';

const userReducer = combineReducers({
    posts: UserPostReducer,
    userInfo: UserInfoReducer,
});

export default userReducer;
