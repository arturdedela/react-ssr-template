import { RouterState, RouterParams } from 'store/router/types';
import { PageName, PAGES } from 'pages';
import { matchPath } from 'react-router';

export function matchUrl(url: string): RouterState {
    for (const pageName of Object.keys(PAGES) as PageName[]) {
        const result = matchPath<RouterParams>(url, PAGES[pageName]);

        if (result) {
            return { pageName, ...result };
        }
    }
}
