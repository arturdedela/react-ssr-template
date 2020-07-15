import * as React from 'react';

import { cn } from '@bem-react/classname';

import { Switch, Route } from 'react-router';
import { PAGES } from 'pages';
import { Routes } from 'routes';

import 'components/App/App.scss';

const cnApp = cn('App');

export interface AppProps {}

export function App({}: AppProps) {
    return (
        <div className={cnApp()}>
            <Switch>
                {(Object.keys(PAGES) as Routes[]).map((route) => (
                    <Route key={route} {...PAGES[route]} />
                ))}
            </Switch>
        </div>
    );
}
