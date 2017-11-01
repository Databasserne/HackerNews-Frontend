import {
} from '../../utils/ActionTypes';

const initialState = {
    0: [1, 4],
    1: [2],
    2: [3],
    4: [5, 7],
    5: [6],
    7: [8]
};


export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
