import { combineReducers } from 'redux';
import detail from './detailReducer';
import list from './listReducer';

const rootReducer = combineReducers({
    detail,
    list
});

export default rootReducer;
