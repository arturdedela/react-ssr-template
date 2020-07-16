import { RouterState } from 'store/router/types';
import { AppState } from 'store';
import { PageName } from '../../pages';

export async function getData(router: RouterState): Promise<Partial<AppState>> {
    if (!router) {
        throw new Error(`Router is not defined`);
    }

    if (router.pageName === PageName.HOME) {
        return {};
    }

    if (router.pageName === PageName.DASHBOARD) {
        return {};
    }

    throw new Error(`Cannot find data for route "${router.pageName}"`);
}
