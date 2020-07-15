import { combineReducers, Action } from 'redux';
import { routerReducer } from 'store/router/reducers';

export const MERGE_STATE = 'MERGE_STATE';

const storeReducer = combineReducers({
    router: routerReducer,
});

export type AppState = ReturnType<typeof storeReducer>;

export interface MergeStateAction {
    type: typeof MERGE_STATE;
    payload: Partial<AppState>;
}

export function mergeState(state: Partial<AppState>): MergeStateAction {
    return {
        type: MERGE_STATE,
        payload: state,
    };
}

export function rootReducer(state: AppState | undefined, action: Action<any>): AppState {
    state = storeReducer(state, action);

    switch (action.type) {
        case 'MERGE_STATE':
            return { ...state, ...(action as MergeStateAction).payload };
        default:
            return state;
    }
}
