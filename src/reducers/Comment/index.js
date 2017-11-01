import { combineReducers } from 'redux';

import CommentInfoReducer from './CommentInfoReducer';
import CommentRelationReducer from './CommentRelationReducer';
import CommentAddReducer from './CommentAddReducer';

const commentReducer = combineReducers({
    add: CommentAddReducer,
    info: CommentInfoReducer,
    relation: CommentRelationReducer,
}); 

export default commentReducer;
