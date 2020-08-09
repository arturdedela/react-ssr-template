import { RouteProps } from 'react-router';
import { Routes } from 'routes';
import loadable from '@loadable/component';

export enum PageName {
    HOME = 'home',
    DASHBOARD = 'dashboard',
    NOT_FOUND = 'notFound',
}

export const PAGES: Record<PageName, RouteProps> = {
    [PageName.HOME]: {
        exact: true,
        path: Routes.HOME,
        component: loadable(() =>
            import(/* webpackChunkName: "page.home" */ 'components/Section/HomeSection/HomeSection'),
        ),
    },

    [PageName.DASHBOARD]: {
        path: Routes.DASHBOARD,

        component: loadable(() =>
            import(/* webpackChunkName: "page.dashboard" */ 'components/Section/DashboardSection/DashboardSection'),
        ),
    },

    [PageName.NOT_FOUND]: {
        component: loadable(() =>
            import(/* webpackChunkName: "page.notFound" */ 'components/Section/NotFoundContent/NotFoundContent'),
        ),
    },
};
