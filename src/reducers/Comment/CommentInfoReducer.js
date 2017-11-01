import {
} from '../../utils/ActionTypes';

const initialState = {
    1: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: true,
        hasDownvoted: false,
        votes: 1
    },
    2: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: true,
        hasDownvoted: false,
        votes: 1
    },
    3: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: true,
        hasDownvoted: false,
        votes: 1
    },
    4: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: true,
        hasDownvoted: false,
        votes: 1
    },
    5: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: false,
        hasDownvoted: true,
        votes: 1
    },
    6: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: false,
        hasDownvoted: false,
        votes: 1
    },
    7: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: false,
        hasDownvoted: true,
        votes: 1
    },
    8: {
        body: "Hallo",
        author: "Alexander",
        hasUpvoted: false,
        hasDownvoted: false,
        votes: 1
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
