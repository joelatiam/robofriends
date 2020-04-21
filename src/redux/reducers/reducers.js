import * as constants from '../constants';

const initialStateSearch = {
    searchFields: '',
};

export const searchRobots = (state = initialStateSearch, action ={}) => {
    switch(action.type) {
        case(constants.CHANGE_SEARCH_FIELD):
            const obj = { ...state, searchFields: action.payload };
            return obj;
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
};

export const requestRobots = (state = initialStateRobots, action ={}) => {
    let obj = undefined;
    switch(action.type) {
        case(constants.REQUEST_ROBOT_PENDING):
            obj = { ...state, isPending: true };
            return obj;
        case(constants.REQUEST_ROBOT_SUCCESS):
            obj = { ...state, isPending: false, robots: action.payload };
            return obj;
        case(constants.REQUEST_ROBOT_FAILED):
            obj = { ...state, isPending: false, error: action.payload };
            return obj;
        default:
            return state;
    }
}
