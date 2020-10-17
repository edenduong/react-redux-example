import {VIEW_DETAIL} from '../constants/ActionTypes';

// initialState
const initialState = {
    'age' : '11'
}

export default function detailReducer(state = initialState, action) {
    switch (action.type) {
        case VIEW_DETAIL:
            //console.log(...state);
            return {
                ...state,
                'age' : '12'
            }

        default:
            return state;
    }
}
