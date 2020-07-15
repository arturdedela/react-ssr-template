import * as redux from 'redux';

import { Store } from 'schema/Store';
import { rootReducer, AppState } from 'store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export function createStore(state: AppState): Store {
    const enhancer = composeWithDevTools(applyMiddleware(thunk));

    return redux.createStore<AppState, redux.Action, unknown, unknown>(rootReducer, state, enhancer);
}
