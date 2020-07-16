import { Store } from 'schema/Store';
import { rootReducer, AppState } from 'store';
import { configureStore } from '@reduxjs/toolkit';

export function createStore(state: AppState): Store {
    return configureStore({
        reducer: rootReducer,
        devTools: true,
        preloadedState: state,
    });
}
