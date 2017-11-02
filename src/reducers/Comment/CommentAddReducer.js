import {
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS
} from '../../utils/ActionTypes';

const initialState = {
    isAdding: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                isAdding: true
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                isAdding: false
            }
        default:
            return state;
    }
};
