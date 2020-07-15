import { Routes } from 'routes';

import { RouteProps } from 'react-router';
import { lazyComponentBabel } from 'components/Lazy/Lazy';

export const PAGES: Record<Routes, RouteProps> = {
    [Routes.HOME]: {
        exact: true,
        path: '/',
        component: lazyComponentBabel(() =>
            import(/* webpackChunkName: "page.home" */ 'components/Section/HomeSection/HomeSection'),
        ),
    },

    [Routes.DASHBOARD]: {
        path: '/dashboard',

        component: lazyComponentBabel(() =>
            import(/* webpackChunkName: "page.dashboard" */ 'components/Section/DashboardSection/DashboardSection'),
        ),
    },

    [Routes.NOT_FOUND]: {
        component: lazyComponentBabel(() =>
            import(/* webpackChunkName: "page.notFound" */ 'components/Section/NotFoundContent/NotFoundContent'),
        ),
    },
};
