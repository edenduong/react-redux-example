import {Observable} from 'rxjs';
import {VIEW_DETAIL} from "../constants/ActionTypes";
import {combineEpics} from 'redux-observable';
/**
 * continue login will remove all current session
 * @param action$
 * @returns {Observable<any>}
 */
function GetProductDetailEpic(action$) {
    return action$.ofType(VIEW_DETAIL)
        .mergeMap(() => Observable.from(

            )
        );
}


/**
 *
 */
export const productEpic = combineEpics(
    GetProductDetailEpic,
);

export default productEpic;



