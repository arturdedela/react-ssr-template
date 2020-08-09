import * as React from 'react';
import { Switch, Route } from 'react-router';
import { PageName, PAGES } from 'pages';

import 'components/App/App.scss';

export interface AppProps {}

export function App({}: AppProps) {
    return (
        <div>
            <Switch>
                {(Object.keys(PAGES) as PageName[]).map((pageName) => (
                    <Route key={pageName} {...PAGES[pageName]} />
                ))}
            </Switch>
        </div>
    );
}
