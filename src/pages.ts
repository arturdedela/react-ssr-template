import { RouteProps } from 'react-router';
import { lazyComponentBabel } from 'components/Lazy/Lazy';
import { Routes } from 'routes';

export enum PageName {
    HOME = 'home',
    DASHBOARD = 'dashboard',
    NOT_FOUND = 'notFound',
}

export const PAGES: Record<PageName, RouteProps> = {
    [PageName.HOME]: {
        exact: true,
        path: Routes.HOME,
        component: lazyComponentBabel(() =>
            import(/* webpackChunkName: "page.home" */ 'components/Section/HomeSection/HomeSection'),
        ),
    },

    [PageName.DASHBOARD]: {
        path: Routes.DASHBOARD,

        component: lazyComponentBabel(() =>
            import(/* webpackChunkName: "page.dashboard" */ 'components/Section/DashboardSection/DashboardSection'),
        ),
    },

    [PageName.NOT_FOUND]: {
        component: lazyComponentBabel(() =>
            import(/* webpackChunkName: "page.notFound" */ 'components/Section/NotFoundContent/NotFoundContent'),
        ),
    },
};
