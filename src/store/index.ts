import { combineReducers } from 'redux';
import { routerReducer } from 'store/router/reducers';
import { createAction, PayloadAction } from '@reduxjs/toolkit';

const storeReducer = combineReducers({
    router: routerReducer,
});

export type AppState = ReturnType<typeof storeReducer>;

export const mergeState = createAction<Partial<AppState>>('mergeState');

export function rootReducer(state: AppState | undefined, action: PayloadAction<Partial<AppState>>): AppState {
    state = storeReducer(state, action);

    switch (action.type) {
        case mergeState.type:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
