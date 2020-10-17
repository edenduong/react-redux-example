import {combineEpics} from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import productEpic from "./ProductEpic";

export default () => {
    const epic$ = new BehaviorSubject(combineEpics(
        productEpic
    ));

    const rootEpic = (action$, store) =>
        epic$.mergeMap(epic =>
            epic(action$, store)
        );

    return rootEpic
}
