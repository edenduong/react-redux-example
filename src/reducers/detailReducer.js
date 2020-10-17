import {VIEW_DETAIL, ADD} from '../constants/ActionTypes';

// initialState
const initialState = {
    'name': 0
}

export default function detailReducer(state = initialState, action) {
    switch (action.type) {
        case VIEW_DETAIL:
            return {
                ...state,
                'name' : state.name + 1
            }
        case ADD:
            return {
                ...state,
                'name' : state.name + 1
            }
        default:
            return state;
    }
}
