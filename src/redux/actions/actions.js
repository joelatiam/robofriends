import * as constants from '../constants';

export function setSearchField (text) {
    return {
        type: constants.CHANGE_SEARCH_FIELD,
        payload: text,
    }; 
}

export function requestRobots(){
    return function (dispatch) {
        dispatch({type: constants.REQUEST_ROBOT_PENDING});
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(robots => dispatch({
            type: constants.REQUEST_ROBOT_SUCCESS,  
            payload: robots,
            }))
            .catch(error => dispatch({
                type: constants.REQUEST_ROBOT_FAILED,  
                payload: error,
                }))
    }
}
