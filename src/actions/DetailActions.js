import * as types from '../constants/ActionTypes';

export function getList() {
    return {
        type: types.VIEW_DETAIL
    };
}

export function add() {
    return {
        type: types.ADD
    };
}