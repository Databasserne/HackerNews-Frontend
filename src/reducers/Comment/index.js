import { combineReducers } from 'redux';

import CommentInfoReducer from './CommentInfoReducer';
import CommentRelationReducer from './CommentRelationReducer';

const commentReducer = combineReducers({
    info: CommentInfoReducer,
    relation: CommentRelationReducer,
}); 

export default commentReducer;
