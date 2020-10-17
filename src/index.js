import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import Detail from './components/detail';
import rootReducer from './reducers/rootReducer';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epic';

// initialState
const initialState = {}

const epicMiddleware = createEpicMiddleware(rootEpic());

// Create store
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        createLogger(),
        epicMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Detail />
        </div>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
