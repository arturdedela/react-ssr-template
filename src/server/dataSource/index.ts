import { RouterState } from 'store/router/types';
import { AppState } from 'store';
import { Routes } from 'routes';

export async function getData(router: RouterState): Promise<Partial<AppState>> {
    if (!router) {
        throw new Error(`Router is not defined`);
    }

    if (router.route === Routes.HOME) {
        return {};
    }

    if (router.route === Routes.DASHBOARD) {
        return {};
    }

    throw new Error(`Cannot find data for route "${router.route}"`);
}
