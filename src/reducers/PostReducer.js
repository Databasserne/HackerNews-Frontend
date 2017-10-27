import {
    FETCHING_POST_DATA,
    FETCHING_POST_DATA_SUCCESS,
    FETCHING_POST_DATA_FAIL
} from '../utils/ActionTypes';

const initialState = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null
}


export default (state = initialState, action) => {
    console.log("prev State", state);
    var newState;
    switch(action.type){
        case FETCHING_POST_DATA:
        console.log(action);
            return Object.assign(state, {
                isFetching: false,
                data: action.payload.data,
                hasError: false,
                errorMessage: null
            });
        case FETCHING_POST_DATA_SUCCESS: 
            return Object.assign(state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });
        case FETCHING_POST_DATA_FAIL:
            return Object.assign(state, {
                isFetching: false,
                data: [],
                hasError: true,
                errorMessage: action.payload
            });
        default:
            return state;
    }
};
    