import { AppState } from 'store';
import { PageName } from 'pages';

export function getPageName(state: Optional<AppState>): PageName {
    if (state && state.router && state.router.pageName) {
        return state.router.pageName;
    }

    return PageName.NOT_FOUND;
}
