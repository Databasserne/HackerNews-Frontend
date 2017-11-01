import {
    ADD_COMMENT
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
        default:
            return state;
    }
};
