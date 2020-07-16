import * as React from 'react';

import { cn } from '@bem-react/classname';

import { Switch, Route } from 'react-router';
import { PageName, PAGES } from 'pages';

import 'components/App/App.scss';

const cnApp = cn('App');

export interface AppProps {}

export function App({}: AppProps) {
    return (
        <div className={cnApp()}>
            <Switch>
                {(Object.keys(PAGES) as PageName[]).map((pageName) => (
                    <Route key={pageName} {...PAGES[pageName]} />
                ))}
            </Switch>
        </div>
    );
}
